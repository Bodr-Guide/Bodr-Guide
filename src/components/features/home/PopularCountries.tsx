"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import { Country } from "@/lib/types";
import { getCountryImage } from "@/lib/countryImages";
import VisaBadge from "@/components/ui/VisaBadge";

// 한 페이지에 표시할 카드 수
const CARDS_PER_PAGE = 4;

interface PopularCountriesProps {
  countries: Country[];
}

// 국가 카드 가로 캐러셀 섹션 컴포넌트
export default function PopularCountries({ countries }: PopularCountriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 히어로 섹션 검색바와 연동 (커스텀 이벤트 수신)
  useEffect(() => {
    const handleHeroSearch = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setSearchQuery(customEvent.detail);
      setPage(0);
    };

    window.addEventListener("hero-search", handleHeroSearch);
    return () => window.removeEventListener("hero-search", handleHeroSearch);
  }, []);

  // 검색어 기반 필터링
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return countries;
    const q = searchQuery.toLowerCase().trim();
    return countries.filter(
      (c) =>
        c.nameKo.includes(q) ||
        c.nameEn.toLowerCase().includes(q) ||
        c.continent.includes(q)
    );
  }, [countries, searchQuery]);

  const totalPages = Math.ceil(filteredCountries.length / CARDS_PER_PAGE);
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const goTo = useCallback((newPage: number) => {
    setPage(newPage);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / filteredCountries.length;
      scrollRef.current.scrollTo({
        left: newPage * CARDS_PER_PAGE * cardWidth,
        behavior: "smooth",
      });
    }
  }, [filteredCountries.length]);

  return (
    <section id="destinations" className="relative bg-slate-950 px-8 pt-4 pb-12">
      <div className="mx-auto max-w-7xl">
        {/* 헤더 + 네비게이션 화살표 */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {filteredCountries.length}개 국가
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-3">
              {/* 이전 버튼 */}
              <button
                onClick={() => canPrev && goTo(page - 1)}
                disabled={!canPrev}
                className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                  canPrev
                    ? "border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                    : "border-slate-800 text-slate-700 cursor-not-allowed"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              {/* 페이지 인디케이터 */}
              <span className="text-xs tabular-nums text-slate-500">
                {page + 1} / {totalPages}
              </span>
              {/* 다음 버튼 */}
              <button
                onClick={() => canNext && goTo(page + 1)}
                disabled={!canNext}
                className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                  canNext
                    ? "border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                    : "border-slate-800 text-slate-700 cursor-not-allowed"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* 국가 카드 가로 스크롤 */}
        {filteredCountries.length > 0 ? (
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth"
          >
            {filteredCountries.map((country) => (
              <div key={country.id} className="w-[calc(25%-12px)] flex-shrink-0">
                <CountryCard country={country} />
              </div>
            ))}
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
