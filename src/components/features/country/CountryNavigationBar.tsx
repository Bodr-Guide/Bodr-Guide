"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Country } from "@/lib/types";
import { getCountryImage, isAiGeneratedImage } from "@/lib/countryImages";
import VisaBadge from "@/components/ui/VisaBadge";

interface CountryNavigationBarProps {
  countries: Country[];
  currentCountryId: string;
}

// 나라 상세 페이지 상단의 작은 나라 네비게이션 바
export default function CountryNavigationBar({
  countries,
  currentCountryId,
}: CountryNavigationBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);

  // 무한 스크롤을 위해 카드 3번 복제
  const duplicatedCountries = [...countries, ...countries, ...countries];

  const cardWidth = 108; // w-24(96px) + gap(12px)
  const totalCards = countries.length;

  // 자동 스크롤 애니메이션
  useEffect(() => {
    if (isPaused || totalCards === 0) return;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;

      // 약 50ms마다 업데이트 (20 FPS)
      if (deltaTime >= 50) {
        setCurrentIndex((prev) => {
          const next = prev + 0.02; // 이동 속도 (더 절반으로 느리게)
          // 한 세트가 끝나면 원점으로 리셋
          if (next >= totalCards) {
            return 0;
          }
          return next;
        });
        lastTimeRef.current = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [isPaused, totalCards]);

  return (
    <div className="fixed top-0 left-40 right-20 z-50 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-transparent backdrop-blur-sm">
      <div className="py-3 px-0">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-3 transition-transform duration-100 ease-linear"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {duplicatedCountries.map((country, index) => {
              const isCurrent = country.id === currentCountryId;
              return (
                <Link
                  key={`${country.id}-${index}`}
                  href={`/country/${country.id}`}
                  className={`
                    group relative flex-shrink-0 w-24 h-28 overflow-hidden rounded-lg
                    transition-all duration-300
                    ${
                      isCurrent
                        ? "ring-2 ring-blue-500 scale-105 shadow-lg shadow-blue-500/20"
                        : "hover:scale-105 hover:ring-1 hover:ring-slate-600"
                    }
                  `}
                >
                {/* 배경 이미지 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getCountryImage(country.id)}
                  alt={country.nameKo}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${isAiGeneratedImage(country.id) ? "blur-[1px] brightness-75" : ""}`}
                  loading="lazy"
                />

                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* 상단: 비자 배지 */}
                <div className="absolute left-1.5 top-1.5 z-10">
                  <div className="scale-[0.6] origin-top-left">
                    <VisaBadge status={country.visaStatus} />
                  </div>
                </div>

                {/* 무비자 체류일수 */}
                {country.visaStatus === "visa_free" &&
                  country.visaFreeStayDays && (
                    <div className="absolute right-1.5 top-1.5 z-10 rounded-full bg-black/40 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">
                      {country.visaFreeStayDays}일
                    </div>
                  )}

                {/* 하단: 국가 정보 */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-2">
                  <p className="mb-0.5 text-[8px] font-medium uppercase tracking-wider text-slate-400 truncate">
                    {country.nameEn}
                  </p>
                  <h3 className="text-xs font-bold text-white truncate">
                    {country.flagEmoji} {country.nameKo}
                  </h3>
                </div>

                {/* 현재 나라 표시 */}
                {isCurrent && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                      현재
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}
