/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Country, VisaStatus, Continent, CONTINENTS } from "@/lib/types";
import { getCountryImage } from "@/lib/countryImages";

// 한국인 인기 여행지 9개국 (고정)
const POPULAR_IDS = ["JP", "TH", "VN", "US", "FR", "TW", "SG", "AU", "GB"];

// 정렬 옵션
type SortType = "default" | "name_asc" | "name_desc";

// 비자 필터 옵션
const VISA_FILTERS: { value: VisaStatus | "all"; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "visa_free", label: "무비자" },
  { value: "visa_on_arrival", label: "도착비자" },
  { value: "e_visa", label: "전자비자" },
  { value: "visa_required", label: "비자 필요" },
];

interface PopularCountriesProps {
  countries: Country[];
}

// 국가 데이터에서 필수항목 태그 생성
function getRequirementTags(country: Country) {
  const tags: { label: string; color: string }[] = [];

  // 비자 상태
  switch (country.visaStatus) {
    case "visa_free":
      tags.push({ label: "무비자", color: "text-emerald-400 bg-emerald-500/15" });
      break;
    case "visa_required":
      tags.push({ label: "비자 필요", color: "text-red-400 bg-red-500/15" });
      break;
    case "visa_on_arrival":
      tags.push({ label: "도착비자", color: "text-sky-400 bg-sky-500/15" });
      break;
    case "e_visa":
      tags.push({ label: "전자비자", color: "text-amber-400 bg-amber-500/15" });
      break;
  }

  // 입국 등록
  if (country.entryRegistration) {
    const reg = country.entryRegistration;
    tags.push({
      label: reg.required ? `${reg.type} 필수` : `${reg.type} 권장`,
      color: reg.required ? "text-red-400 bg-red-500/15" : "text-sky-400 bg-sky-500/15",
    });
  } else {
    tags.push({ label: "사전등록 불필요", color: "text-slate-400 bg-slate-500/15" });
  }

  // 여권 유효기간
  if (country.passportValidity) {
    tags.push({
      label: `여권 ${country.passportValidity.months}개월+`,
      color: "text-slate-400 bg-slate-500/15",
    });
  }

  return tags;
}

