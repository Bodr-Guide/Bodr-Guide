import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCountryById, getAllCountries } from "@/lib/data";
import { getGalleryImages } from "@/lib/galleryImages";
import { VISA_STATUS_MAP } from "@/lib/types";
import ParallaxGallery from "@/components/features/country/ParallaxGallery";

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
    title: `${country.nameKo} 입국 가이드 — BodrGuide`,
    description: `한국인 여행자를 위한 ${country.nameKo}(${country.nameEn}) 입국 요건, 비자 정보, 주의사항`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);

  // 존재하지 않는 국가 → 404
  if (!country) {
    notFound();
  }

  const galleryImages = getGalleryImages(id);
  const visaInfo = VISA_STATUS_MAP[country.visaStatus];

  // 갤러리 아이템을 패럴랙스 형식으로 변환
  const galleryItems = galleryImages.map((img, idx) => ({
    title: img.caption,
    image: img.url,
    category: idx === 0 ? visaInfo.label : `명소 ${idx}`,
    year:
      idx === 0
        ? country.visaFreeStayDays
          ? `${country.visaFreeStayDays}일`
          : ""
        : "",
    description: idx === 0 ? country.visaNote || "" : img.caption,
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
        visaStatus={country.visaStatus}
        visaFreeStayDays={country.visaFreeStayDays}
      />
    </>
  );
}
