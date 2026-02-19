// 국가별 이미지 (자체 호스팅 랜드마크/풍경 사진)
// 국기 아이콘은 flagcdn.com CDN 사용 (퍼블릭 도메인)

// AI 생성 플레이스홀더 이미지 국가 목록 (원본 이미지 미확보)
const AI_GENERATED_COUNTRIES = new Set<string>([]);

// 국가 ID로 랜드마크/풍경 이미지 경로 가져오기
export function getCountryImage(countryId: string): string {
  return `/images/countries/${countryId}.jpg`;
}

// AI 생성 플레이스홀더 이미지인지 확인
export function isAiGeneratedImage(countryId: string): boolean {
  return AI_GENERATED_COUNTRIES.has(countryId);
}

// 국가 ID로 국기 이미지 URL 생성 (flagcdn.com CDN 사용)
// width: 원하는 너비 (20, 40, 80, 160, 320 등)
export function getFlagUrl(countryId: string, width: number = 40): string {
  return `https://flagcdn.com/w${width}/${countryId.toLowerCase()}.png`;
}
