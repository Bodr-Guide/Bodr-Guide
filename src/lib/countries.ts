// 메인 페이지용: src/lib/data.ts의 함수들을 re-export
// JSON 기반 국가 데이터 접근 (src/data/countries/*.json)

export {
  getAllCountries,
  getCountryById,
  getCountriesByContinent,
  searchCountries,
} from "./data";

// 갤러리 페이지용: slug 기반 데이터 접근 함수
// src/data/countries.ts의 갤러리 데이터를 사용
import { countries as galleryCountries } from "@/data/countries";

// slug로 갤러리 국가 데이터를 가져옴
export function getCountryBySlug(
  slug: string
): (typeof galleryCountries)[number] | undefined {
  return galleryCountries.find((c) => c.slug === slug);
}

// 모든 갤러리 국가 slug 목록을 반환
export function getAllCountrySlugs(): string[] {
  return galleryCountries.map((c) => c.slug);
}
