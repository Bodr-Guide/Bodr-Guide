/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCountryById, getAllCountries } from "@/lib/data";
import Header from "@/components/layout/Header";
import JapanDetailPage from "@/components/country/JapanDetailPage";
import CountryDetailPage from "@/components/country/CountryDetailPage";

// SSG: 빌드 시 모든 국가 경로를 사전 생성
export async function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    id: country.id,
  }));
}

// SEO: 동적 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    return { title: "국가를 찾을 수 없습니다" };
  }

  return {
    title: `${country.nameKo} 입국 가이드`,
    description: `한국인 여행자를 위한 ${country.nameKo}(${country.nameEn}) 입국 요건, 비자 정보, 무비자 체류 기간, 여행 준비 체크리스트와 주의사항`,
    keywords: [
      `${country.nameKo} 입국`,
      `${country.nameKo} 비자`,
      `${country.nameKo} 여행`,
      `${country.nameKo} 여행 준비`,
      `${country.nameKo} 무비자`,
      `${country.nameKo} 전자비자`,
      "보더위키",
    ],
    alternates: {
      canonical: `/country/${country.id}`,
    },
    openGraph: {
      title: `${country.nameKo} 입국 가이드 | 보더위키`,
      description: `한국인 여행자를 위한 ${country.nameKo} 비자, 입국 요건, 여행 준비 정보와 주의사항을 확인하세요.`,
      url: `https://borderwiki.com/country/${country.id}`,
      siteName: "보더위키(BorderWiki)",
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    notFound();
  }

  // 일본은 전용 상세 페이지, 나머지는 범용 상세 페이지 사용
  const DetailPage = id === "JP" ? JapanDetailPage : CountryDetailPage;

  return (
    <>
      <Header />
      <DetailPage country={country} />
    </>
  );
}
