"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Country } from "@/lib/types";
import { getCountryImage } from "@/lib/countryImages";
import VisaBadge from "@/components/ui/VisaBadge";

interface PopularCountriesProps {
  countries: Country[];
}

// 국가 카드 가로 캐러셀 섹션 컴포넌트
export default function PopularCountries({ countries }: PopularCountriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 히어로 섹션 검색바와 연동 (커스텀 이벤트 수신)
  useEffect(() => {
    const handleHeroSearch = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setSearchQuery(customEvent.detail);
      setCurrentIndex(0); // 검색 시 위치 초기화
    };

    window.addEventListener("hero-search", handleHeroSearch);
    return () => window.removeEventListener("hero-search", handleHeroSearch);
  }, []);

  // 검색어 기반 필터링 (복수 검색 지원)
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return countries;

    const q = searchQuery.toLowerCase().trim();
    const keywords = q.split(/[\s,]+/); // 띄어쓰기 또는 쉼표로 여러 검색어 분리

    return countries.filter((c) =>
      keywords.some((keyword) =>
        c.nameKo.includes(keyword) ||
        c.nameEn.toLowerCase().includes(keyword) ||
        c.continent.includes(keyword)
      )
    );
  }, [countries, searchQuery]);

  // 검색 중이 아닐 때만 무한 스크롤을 위해 카드 리스트를 3번 복제
  const isSearching = searchQuery.trim().length > 0;
  const duplicatedCountries = isSearching
    ? filteredCountries
    : [
        ...filteredCountries,
        ...filteredCountries,
        ...filteredCountries,
      ];

  const cardWidth = 25; // 각 카드가 25%
  const totalCards = filteredCountries.length;

  // 자동 스크롤 애니메이션 (검색 중이 아닐 때만)
  useEffect(() => {
    if (isPaused || totalCards === 0 || isSearching) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 0.005; // 부드러운 이동을 위한 작은 증가값 (속도 더 느리게)
        // 한 세트가 끝나면 원점으로 리셋 (끊김 없이)
        if (next >= totalCards) {
          return 0;
        }
        return next;
      });
    }, 50); // 50ms마다 업데이트

    return () => clearInterval(interval);
  }, [isPaused, totalCards, isSearching]);

  // 이전/다음 버튼 핸들러
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return totalCards - 1;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= totalCards) {
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <section id="destinations" className="relative bg-slate-950 px-8 pt-4 pb-12">
      <div className="mx-auto max-w-7xl">
        {/* 헤더 + 네비게이션 화살표 */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {filteredCountries.length}개 국가
          </p>
          {filteredCountries.length > 4 && (
            <div className="flex items-center gap-3">
              {/* 이전 버튼 */}
              <button
                onClick={handlePrev}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              {/* 다음 버튼 */}
              <button
                onClick={handleNext}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* 국가 카드 무한 스크롤 */}
        {filteredCountries.length > 0 ? (
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollContainerRef}
              className="flex gap-4 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * cardWidth)}%)`,
              }}
            >
              {duplicatedCountries.map((country, index) => (
                <div key={`${country.id}-${index}`} className="w-[calc(25%-12px)] flex-shrink-0">
                  <CountryCard country={country} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg font-medium text-slate-400">
              {countries.length === 0
                ? "국가 데이터를 준비 중입니다"
                : "검색 결과가 없습니다"}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {countries.length === 0
                ? "곧 다양한 국가 정보가 업데이트됩니다."
                : "다른 검색어로 시도해보세요."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// 개별 국가 카드 컴포넌트
function CountryCard({ country }: { country: Country }) {
  const imageUrl = getCountryImage(country.id);

  return (
    <Link
      href={`/country/${country.id}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* 배경 이미지 또는 그라데이션 fallback */}
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={country.nameKo}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
      )}

      {/* 하단 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* 상단 좌측: 비자 상태 배지 */}
      <div className="absolute left-3 top-3 z-10">
        <VisaBadge status={country.visaStatus} />
      </div>

      {/* 무비자 체류일수 배지 */}
      {country.visaStatus === "visa_free" && country.visaFreeStayDays && (
        <div className="absolute right-3 top-3 z-10 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {country.visaFreeStayDays}일
        </div>
      )}

      {/* 하단 국가 정보 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
          {country.nameEn}
        </p>
        <h3 className="text-xl font-bold text-white">
          {country.flagEmoji} {country.nameKo}
        </h3>
      </div>
    </Link>
  );
}
