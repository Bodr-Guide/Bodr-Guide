"use client";

import { useEffect, useState } from "react";
import { getCapitalCoords } from "@/lib/capitalCoords";
import { fetchWeather, type WeatherData } from "@/lib/weather";

interface WeatherBadgeProps {
  countryId: string;
}

// 국가 상세 페이지 히어로 영역에 표시되는 실시간 날씨 배지
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
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [countryId]);

  // 로딩 중: 스켈레톤 배지
  if (loading) {
    return (
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3.5 py-1.5">
        <div className="w-4 h-4 bg-white/20 rounded-full animate-pulse" />
        <div className="w-10 h-4 bg-white/15 rounded animate-pulse" />
      </div>
    );
  }

  // 좌표 없음 또는 API 실패
  if (!weather) return null;

  return (
    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5 transition-all hover:bg-white/15">
      <span className="text-base leading-none">{weather.icon}</span>
      <span className="text-sm font-bold text-white">{weather.temperature}°C</span>
      <span className="text-[10px] text-white/50 hidden sm:inline">{weather.description}</span>
    </div>
  );
}
