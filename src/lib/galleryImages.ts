// 국가별 갤러리 이미지 데이터
// 패럴랙스 갤러리에서 사용하는 고화질 Unsplash 이미지

import { getCountryImage } from "./countryImages";

export interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

// 주요 20개국 갤러리 이미지 (각 5장)
export const GALLERY_IMAGES: Record<string, GalleryImage[]> = {
  // 일본
  JP: [
    { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920&auto=format&fit=crop", alt: "후지산", caption: "후지산" },
    { url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop", alt: "교토 후시미 이나리", caption: "후시미 이나리" },
    { url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1920&auto=format&fit=crop", alt: "도쿄 타워", caption: "도쿄 타워" },
    { url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920&auto=format&fit=crop", alt: "전통 정원", caption: "전통 정원" },
    { url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1920&auto=format&fit=crop", alt: "시부야 교차로", caption: "시부야 교차로" },
  ],
  // 중국
  CN: [
    { url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920&auto=format&fit=crop", alt: "만리장성", caption: "만리장성" },
    { url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1920&auto=format&fit=crop", alt: "자금성", caption: "자금성" },
    { url: "https://images.unsplash.com/photo-1474181628669-e4be02571935?q=80&w=1920&auto=format&fit=crop", alt: "상하이 스카이라인", caption: "상하이 스카이라인" },
    { url: "https://images.unsplash.com/photo-1537531383496-f4749cfc75e0?q=80&w=1920&auto=format&fit=crop", alt: "계림 산수", caption: "계림 산수" },
    { url: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?q=80&w=1920&auto=format&fit=crop", alt: "천자산", caption: "장가계" },
  ],
  // 태국
  TH: [
    { url: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1920&auto=format&fit=crop", alt: "방콕 사원", caption: "왓 아룬" },
    { url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1920&auto=format&fit=crop", alt: "피피섬", caption: "피피섬" },
    { url: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1920&auto=format&fit=crop", alt: "치앙마이 사원", caption: "치앙마이" },
    { url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=1920&auto=format&fit=crop", alt: "방콕 야경", caption: "방콕 야경" },
    { url: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1920&auto=format&fit=crop", alt: "태국 해변", caption: "크라비 해변" },
  ],
  // 베트남
  VN: [
    { url: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=1920&auto=format&fit=crop", alt: "하롱베이", caption: "하롱베이" },
    { url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1920&auto=format&fit=crop", alt: "호이안", caption: "호이안 등불" },
    { url: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=1920&auto=format&fit=crop", alt: "호치민", caption: "호치민시" },
    { url: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1920&auto=format&fit=crop", alt: "나트랑", caption: "나트랑 해변" },
    { url: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=1920&auto=format&fit=crop", alt: "사파", caption: "사파 계단식 논" },
  ],
  // 싱가포르
  SG: [
    { url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1920&auto=format&fit=crop", alt: "마리나베이 샌즈", caption: "마리나베이 샌즈" },
    { url: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1920&auto=format&fit=crop", alt: "가든스 바이 더 베이", caption: "가든스 바이 더 베이" },
    { url: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1920&auto=format&fit=crop", alt: "싱가포르 스카이라인", caption: "싱가포르 스카이라인" },
    { url: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=1920&auto=format&fit=crop", alt: "차이나타운", caption: "차이나타운" },
    { url: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1920&auto=format&fit=crop", alt: "머라이언", caption: "머라이언 공원" },
  ],
  // 대만
  TW: [
    { url: "https://images.unsplash.com/photo-1470004914212-05527e49370b?q=80&w=1920&auto=format&fit=crop", alt: "지우펀", caption: "지우펀" },
    { url: "https://images.unsplash.com/photo-1553708881-112abc53fe54?q=80&w=1920&auto=format&fit=crop", alt: "타이베이 101", caption: "타이베이 101" },
    { url: "https://images.unsplash.com/photo-1572019183334-000af04e68b4?q=80&w=1920&auto=format&fit=crop", alt: "일월담", caption: "일월담" },
    { url: "https://images.unsplash.com/photo-1527254086022-e6db2d3e4543?q=80&w=1920&auto=format&fit=crop", alt: "타로코 협곡", caption: "타로코 협곡" },
    { url: "https://images.unsplash.com/photo-1558563491-1f5e4e5e0fec?q=80&w=1920&auto=format&fit=crop", alt: "시먼딩", caption: "시먼딩 야시장" },
  ],
  // 프랑스
  FR: [
    { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1920&auto=format&fit=crop", alt: "에펠탑", caption: "에펠탑" },
    { url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1920&auto=format&fit=crop", alt: "몽마르트르", caption: "몽마르트르" },
    { url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1920&auto=format&fit=crop", alt: "세느강", caption: "세느강" },
    { url: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1920&auto=format&fit=crop", alt: "루브르 박물관", caption: "루브르 박물관" },
    { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1920&auto=format&fit=crop", alt: "프로방스", caption: "프로방스 라벤더" },
  ],
  // 이탈리아
  IT: [
    { url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1920&auto=format&fit=crop", alt: "베네치아", caption: "베네치아" },
    { url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop", alt: "콜로세움", caption: "콜로세움" },
    { url: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?q=80&w=1920&auto=format&fit=crop", alt: "피렌체", caption: "피렌체 두오모" },
    { url: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=1920&auto=format&fit=crop", alt: "아말피 해안", caption: "아말피 해안" },
    { url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1920&auto=format&fit=crop", alt: "토스카나", caption: "토스카나" },
  ],
  // 스페인
  ES: [
    { url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1920&auto=format&fit=crop", alt: "바르셀로나", caption: "사그라다 파밀리아" },
    { url: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=1920&auto=format&fit=crop", alt: "세비야", caption: "세비야 광장" },
    { url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1920&auto=format&fit=crop", alt: "그라나다", caption: "알람브라 궁전" },
    { url: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?q=80&w=1920&auto=format&fit=crop", alt: "마드리드", caption: "마드리드 왕궁" },
    { url: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80&w=1920&auto=format&fit=crop", alt: "이비자", caption: "이비자 해변" },
  ],
  // 영국
  GB: [
    { url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop", alt: "런던 브릿지", caption: "타워 브릿지" },
    { url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1920&auto=format&fit=crop", alt: "빅벤", caption: "빅벤" },
    { url: "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=1920&auto=format&fit=crop", alt: "버킹엄 궁전", caption: "버킹엄 궁전" },
    { url: "https://images.unsplash.com/photo-1543799382-9a0208331ef7?q=80&w=1920&auto=format&fit=crop", alt: "스톤헨지", caption: "스톤헨지" },
    { url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1920&auto=format&fit=crop", alt: "에든버러", caption: "에든버러 성" },
  ],
  // 독일
  DE: [
    { url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1920&auto=format&fit=crop", alt: "노이슈반슈타인 성", caption: "노이슈반슈타인 성" },
    { url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1920&auto=format&fit=crop", alt: "베를린 브란덴부르크 문", caption: "브란덴부르크 문" },
    { url: "https://images.unsplash.com/photo-1534313314376-a72289b6181e?q=80&w=1920&auto=format&fit=crop", alt: "쾰른 대성당", caption: "쾰른 대성당" },
    { url: "https://images.unsplash.com/photo-1554072675-d409f85dceab?q=80&w=1920&auto=format&fit=crop", alt: "하이델베르크", caption: "하이델베르크" },
    { url: "https://images.unsplash.com/photo-1574185649640-08f06ef6ba3c?q=80&w=1920&auto=format&fit=crop", alt: "뮌헨", caption: "뮌헨 마리엔 광장" },
  ],
  // 스위스
  CH: [
    { url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1920&auto=format&fit=crop", alt: "알프스", caption: "스위스 알프스" },
    { url: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1920&auto=format&fit=crop", alt: "마터호른", caption: "마터호른" },
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop", alt: "루체른", caption: "루체른 호수" },
    { url: "https://images.unsplash.com/photo-1504218727796-db522606b16f?q=80&w=1920&auto=format&fit=crop", alt: "인터라켄", caption: "인터라켄" },
    { url: "https://images.unsplash.com/photo-1573108037329-37aa135a142e?q=80&w=1920&auto=format&fit=crop", alt: "제네바", caption: "제네바 호수" },
  ],
  // 그리스
  GR: [
    { url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1920&auto=format&fit=crop", alt: "산토리니", caption: "산토리니" },
    { url: "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=1920&auto=format&fit=crop", alt: "아테네 파르테논", caption: "파르테논 신전" },
    { url: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?q=80&w=1920&auto=format&fit=crop", alt: "미코노스", caption: "미코노스" },
    { url: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?q=80&w=1920&auto=format&fit=crop", alt: "크레타", caption: "크레타 해변" },
    { url: "https://images.unsplash.com/photo-1572094874789-ec93ec6c0e22?q=80&w=1920&auto=format&fit=crop", alt: "자킨토스", caption: "나바지오 해변" },
  ],
  // 미국
  US: [
    { url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?q=80&w=1920&auto=format&fit=crop", alt: "뉴욕", caption: "뉴욕 스카이라인" },
    { url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1920&auto=format&fit=crop", alt: "골든게이트 브릿지", caption: "골든게이트 브릿지" },
    { url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1920&auto=format&fit=crop", alt: "그랜드 캐니언", caption: "그랜드 캐니언" },
    { url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1920&auto=format&fit=crop", alt: "자유의 여신상", caption: "자유의 여신상" },
    { url: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1920&auto=format&fit=crop", alt: "요세미티", caption: "요세미티 국립공원" },
  ],
  // 캐나다
  CA: [
    { url: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop", alt: "로키산맥", caption: "밴프 국립공원" },
    { url: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1920&auto=format&fit=crop", alt: "나이아가라 폭포", caption: "나이아가라 폭포" },
    { url: "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1920&auto=format&fit=crop", alt: "밴쿠버", caption: "밴쿠버 스카이라인" },
    { url: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1920&auto=format&fit=crop", alt: "퀘벡", caption: "퀘벡 올드타운" },
    { url: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=1920&auto=format&fit=crop", alt: "레이크 루이스", caption: "레이크 루이스" },
  ],
  // 호주
  AU: [
    { url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1920&auto=format&fit=crop", alt: "시드니 오페라하우스", caption: "시드니 오페라하우스" },
    { url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&auto=format&fit=crop", alt: "그레이트 배리어 리프", caption: "그레이트 배리어 리프" },
    { url: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=1920&auto=format&fit=crop", alt: "울루루", caption: "울루루" },
    { url: "https://images.unsplash.com/photo-1494233892892-84542a694e72?q=80&w=1920&auto=format&fit=crop", alt: "멜버른", caption: "멜버른" },
    { url: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1920&auto=format&fit=crop", alt: "골드코스트", caption: "골드코스트 해변" },
  ],
  // 뉴질랜드
  NZ: [
    { url: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1920&auto=format&fit=crop", alt: "밀포드 사운드", caption: "밀포드 사운드" },
    { url: "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=1920&auto=format&fit=crop", alt: "퀸스타운", caption: "퀸스타운" },
    { url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1920&auto=format&fit=crop", alt: "통가리로", caption: "통가리로 국립공원" },
    { url: "https://images.unsplash.com/photo-1507097634215-e82e6b548ecc?q=80&w=1920&auto=format&fit=crop", alt: "테카포 호수", caption: "테카포 호수" },
    { url: "https://images.unsplash.com/photo-1531804226530-70f8004aa44e?q=80&w=1920&auto=format&fit=crop", alt: "와이토모", caption: "와이토모 반딧불 동굴" },
  ],
  // 튀르키예
  TR: [
    { url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1920&auto=format&fit=crop", alt: "이스탄불", caption: "이스탄불" },
    { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?q=80&w=1920&auto=format&fit=crop", alt: "카파도키아", caption: "카파도키아 열기구" },
    { url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1920&auto=format&fit=crop", alt: "파묵칼레", caption: "파묵칼레" },
    { url: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=1920&auto=format&fit=crop", alt: "블루 모스크", caption: "블루 모스크" },
    { url: "https://images.unsplash.com/photo-1558180077-09f158c76707?q=80&w=1920&auto=format&fit=crop", alt: "에페소스", caption: "에페소스 유적" },
  ],
  // 아랍에미리트
  AE: [
    { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop", alt: "두바이 스카이라인", caption: "두바이 스카이라인" },
    { url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1920&auto=format&fit=crop", alt: "부르즈 칼리파", caption: "부르즈 칼리파" },
    { url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1920&auto=format&fit=crop", alt: "팜 주메이라", caption: "팜 주메이라" },
    { url: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1920&auto=format&fit=crop", alt: "아부다비 모스크", caption: "셰이크 자이드 모스크" },
    { url: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1920&auto=format&fit=crop", alt: "두바이 사막", caption: "사막 사파리" },
  ],
  // 브라질
  BR: [
    { url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1920&auto=format&fit=crop", alt: "리오 데 자네이루", caption: "리오 데 자네이루" },
    { url: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1920&auto=format&fit=crop", alt: "구세주 그리스도상", caption: "구세주 그리스도상" },
    { url: "https://images.unsplash.com/photo-1544989164-31dc3291c578?q=80&w=1920&auto=format&fit=crop", alt: "이과수 폭포", caption: "이과수 폭포" },
    { url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=1920&auto=format&fit=crop", alt: "코파카바나", caption: "코파카바나 해변" },
    { url: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1920&auto=format&fit=crop", alt: "아마존", caption: "아마존 열대우림" },
  ],
};

// 국가 ID로 갤러리 이미지 배열 가져오기
// 갤러리 데이터가 없는 경우 countryImages.ts의 단일 이미지를 5장 반복으로 fallback
export function getGalleryImages(countryId: string): GalleryImage[] {
  // 갤러리 이미지가 있으면 반환
  if (GALLERY_IMAGES[countryId]) {
    return GALLERY_IMAGES[countryId];
  }

  // fallback: 자체 호스팅 랜드마크/풍경 이미지를 사용
  const fallbackUrl = getCountryImage(countryId);
  return Array.from({ length: 5 }, (_, idx) => ({
    url: fallbackUrl,
    alt: `${countryId} 풍경 ${idx + 1}`,
    caption: `풍경 ${idx + 1}`,
  }));
}
