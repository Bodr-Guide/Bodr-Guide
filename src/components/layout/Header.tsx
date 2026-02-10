"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// 스크롤에 따라 배경이 변하는 고정 헤더 컴포넌트
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* 로고 */}
        <Link href="/" className="text-lg font-semibold italic tracking-tight text-white">
          BodrGuide.
        </Link>

        {/* 네비게이션 링크 */}
        <div className="flex items-center gap-7">
          {/* 검색 아이콘 */}
          <button
            className="text-slate-400 transition-colors hover:text-white"
            aria-label="검색"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-[18px] w-[18px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* Destinations 링크 */}
          <Link
            href="/#destinations"
            className="hidden text-[13px] text-slate-300 transition-colors hover:text-white sm:block"
          >
            Destinations
          </Link>

          {/* Magazine 링크 */}
          <Link
            href="/#magazine"
            className="hidden text-[13px] text-slate-300 transition-colors hover:text-white sm:block"
          >
            Magazine
          </Link>

          {/* Sign In 버튼 */}
          <button className="rounded-full border border-slate-600 px-4 py-1.5 text-[13px] text-slate-300 transition-colors hover:border-slate-400 hover:text-white">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
