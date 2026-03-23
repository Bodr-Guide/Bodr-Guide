import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountryBySlug, getAllCountrySlugs } from "@/lib/countries";
import { VISA_STATUS_MAP } from "@/types/country";
import ParallaxGallery from "@/components/features/country/ParallaxGallery";
import type { VisaStatus } from "@/lib/types";

/** SSG: 빌드 시 모든 국가 경로 생성 */
export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ slug }));
}

/** 동적 메타데이터 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "국가를 찾을 수 없습니다" };

  return {
    title: `${country.nameKo} 갤러리`,
    description: `${country.nameKo} 여행 이미지와 핵심 입국 정보를 살펴보는 보더위키 갤러리 페이지`,
    alternates: {
      canonical: `/country/${country.id}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const visaInfo = VISA_STATUS_MAP[country.visaStatus];

  // 갤러리 아이템을 패럴랙스 형식으로 변환
  const galleryItems = country.galleryImages.map((img, idx) => ({
    title: img.caption || img.alt,
    image: img.url,
    category: idx === 0 ? visaInfo.label : `명소 ${idx}`,
    year: idx === 0 ? (country.visaFreeStayDays ? `${country.visaFreeStayDays}일` : "") : "",
    description: idx === 0 ? (country.visaNote || "") : (img.caption || ""),
  }));

  return (
    <>
      {/* 뒤로가기 버튼 */}
      <Link href="/" className="back-button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        돌아가기
      </Link>

      {/* 패럴랙스 갤러리 */}
      <ParallaxGallery
        items={galleryItems}
        countryNameKo={country.nameKo}
        countryNameEn={country.nameEn}
        visaStatus={country.visaStatus as VisaStatus}
        visaFreeStayDays={country.visaFreeStayDays ?? undefined}
      />
    </>
  );
}
