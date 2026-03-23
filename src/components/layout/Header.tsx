"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

// 스크롤에 따라 배경이 변하는 고정 헤더 컴포넌트
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* 로고 — 메인 페이지에서는 초기 화면(인기 여행지)으로 리셋 */}
        <Link
          href="/"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("reset-view"));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-semibold italic tracking-tight text-slate-900 dark:text-white"
          aria-label="BorderWiki 홈으로 이동"
        >
          BorderWiki.
        </Link>

        {/* 우측: 네비게이션 + 테마 토글 */}
        <div className="flex items-center gap-5">
          {/* 테마 토글 스위치 */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center gap-1 rounded-full bg-slate-200 dark:bg-slate-700 p-1 transition-colors"
            aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {/* 라이트 모드 아이콘 */}
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
              theme === "light"
                ? "bg-white text-amber-500 shadow-sm"
                : "text-slate-400 dark:text-slate-500"
            }`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>

            {/* 다크 모드 아이콘 */}
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
              theme === "dark"
                ? "bg-slate-800 text-blue-400 shadow-sm"
                : "text-slate-400"
            }`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
