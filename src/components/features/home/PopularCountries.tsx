/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Country, Continent, CONTINENTS } from "@/lib/types";
import { getCountryImage } from "@/lib/countryImages";

// 연간 인기 여행지 9개국 (고정)
const POPULAR_IDS = ["JP", "TH", "VN", "US", "FR", "IT", "TW", "ES", "GB"];

// 계절별 추천 여행지 (전체보기 필터용)
type Season = "봄" | "여름" | "가을" | "겨울";
const SEASON_COUNTRIES: Record<Season, Set<string>> = {
  봄: new Set(["JP", "TW", "TH", "FR", "ES", "IT", "VN", "GR", "HR", "NZ", "CH", "PT", "GB", "NL", "DE"]),
  여름: new Set(["FR", "IT", "ES", "GR", "HR", "GB", "CH", "TR", "IS", "NO", "MN", "SE", "FI", "AT", "DE", "PT"]),
  가을: new Set(["JP", "CA", "DE", "CZ", "AT", "CH", "UZ", "GE", "TR", "TW", "MN", "EG", "IT", "FR", "KR"]),
  겨울: new Set(["TH", "VN", "PH", "AU", "MV", "SG", "GU", "JP", "FI", "NO", "IS", "DE", "AT", "CZ", "AE"]),
};
const SEASON_FILTERS: { value: Season | "all"; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "봄", label: "봄 (3~5월)" },
  { value: "여름", label: "여름 (6~8월)" },
  { value: "가을", label: "가을 (9~11월)" },
  { value: "겨울", label: "겨울 (12~2월)" },
];

// 정렬 옵션
type SortType = "default" | "name_asc" | "name_desc";


interface PopularCountriesProps {
  countries: Country[];
}

// 국가 데이터에서 카드 표시 정보 생성
function getCardInfo(country: Country) {
  // 비자 상태 + 체류일수 통합 라벨
  const days = country.visaFreeStayDays;
  let visaLabel = "";
  let visaColor = "";

  switch (country.visaStatus) {
    case "visa_free":
      visaLabel = days ? `무비자 ${days}일` : "무비자";
      visaColor = "text-emerald-400 bg-emerald-500/15";
      break;
    case "visa_on_arrival":
      visaLabel = days ? `도착비자 ${days}일` : "도착비자";
      visaColor = "text-sky-400 bg-sky-500/15";
      break;
    case "e_visa":
      visaLabel = "전자비자 필요";
      visaColor = "text-amber-400 bg-amber-500/15";
      break;
    case "visa_required":
      visaLabel = "비자 필요";
      visaColor = "text-red-400 bg-red-500/15";
      break;
  }

  // 입국 등록 요구사항 (ESTA, eTA 등)
  let entryLabel = "";
  let entryColor = "";
  if (country.entryRegistration) {
    const reg = country.entryRegistration;
    entryLabel = reg.required ? `${reg.type} 필수` : `${reg.type} 권장`;
    entryColor = reg.required ? "text-orange-400 bg-orange-500/15" : "text-slate-400 bg-slate-500/15";
  }

  // 여권 유효기간
  const passportLabel = country.passportValidity
    ? `여권 ${country.passportValidity.months}개월 이상`
    : "";

  // 비자 종류 요약 (e_visa / visa_required 국가)
  const visaTypesSummary = country.visaTypes && country.visaTypes.length > 0
    ? country.visaTypes.slice(0, 2).map((v) => v.name).join(" · ")
    : "";

  return { visaLabel, visaColor, entryLabel, entryColor, passportLabel, visaTypesSummary };
}

// 페이지당 표시 개수 옵션
type PerPage = 10 | 20 | 30;
const PER_PAGE_OPTIONS: PerPage[] = [10, 20, 30];

