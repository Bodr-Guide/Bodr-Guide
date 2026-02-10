/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { VisaStatus, VISA_STATUS_MAP } from "@/lib/types";

// 갤러리 아이템 데이터 인터페이스
interface GalleryItemData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
}

// 패럴랙스 갤러리 props 인터페이스
interface ParallaxGalleryProps {
  items: Array<{
    title: string;
    image: string;
    category: string;
    year: string;
    description: string;
  }>;
  countryNameKo: string;
  countryNameEn: string;
  visaStatus: VisaStatus;
  visaFreeStayDays?: number;
}

// 패럴랙스 설정값
const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

// 비자 상태별 색상 매핑 (hex)
const VISA_COLOR_MAP: Record<string, string> = {
  green: "#22c55e",
  red: "#ef4444",
  blue: "#3b82f6",
  yellow: "#eab308",
};

// 선형 보간 함수
const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

// 순환 인덱스로 갤러리 아이템 데이터 가져오기
const getItemData = (items: GalleryItemData[], index: number) => {
  const i = ((Math.abs(index) % items.length) + items.length) % items.length;
  return items[i];
};

// 순환 인덱스에서 표시용 번호 가져오기 (01, 02, ...)
const getItemNumber = (items: GalleryItemData[], index: number) => {
  return (
    ((Math.abs(index) % items.length) + items.length) % items.length + 1
  )
    .toString()
    .padStart(2, "0");
};

export default function ParallaxGallery({
  items,
  countryNameKo,
  countryNameEn,
  visaStatus,
  visaFreeStayDays,
}: ParallaxGalleryProps) {
  const visaInfo = VISA_STATUS_MAP[visaStatus];
  // 실제 hex 색상 결정 (VISA_STATUS_MAP의 color가 hex인 경우 그대로, 아니면 매핑)
  const visaColor = visaInfo.color.startsWith("#")
    ? visaInfo.color
    : VISA_COLOR_MAP[visaInfo.color] || "#22c55e";

  // 갤러리 아이템 목록
  const galleryItems: GalleryItemData[] = items;

  const [visibleRange, setVisibleRange] = React.useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  // 애니메이션 상태 ref
  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0,
    minimapHeight: 250,
  });

  // DOM 참조 맵
  const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const requestRef = React.useRef<number>(0);
  const renderedRange = React.useRef({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  // 이미지 패럴랙스 효과 업데이트
  const updateParallax = (
    img: HTMLImageElement | null,
    scroll: number,
    index: number,
    height: number
  ) => {
    if (!img) return;
    if (!img.dataset.parallaxCurrent) img.dataset.parallaxCurrent = "0";
    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);
    if (Math.abs(current - target) > 0.01) {
      img.style.transform = `translateY(${current}px) scale(1.5)`;
      img.dataset.parallaxCurrent = current.toString();
    }
  };

  // 스냅 애니메이션 업데이트
  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min(
      (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY = s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  // 가장 가까운 프로젝트로 스냅
  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = { time: Date.now(), y: s.targetY, target };
  };

  // 모든 요소의 위치 업데이트
  const updatePositions = () => {
    const s = state.current;
    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;
    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      updateParallax(img, s.currentY, index, s.projectHeight);
    });
    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      if (img) updateParallax(img, minimapY, index, s.minimapHeight);
    });
    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
    });
  };

  // 프레임마다 실행되는 애니메이션 로직
  const animate = () => {
    const s = state.current;
    const now = Date.now();
    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint =
        -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }
    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }
    updatePositions();
  };

  // 애니메이션 루프 (가시 범위도 함께 업데이트)
  const animationLoop = () => {
    animate();
    const s = state.current;
    const currentIndex = Math.round(-s.targetY / s.projectHeight);
    const min = currentIndex - CONFIG.BUFFER_SIZE;
    const max = currentIndex + CONFIG.BUFFER_SIZE;
    if (
      min !== renderedRange.current.min ||
      max !== renderedRange.current.max
    ) {
      renderedRange.current = { min, max };
      setVisibleRange({ min, max });
    }
    requestRef.current = requestAnimationFrame(animationLoop);
  };

  React.useEffect(() => {
    state.current.projectHeight = window.innerHeight;

    // 휠 스크롤 이벤트
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const s = state.current;
      s.isSnapping = false;
      s.lastScrollTime = Date.now();
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY
      );
      s.targetY -= delta;
    };

    // 터치 이벤트 (모바일)
    const onTouchStart = (e: TouchEvent) => {
      const s = state.current;
      s.isDragging = true;
      s.isSnapping = false;
      s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
      s.lastScrollTime = Date.now();
    };
    const onTouchMove = (e: TouchEvent) => {
      const s = state.current;
      if (!s.isDragging) return;
      s.targetY =
        s.dragStart.scrollY + (e.touches[0].clientY - s.dragStart.y) * 1.5;
      s.lastScrollTime = Date.now();
    };
    const onTouchEnd = () => {
      state.current.isDragging = false;
    };

    // 리사이즈 이벤트
    const onResize = () => {
      state.current.projectHeight = window.innerHeight;
      const container = document.querySelector(
        ".parallax-container"
      ) as HTMLElement;
      if (container) container.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", onResize);
    onResize();
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 렌더링할 인덱스 배열 생성
  const indices: number[] = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) indices.push(i);

  return (
    <div className="parallax-container">
      {/* 메인 프로젝트 이미지 리스트 */}
      <ul className="project-list">
        {indices.map((i) => {
          const data = getItemData(galleryItems, i);
          return (
            <div
              key={i}
              className="project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.title} />
            </div>
          );
        })}
      </ul>

      {/* 국가 정보 오버레이 (좌측 하단) */}
      <div className="country-info-overlay">
        <p className="country-en">{countryNameEn}</p>
        <h1>{countryNameKo}</h1>
        <span
          className="visa-badge"
          style={{
            backgroundColor: `${visaColor}20`,
            color: visaColor,
            border: `1px solid ${visaColor}40`,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: visaColor,
              display: "inline-block",
            }}
          />
          {visaInfo.label}
          {visaFreeStayDays && ` ${visaFreeStayDays}일`}
        </span>
      </div>

      {/* 미니맵 (우측 사이드) */}
      <div className="minimap">
        <div className="minimap-wrapper">
          {/* 미니맵 이미지 미리보기 */}
          <div className="minimap-img-preview">
            {indices.map((i) => {
              const data = getItemData(galleryItems, i);
              return (
                <div
                  key={i}
                  className="minimap-img-item"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el);
                    else minimapRef.current.delete(i);
                  }}
                >
                  <img src={data.image} alt={data.title} />
                </div>
              );
            })}
          </div>
          {/* 미니맵 정보 텍스트 */}
          <div className="minimap-info-list">
            {indices.map((i) => {
              const data = getItemData(galleryItems, i);
              const num = getItemNumber(galleryItems, i);
              return (
                <div
                  key={i}
                  className="minimap-item-info"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el);
                    else infoRef.current.delete(i);
                  }}
                >
                  <div className="minimap-item-info-row">
                    <p>{num}</p>
                    <p>{data.title}</p>
                  </div>
                  <div className="minimap-item-info-row">
                    <p>{data.category}</p>
                    <p>{data.year}</p>
                  </div>
                  <div className="minimap-item-info-row">
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
