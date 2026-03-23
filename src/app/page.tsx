import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/features/home/HeroSection";
import PopularCountries from "@/components/features/home/PopularCountries";
import { getAllCountries } from "@/lib/countries";

export const metadata: Metadata = {
  title: "국가별 입국 정보·비자·여행 준비 가이드",
  description:
    "보더위키는 한국인 여행자를 위한 국가별 입국 정보, 비자, 무비자, 전자비자, 여행 준비 가이드를 제공하는 사이트입니다. 비자 정보와 여행 체크리스트 관련 키워드를 한 번에 확인하세요.",
  keywords: [
    "보더위키",
    "borderwiki",
    "국가별 입국 정보",
    "비자 가이드",
    "무비자",
    "전자비자",
    "여행 체크리스트",
    "해외여행 준비",
    "여행 준비물",
    "출국 준비",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "보더위키(BorderWiki) | 국가별 입국 정보·비자·여행 준비 가이드",
    description:
      "국가별 입국 정보, 비자, 무비자, 전자비자, 여행 준비 키워드를 보더위키에서 확인하세요.",
    url: "https://borderwiki.com",
    siteName: "보더위키(BorderWiki)",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Home() {
  const countries = getAllCountries();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PopularCountries countries={countries} />
      </main>
    </>
  );
}
