// 국가별 대표 이미지 URL 매핑 (Unsplash)
// 키: 국가 ID (ISO 코드), 값: Unsplash 이미지 URL

export const COUNTRY_IMAGES: Record<string, string> = {
  // 아시아
  JP: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=800&fit=crop", // 일본 - 후지산
  CN: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=800&fit=crop", // 중국 - 만리장성
  TH: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=800&fit=crop", // 태국 - 방콕 사원
  VN: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&h=800&fit=crop", // 베트남 - 하롱베이
  SG: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=800&fit=crop", // 싱가포르 - 마리나베이
  TW: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600&h=800&fit=crop", // 대만 - 지우펀
  PH: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&h=800&fit=crop", // 필리핀 - 해변
  MY: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=800&fit=crop", // 말레이시아 - 쿠알라룸푸르
  ID: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=800&fit=crop", // 인도네시아 - 발리
  IN: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop", // 인도 - 타지마할
  KH: "https://images.unsplash.com/photo-1569321622450-b9c00741d4ea?w=600&h=800&fit=crop", // 캄보디아 - 앙코르와트
  LA: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=800&fit=crop", // 라오스 - 루앙프라방
  MM: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=600&h=800&fit=crop", // 미얀마 - 쉐다곤 파고다
  HK: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&h=800&fit=crop", // 홍콩 - 스카이라인
  MO: "https://images.unsplash.com/photo-1555217851-6141535bd771?w=600&h=800&fit=crop", // 마카오

  // 유럽
  FR: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=800&fit=crop", // 프랑스 - 에펠탑
  IT: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=800&fit=crop", // 이탈리아 - 베네치아
  ES: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&h=800&fit=crop", // 스페인 - 바르셀로나
  GB: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=800&fit=crop", // 영국 - 런던
  DE: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=800&fit=crop", // 독일 - 노이슈반슈타인
  CH: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=800&fit=crop", // 스위스 - 알프스
  GR: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=800&fit=crop", // 그리스 - 산토리니
  PT: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=800&fit=crop", // 포르투갈 - 리스본
  NL: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=800&fit=crop", // 네덜란드 - 암스테르담
  CZ: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&h=800&fit=crop", // 체코 - 프라하
  AT: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&h=800&fit=crop", // 오스트리아 - 할슈타트
  HR: "https://images.unsplash.com/photo-1565620731-82fcac116a80?w=600&h=800&fit=crop", // 크로아티아 - 두브로브니크
  SE: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&h=800&fit=crop", // 스웨덴 - 스톡홀름
  NO: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=800&fit=crop", // 노르웨이 - 피요르드
  FI: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=600&h=800&fit=crop", // 핀란드 - 오로라
  IS: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=800&fit=crop", // 아이슬란드

  // 북미
  US: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=800&fit=crop", // 미국 - 자유의 여신상
  CA: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=800&fit=crop", // 캐나다 - 로키산맥
  MX: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=800&fit=crop", // 멕시코 - 칸쿤

  // 남미
  BR: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=800&fit=crop", // 브라질 - 리오
  AR: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&h=800&fit=crop", // 아르헨티나 - 부에노스아이레스
  PE: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=800&fit=crop", // 페루 - 마추픽추
  CL: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=800&fit=crop", // 칠레
  CO: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=600&h=800&fit=crop", // 콜롬비아 - 카르타헤나

  // 오세아니아
  AU: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=800&fit=crop", // 호주 - 시드니
  NZ: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&h=800&fit=crop", // 뉴질랜드
  FJ: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&h=800&fit=crop", // 피지 - 열대 해변

  // 아프리카
  ZA: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=800&fit=crop", // 남아프리카 - 케이프타운
  EG: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&h=800&fit=crop", // 이집트 - 피라미드
  MA: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=800&fit=crop", // 모로코 - 마라케시
  KE: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=800&fit=crop", // 케냐 - 사파리
  TZ: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=800&fit=crop", // 탄자니아 - 세렝게티

  // 중동
  AE: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=800&fit=crop", // UAE - 두바이
  TR: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=800&fit=crop", // 튀르키예 - 이스탄불
  IL: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=800&fit=crop", // 이스라엘 - 예루살렘
  JO: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=600&h=800&fit=crop", // 요르단 - 페트라
  SA: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&h=800&fit=crop", // 사우디아라비아 - 알울라
  QA: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=600&h=800&fit=crop", // 카타르 - 도하
  OM: "https://images.unsplash.com/photo-1598787898267-0b908c3ee18e?w=600&h=800&fit=crop", // 오만 - 술탄 카부스 그랜드 모스크
};

// 국가 ID로 이미지 URL 가져오기 (없으면 null 반환)
export function getCountryImage(countryId: string): string | null {
  return COUNTRY_IMAGES[countryId] ?? null;
}
