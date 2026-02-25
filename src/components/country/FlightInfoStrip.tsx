"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { countryTravelInfo } from "@/data/countryTravelInfo";

interface FlightInfoStripProps {
  countryId: string;
  fallbackText: string;
}

// 히어로 퀵인포 스트립 내 비행시간 표시 컴포넌트
// 공항별 비행시간 데이터가 있으면 드롭다운으로 표시
// Portal 사용하여 부모 overflow-hidden에 영향받지 않음
export default function FlightInfoStrip({ countryId, fallbackText }: FlightInfoStripProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const flights = countryTravelInfo[countryId]?.flights;

  // 팝오버 위치 계산
  const updatePos = useCallback(() => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: Math.max(8, rect.left),
    });
  }, []);

  // 열릴 때 위치 계산 + 스크롤/리사이즈 추적
  useEffect(() => {
    if (!open) return;
    updatePos();
    window.addEventListener("scroll", updatePos, true);
    window.addEventListener("resize", updatePos);
    return () => {
      window.removeEventListener("scroll", updatePos, true);
      window.removeEventListener("resize", updatePos);
    };
  }, [open, updatePos]);

  // 외부 클릭 시 닫기
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        btnRef.current && !btnRef.current.contains(target) &&
        popRef.current && !popRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // 비행 데이터 없으면 기존 텍스트 그대로
  if (!flights || flights.length === 0) {
    return <p className="text-base sm:text-lg font-bold text-white leading-tight">{fallbackText}</p>;
  }

  // 첫 번째 항목(가장 짧은 시간)을 메인으로 표시
  const main = flights[0];

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="text-left group"
        aria-expanded={open}
        aria-label="공항별 비행시간 보기"
      >
        <p className="text-base sm:text-lg font-bold text-white leading-tight">{main.duration}</p>
        {flights.length > 1 && (
          <p className="text-[10px] text-white/60 mt-0.5 group-hover:text-white/80 transition-colors">
            +{flights.length - 1}개 공항
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`inline ml-0.5 transition-transform ${open ? "rotate-180" : ""}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </p>
        )}
      </button>

      {/* Portal로 body에 직접 렌더링 — 부모 overflow 영향 없음 */}
      {open && pos && createPortal(
        <div
          ref={popRef}
          style={{ position: "fixed", top: pos.top, left: pos.left, zIndex: 9999 }}
          className="w-64 sm:w-72 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="p-2.5 border-b border-white/10">
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-wider">인천(ICN) 출발 기준</p>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {flights.map((route, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 px-3 py-2.5 ${
                  idx !== flights.length - 1 ? "border-b border-white/5" : ""
                } hover:bg-white/5 transition-colors`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-sky-300">{route.airportCode}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white truncate">{route.airport}</p>
                  <p className="text-[10px] text-white/50 truncate">{route.airlines}</p>
                </div>
                <span className="text-xs font-bold text-sky-300 flex-shrink-0">{route.duration}</span>
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
