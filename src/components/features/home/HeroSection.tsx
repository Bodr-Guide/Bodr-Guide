"use client";

import { useState } from "react";
import Link from "next/link";

// 메인 히어로 섹션 컴포넌트
export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  // 검색 시 하단 국가 섹션으로 스크롤 및 필터 이벤트 전달
  const handleSearch = (value: string) => {
    setSearchQuery(value);

    // 커스텀 이벤트로 검색어를 PopularCountries 컴포넌트에 전달
    window.dispatchEvent(
      new CustomEvent("hero-search", { detail: value })
    );

  };

  return (
    <section className="relative overflow-hidden bg-slate-950 pb-5 pt-16">
      {/* 배경 그라데이션 효과 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-8 lg:flex-row lg:items-end lg:justify-between">
        {/* 좌측: 타이포그래피 영역 */}
        <div className="mb-6 flex-1 lg:mb-0">
          {/* 배지 — 클릭 시 비자 가이드 페이지 이동 */}
          <Link
            href="/visa-guide"
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/30 px-4 py-1.5 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
          >
            {/* 반짝임 아이콘 */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-emerald-400"
            >
              <path
                d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xs font-medium tracking-wider text-slate-300">
              2026 VISA GUIDE
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><path d="m9 18 6-6-6-6"/></svg>
          </Link>

          {/* 메인 타이틀 */}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Travel</span>
            <span className="block text-white">
              Withou<span className="text-slate-500">t</span>
            </span>
            <span className="block text-white">Borders.</span>
          </h1>
        </div>

        {/* 우측: 설명 + 검색바 */}
        <div className="flex-1 lg:max-w-md lg:pl-24 lg:pt-16">
          {/* 설명 텍스트 */}
          <p className="mb-4 ml-6 text-[15px] leading-relaxed text-slate-400">
            대한민국 여권으로 떠나는 가장 자유로운 여행.
            <br />
            전 세계 입국 규정을 한눈에 확인하세요.
          </p>

          {/* 검색바 */}
          <div className="relative">
            {/* 돋보기 아이콘 */}
            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Where to next?"
              className="w-full rounded-2xl border border-slate-600/60 bg-slate-800/30 py-3 pl-13 pr-6 text-base text-white placeholder-slate-500 outline-none transition-all focus:border-slate-500 focus:ring-1 focus:ring-slate-500/30"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