export default function PopularCountries({ countries }: PopularCountriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [sortType, setSortType] = useState<SortType>("default");
  const [continentFilter, setContinentFilter] = useState<Continent | "all">("all");
  const [visaFilter, setVisaFilter] = useState<VisaStatus | "all">("all");

  // 히어로 섹션 검색바 연동
  useEffect(() => {
    const handleHeroSearch = (e: Event) => {
      setSearchQuery((e as CustomEvent<string>).detail);
      setShowAll(false);
    };
    window.addEventListener("hero-search", handleHeroSearch);
    return () => window.removeEventListener("hero-search", handleHeroSearch);
  }, []);

  // 필터 초기화
  const resetFilters = () => {
    setSortType("default");
    setContinentFilter("all");
    setVisaFilter("all");
  };

  const hasActiveFilter = sortType !== "default" || continentFilter !== "all" || visaFilter !== "all";

  // 검색 중이면 전체 필터, 전체보기면 전체, 아니면 인기 9개국만
  const displayCountries = useMemo(() => {
    let result: Country[];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const keywords = q.split(/[\s,]+/);
      result = countries.filter((c) =>
        keywords.some(
          (kw) =>
            c.nameKo.includes(kw) ||
            c.nameEn.toLowerCase().includes(kw) ||
            c.continent.includes(kw)
        )
      );
    } else if (showAll) {
      result = [...countries];
    } else {
      // 인기 9개국 순서 유지
      return POPULAR_IDS
        .map((id) => countries.find((c) => c.id === id))
        .filter(Boolean) as Country[];
    }

    // 대륙 필터
    if (continentFilter !== "all") {
      result = result.filter((c) => c.continent === continentFilter);
    }

    // 비자 필터
    if (visaFilter !== "all") {
      result = result.filter((c) => c.visaStatus === visaFilter);
    }

    // 정렬
    if (sortType === "name_asc") {
      result.sort((a, b) => a.nameKo.localeCompare(b.nameKo, "ko"));
    } else if (sortType === "name_desc") {
      result.sort((a, b) => b.nameKo.localeCompare(a.nameKo, "ko"));
    }

    return result;
  }, [countries, searchQuery, showAll, continentFilter, visaFilter, sortType]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <section id="destinations" className="relative bg-slate-950 px-5 sm:px-8 pt-2 pb-8">
      <div className="mx-auto max-w-7xl">
        {/* 섹션 헤더 */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {isSearching ? "검색 결과" : showAll ? "전체 여행지" : "인기 여행지"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {displayCountries.length}개 국가
            </p>
          </div>
          {!isSearching && (
            <button
              onClick={() => { setShowAll(!showAll); resetFilters(); }}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              {showAll ? "인기 여행지만 ←" : "전체 보기 →"}
            </button>
          )}
        </div>

        {/* 필터 바 — 전체보기 또는 검색 중일 때만 표시 */}
        {(showAll || isSearching) && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {/* 대륙 필터 */}
            <div className="flex flex-wrap gap-1.5">
              {[{ value: "all" as const, label: "전체" }, ...CONTINENTS.map((c) => ({ value: c, label: c }))].map(
                (item) => (
                  <button
                    key={item.value}
                    onClick={() => setContinentFilter(item.value)}
                    className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                      continentFilter === item.value
                        ? "bg-white text-slate-900"
                        : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* 구분선 */}
            <div className="hidden sm:block h-4 w-px bg-slate-700" />

            {/* 비자 필터 */}
            <div className="flex flex-wrap gap-1.5">
              {VISA_FILTERS.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setVisaFilter(item.value)}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                    visaFilter === item.value
                      ? "bg-white text-slate-900"
                      : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 구분선 */}
            <div className="hidden sm:block h-4 w-px bg-slate-700" />

            {/* 정렬 */}
            <div className="flex gap-1.5">
              <button
                onClick={() => setSortType(sortType === "name_asc" ? "default" : "name_asc")}
                className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                  sortType === "name_asc"
                    ? "bg-white text-slate-900"
                    : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                }`}
              >
                가나다순
              </button>
              <button
                onClick={() => setSortType(sortType === "name_desc" ? "default" : "name_desc")}
                className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                  sortType === "name_desc"
                    ? "bg-white text-slate-900"
                    : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                }`}
              >
                역순
              </button>
            </div>

            {/* 필터 초기화 */}
            {hasActiveFilter && (
              <button
                onClick={resetFilters}
                className="rounded-full px-3 py-1 text-[11px] font-medium text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 transition-colors"
              >
                초기화
              </button>
            )}
          </div>
        )}

        {/* 국가 카드 그리드: 모바일 1열 / sm 2열 / lg 3열 */}
        {displayCountries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {displayCountries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg font-medium text-slate-400">검색 결과가 없습니다</p>
            <p className="mt-1 text-sm text-slate-500">다른 검색어로 시도해보세요.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// 국가 카드 — 가로형 레이아웃 (왼쪽: 이미지+국가명, 오른쪽: 필수항목 태그)
function CountryCard({ country }: { country: Country }) {
  const imageUrl = getCountryImage(country.id);
  const tags = getRequirementTags(country);

  return (
    <Link
      href={`/country/${country.id}`}
      className="group flex items-stretch overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200"
    >
      {/* 왼쪽: 이미지 + 국가명 */}
      <div className="relative w-28 sm:w-32 flex-shrink-0 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={country.nameKo}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800" />
        )}
        {/* 이미지 위 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/40" />

        {/* 국가명 오버레이 */}
        <div className="relative z-10 flex flex-col justify-end h-full p-3">
          <span className="text-[10px] text-white/50 uppercase tracking-wider leading-none">
            {country.nameEn}
          </span>
          <span className="text-sm font-bold text-white leading-tight mt-0.5">
            {country.flagEmoji} {country.nameKo}
          </span>
        </div>
      </div>

      {/* 오른쪽: 필수항목 태그 */}
      <div className="flex-1 flex flex-col justify-center gap-1.5 px-4 py-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center self-start rounded-md px-2 py-0.5 text-[11px] font-medium ${tag.color}`}
          >
            {tag.label}
          </span>
        ))}
        {/* 체류일수 */}
        {country.visaFreeStayDays && (
          <span className="inline-flex items-center self-start text-[11px] text-slate-500 mt-0.5">
            최대 {country.visaFreeStayDays}일 체류
          </span>
        )}
      </div>

      {/* 화살표 */}
      <div className="flex items-center pr-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 group-hover:text-slate-400 transition-colors">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </div>
    </Link>
  );
}
