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

        {/* 네비게이션 링크 (추후 개발 예정) */}
        <div className="hidden sm:flex items-center gap-7">
          <span className="text-[13px] text-slate-500 cursor-default">Service 1</span>
          <span className="text-[13px] text-slate-500 cursor-default">Service 2</span>
          <span className="text-[13px] text-slate-500 cursor-default">Service 3</span>
        </div>
      </nav>
    </header>
  );
}
