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

        </div>
      </nav>
    </header>
  );
}