export default function PopularCountries({ countries }: PopularCountriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [sortType, setSortType] = useState<SortType>("default");
  const [continentFilters, setContinentFilters] = useState<Set<Continent>>(new Set());
  const [seasonFilters, setSeasonFilters] = useState<Set<Season>>(new Set());
  const [perPage, setPerPage] = useState<PerPage>(30);
  const [currentPage, setCurrentPage] = useState(1);

  // 히어로 섹션 검색바 연동
  useEffect(() => {
    const handleHeroSearch = (e: Event) => {
      setSearchQuery((e as CustomEvent<string>).detail);
      setShowAll(false);
    };
    window.addEventListener("hero-search", handleHeroSearch);
    return () => window.removeEventListener("hero-search", handleHeroSearch);
  }, []);

  // 토글 헬퍼: Set에 값 추가/제거
  const toggleSet = <T,>(setter: React.Dispatch<React.SetStateAction<Set<T>>>, value: T) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  // 필터 초기화
  const resetFilters = () => {
    setSortType("default");
    setContinentFilters(new Set());
    setSeasonFilters(new Set());
    setCurrentPage(1);
  };

  const hasActiveFilter = sortType !== "default" || continentFilters.size > 0 || seasonFilters.size > 0;

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
      // 인기 여행지: 데이터가 있는 국가만 표시, 부족하면 나머지에서 채워 항상 9개 유지
      const popular = POPULAR_IDS
        .map((id) => countries.find((c) => c.id === id))
        .filter(Boolean) as Country[];
      if (popular.length < 9) {
        const usedIds = new Set(popular.map((c) => c.id));
        for (const c of countries) {
          if (popular.length >= 9) break;
          if (!usedIds.has(c.id)) {
            popular.push(c);
            usedIds.add(c.id);
          }
        }
      }
      return popular;
    }

    // 대륙 필터 (복수 선택)
    if (continentFilters.size > 0) {
      result = result.filter((c) => continentFilters.has(c.continent));
    }

    // 계절 필터 (복수 선택 — 합집합)
    if (seasonFilters.size > 0) {
      const merged = new Set<string>();
      for (const s of seasonFilters) {
        for (const id of SEASON_COUNTRIES[s]) merged.add(id);
      }
      result = result.filter((c) => merged.has(c.id));
    }

    // 정렬
    if (sortType === "name_asc") {
      result.sort((a, b) => a.nameKo.localeCompare(b.nameKo, "ko"));
    } else if (sortType === "name_desc") {
      result.sort((a, b) => b.nameKo.localeCompare(a.nameKo, "ko"));
    }

    return result;
  }, [countries, searchQuery, showAll, continentFilters, seasonFilters, sortType]);

  // 필터/검색/정렬 변경 시 페이지 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, continentFilters, seasonFilters, sortType, perPage]);

  // 페이지네이션 계산 (전체보기 또는 검색 중일 때만 적용)
  const needsPagination = (showAll || searchQuery.trim().length > 0) && displayCountries.length > perPage;
  const totalPages = needsPagination ? Math.ceil(displayCountries.length / perPage) : 1;
  const paginatedCountries = needsPagination
    ? displayCountries.slice((currentPage - 1) * perPage, currentPage * perPage)
    : displayCountries;

  // 페이지 변경 핸들러 (스크롤 이동 포함)
  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

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
            {/* 대륙 필터 (복수 선택) */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setContinentFilters(new Set())}
                className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                  continentFilters.size === 0
                    ? "bg-white text-slate-900"
                    : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                }`}
              >
                전체
              </button>
              {CONTINENTS.map((c) => (
                <button
                  key={c}
                  onClick={() => toggleSet(setContinentFilters, c)}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                    continentFilters.has(c)
                      ? "bg-white text-slate-900"
                      : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* 구분선 */}
            <div className="hidden sm:block h-4 w-px bg-slate-700" />

            {/* 계절 필터 (복수 선택) */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSeasonFilters(new Set())}
                className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                  seasonFilters.size === 0
                    ? "bg-white text-slate-900"
                    : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                }`}
              >
                전체
              </button>
              {SEASON_FILTERS.filter((f) => f.value !== "all").map((item) => (
                <button
                  key={item.value}
                  onClick={() => toggleSet(setSeasonFilters, item.value as Season)}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                    seasonFilters.has(item.value as Season)
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

        {/* 페이지당 표시 개수 선택 + 결과 요약 — 전체보기 또는 검색 중일 때 */}
        {(showAll || isSearching) && displayCountries.length > 0 && (
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[11px] text-slate-500">
              총 {displayCountries.length}개 중 {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, displayCountries.length)}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-500 mr-1">표시</span>
              {PER_PAGE_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setPerPage(n)}
                  className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors ${
                    perPage === n
                      ? "bg-white text-slate-900"
                      : "bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-slate-300"
                  }`}
                >
                  {n}개
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 국가 카드 그리드: 모바일 1열 / sm 2열 / lg 3열 */}
        {paginatedCountries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {paginatedCountries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg font-medium text-slate-400">검색 결과가 없습니다</p>
            <p className="mt-1 text-sm text-slate-500">다른 검색어로 시도해보세요.</p>
          </div>
        )}

        {/* 페이지네이션 버튼 */}
        {needsPagination && (
          <div className="mt-6 flex items-center justify-center gap-1">
            {/* 이전 페이지 */}
            <button
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-lg px-2.5 py-1.5 text-xs text-slate-400 hover:bg-slate-800 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* 페이지 번호 — 항상 최소 5개 표시 */}
            {(() => {
              const pages: (number | "...")[] = [];
              if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) pages.push(i);
              } else {
                pages.push(1);
                if (currentPage > 4) pages.push("...");
                const start = Math.max(2, currentPage - 2);
                const end = Math.min(totalPages - 1, currentPage + 2);
                for (let i = start; i <= end; i++) pages.push(i);
                if (currentPage < totalPages - 3) pages.push("...");
                pages.push(totalPages);
              }
              return pages.map((p, idx) =>
                p === "..." ? (
                  <span key={`dots-${idx}`} className="px-1.5 text-xs text-slate-600">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`min-w-[28px] rounded-lg px-2 py-1.5 text-xs font-medium transition-colors ${
                      currentPage === p
                        ? "bg-white text-slate-900"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {p}
                  </button>
                )
              );
            })()}

            {/* 다음 페이지 */}
            <button
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-lg px-2.5 py-1.5 text-xs text-slate-400 hover:bg-slate-800 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// 국가 카드 — 가로형 레이아웃 (왼쪽: 이미지+국가명, 오른쪽: 비자·입국 정보)
function CountryCard({ country }: { country: Country }) {
  const imageUrl = getCountryImage(country.id);
  const info = getCardInfo(country);

  return (
    <Link
      href={`/country/${country.id}`}
      className="group flex items-stretch overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200"
    >
      {/* 왼쪽: 이미지 + 국가명 (4:3 비율) */}
      <div className="relative w-36 sm:w-40 aspect-[4/3] flex-shrink-0 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={country.nameKo}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800" />
        )}
        {/* 이미지 위 그라데이션 — 하단 텍스트 가독성 확보 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* 국가명 오버레이 */}
        <div className="relative z-10 flex flex-col justify-end h-full p-3">
          <span className="text-xs text-white/70 uppercase tracking-wider leading-none drop-shadow-sm">
            {country.nameEn}
          </span>
          <span className="text-base font-bold text-white leading-tight mt-1 drop-shadow-lg">
            {country.flagEmoji} {country.nameKo}
          </span>
        </div>
      </div>

      {/* 오른쪽: 비자·입국 정보 */}
      <div className="flex-1 flex flex-col justify-center gap-1.5 px-4 py-3">
        {/* 비자 상태 + 체류일수 */}
        <span className={`inline-flex items-center self-start rounded-md px-2 py-0.5 text-[11px] font-bold ${info.visaColor}`}>
          {info.visaLabel}
        </span>

        {/* 입국 등록 요구사항 (ESTA, eTA 등) */}
        {info.entryLabel && (
          <span className={`inline-flex items-center self-start rounded-md px-2 py-0.5 text-[11px] font-medium ${info.entryColor}`}>
            {info.entryLabel}
          </span>
        )}

        {/* 비자 종류 요약 (전자비자/비자필요 국가) */}
        {info.visaTypesSummary && (
          <span className="inline-flex items-center self-start text-[10px] text-violet-400 bg-violet-500/10 rounded-md px-2 py-0.5">
            {info.visaTypesSummary}
          </span>
        )}

        {/* 여권 유효기간 */}
        {info.passportLabel && (
          <span className="text-[10px] text-slate-500 mt-0.5">
            {info.passportLabel}
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
