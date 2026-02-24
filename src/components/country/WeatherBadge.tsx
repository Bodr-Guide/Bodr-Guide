"use client";

import { useEffect, useState } from "react";
import { getCapitalCoords } from "@/lib/capitalCoords";
import { fetchWeather, type WeatherData } from "@/lib/weather";

interface WeatherBadgeProps {
  countryId: string;
}

// 국가 상세 페이지 QuickInfo 스트립 내에 표시되는 날씨 컴포넌트
export default function WeatherBadge({ countryId }: WeatherBadgeProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coords = getCapitalCoords(countryId);
    if (!coords) {
      setLoading(false);
      return;
    }

    fetchWeather(coords.lat, coords.lng)
      .then(setWeather)
      .catch(() => {}) // 실패 시 조용히 무시
      .finally(() => setLoading(false));
  }, [countryId]);

  // 로딩 중
  if (loading) {
    return (
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
          </svg>
          <span className="text-[11px] text-white/60 font-medium uppercase tracking-wider">날씨</span>
        </div>
        <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
      </div>
    );
  }

  // 좌표 없음 또는 API 실패 시 표시하지 않음
  if (!weather) return null;

  return (
    <div className="p-3 sm:p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
        <span className="text-[11px] text-white/60 font-medium uppercase tracking-wider">날씨</span>
      </div>
      <p className="text-base sm:text-lg font-bold text-white leading-tight">
        {weather.icon} {weather.temperature}°C
      </p>
      <p className="text-[10px] text-white/50 mt-0.5">{weather.description}</p>
    </div>
  );
}
