// 국가별 대표 이미지 URL 매핑 (Unsplash)
// 키: 국가 ID (ISO 코드), 값: Unsplash 이미지 URL

export const COUNTRY_IMAGES: Record<string, string> = {
  // 아시아
  JP: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=900&q=80&fit=crop", // 일본 - 후지산
  CN: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=900&q=80&fit=crop", // 중국 - 만리장성
  TH: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=900&q=80&fit=crop", // 태국 - 방콕 사원
  VN: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1200&h=900&q=80&fit=crop", // 베트남 - 하롱베이
  SG: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=900&q=80&fit=crop", // 싱가포르 - 마리나베이
  TW: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=1200&h=900&q=80&fit=crop", // 대만 - 지우펀
  PH: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&h=900&q=80&fit=crop", // 필리핀 - 해변
  MY: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=900&q=80&fit=crop", // 말레이시아 - 쿠알라룸푸르
  ID: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=900&q=80&fit=crop", // 인도네시아 - 발리
  IN: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=900&q=80&fit=crop", // 인도 - 타지마할
  KH: "https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?w=1200&h=900&q=80&fit=crop", // 캄보디아 - 앙코르와트
  LA: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=900&q=80&fit=crop", // 라오스 - 루앙프라방
  MM: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200&h=900&q=80&fit=crop", // 미얀마 - 쉐다곤 파고다
  HK: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&h=900&q=80&fit=crop", // 홍콩 - 스카이라인
  MO: "https://images.unsplash.com/photo-1555217851-6141535bd771?w=1200&h=900&q=80&fit=crop", // 마카오
  BD: "https://images.unsplash.com/photo-1624395149011-470cf6f6ec02?w=1200&h=900&q=80&fit=crop", // 방글라데시 - 다카 하티르질 호수 다리
  BN: "https://images.unsplash.com/photo-1709808971436-522aaab4447c?w=1200&h=900&q=80&fit=crop", // 브루나이 - 모스크
  BT: "https://images.unsplash.com/photo-1630230168792-345055807dbc?w=1200&h=900&q=80&fit=crop", // 부탄 - 탁상 사원(타이거스 네스트)
  KG: "https://images.unsplash.com/photo-1694167232441-fd7a2c238d19?w=1200&h=900&q=80&fit=crop", // 키르기스스탄 - 이식쿨 호수
  KZ: "https://images.unsplash.com/photo-1549615558-a2e10948ad3b?w=1200&h=900&q=80&fit=crop", // 카자흐스탄 - 아스타나
  LK: "https://images.unsplash.com/photo-1582103518262-254caeef04fb?w=1200&h=900&q=80&fit=crop", // 스리랑카 - 시기리야
  MN: "https://images.unsplash.com/photo-1745155541534-0b611f491762?w=1200&h=900&q=80&fit=crop", // 몽골 - 초원/게르
  MV: "https://images.unsplash.com/photo-1601999705946-fbf42c3c6c66?w=1200&h=900&q=80&fit=crop", // 몰디브 - 수상가옥
  NP: "https://images.unsplash.com/photo-1488249949762-27e8bf62988b?w=1200&h=900&q=80&fit=crop", // 네팔 - 히말라야
  PK: "https://images.unsplash.com/photo-1660602603310-05c6007a759f?w=1200&h=900&q=80&fit=crop", // 파키스탄 - 훈자 계곡
  TJ: "https://images.unsplash.com/photo-1621425022689-308a7b7691a3?w=1200&h=900&q=80&fit=crop", // 타지키스탄 - 파미르 고원
  TL: "https://images.unsplash.com/photo-1553242018-6496a076bd3d?w=1200&h=900&q=80&fit=crop", // 동티모르 - 해변
  UZ: "https://images.unsplash.com/photo-1728565721798-cf65c7bf1efe?w=1200&h=900&q=80&fit=crop", // 우즈베키스탄 - 사마르칸트 레기스탄

  // 유럽
  AD: "https://images.unsplash.com/photo-1580674285054-2bceb854fa3b?w=1200&h=900&q=80&fit=crop", // 안도라 - 피레네 산맥
  AL: "https://images.unsplash.com/photo-1623404967851-23b0635f73b8?w=1200&h=900&q=80&fit=crop", // 알바니아 - 티라나
  AM: "https://images.unsplash.com/photo-1611240846457-0b3a571c90c6?w=1200&h=900&q=80&fit=crop", // 아르메니아 - 에레반
  AT: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&h=900&q=80&fit=crop", // 오스트리아 - 할슈타트
  AZ: "https://images.unsplash.com/photo-1572456015295-8fc255c11d1c?w=1200&h=900&q=80&fit=crop", // 아제르바이잔 - 바쿠
  BA: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=1200&h=900&q=80&fit=crop", // 보스니아 헤르체고비나 - 모스타르
  BE: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=1200&h=900&q=80&fit=crop", // 벨기에 - 브뤼셀
  BG: "https://images.unsplash.com/photo-1565531952-e0e8f2aebd0d?w=1200&h=900&q=80&fit=crop", // 불가리아 - 소피아
  BY: "https://images.unsplash.com/photo-1607617754908-aaa56f3d76a8?w=1200&h=900&q=80&fit=crop", // 벨라루스 - 민스크
  CH: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&h=900&q=80&fit=crop", // 스위스 - 알프스
  CY: "https://images.unsplash.com/photo-1625148742398-1f4f37c23744?w=1200&h=900&q=80&fit=crop", // 키프로스 - 아야나파
  CZ: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&h=900&q=80&fit=crop", // 체코 - 프라하
  DE: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=900&q=80&fit=crop", // 독일 - 노이슈반슈타인
  DK: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&h=900&q=80&fit=crop", // 덴마크 - 코펜하겐
  EE: "https://images.unsplash.com/photo-1587726004785-f5a0e4e0e728?w=1200&h=900&q=80&fit=crop", // 에스토니아 - 탈린
  ES: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=900&q=80&fit=crop", // 스페인 - 바르셀로나
  FI: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1200&h=900&q=80&fit=crop", // 핀란드 - 오로라
  FR: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=900&q=80&fit=crop", // 프랑스 - 에펠탑
  GB: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=900&q=80&fit=crop", // 영국 - 런던
  GE: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1200&h=900&q=80&fit=crop", // 조지아 - 트빌리시
  GR: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=900&q=80&fit=crop", // 그리스 - 산토리니
  HR: "https://images.unsplash.com/photo-1555990794-6d00be0d6f95?w=1200&h=900&q=80&fit=crop", // 크로아티아 - 두브로브니크
  HU: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1200&h=900&q=80&fit=crop", // 헝가리 - 부다페스트
  IE: "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=1200&h=900&q=80&fit=crop", // 아일랜드 - 더블린
  IS: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&h=900&q=80&fit=crop", // 아이슬란드
  IT: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=900&q=80&fit=crop", // 이탈리아 - 베네치아
  LI: "https://images.unsplash.com/photo-1607968565043-36af90dde238?w=1200&h=900&q=80&fit=crop", // 리히텐슈타인 - 알프스
  LT: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=900&q=80&fit=crop", // 리투아니아 - 빌뉴스
  LU: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=900&q=80&fit=crop", // 룩셈부르크
  LV: "https://images.unsplash.com/photo-1590996136527-883a3db54f1e?w=1200&h=900&q=80&fit=crop", // 라트비아 - 리가
  MC: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?w=1200&h=900&q=80&fit=crop", // 모나코
  MD: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&h=900&q=80&fit=crop", // 몰도바 - 키시너우
  ME: "https://images.unsplash.com/photo-1600084868007-cd6c5d9f7bb2?w=1200&h=900&q=80&fit=crop", // 몬테네그로 - 코토르
  MK: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1200&h=900&q=80&fit=crop", // 북마케도니아 - 스코페
  MT: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&h=900&q=80&fit=crop", // 몰타 - 발레타
  NL: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=900&q=80&fit=crop", // 네덜란드 - 암스테르담
  NO: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=900&q=80&fit=crop", // 노르웨이 - 피요르드
  PL: "https://images.unsplash.com/photo-1580420443394-1d28561b3a7a?w=1200&h=900&q=80&fit=crop", // 폴란드 - 크라쿠프
  PT: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=900&q=80&fit=crop", // 포르투갈 - 리스본
  RO: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=900&q=80&fit=crop", // 루마니아 - 부쿠레슈티
  RS: "https://images.unsplash.com/photo-1582143278113-7e54edc2f6e3?w=1200&h=900&q=80&fit=crop", // 세르비아 - 베오그라드
  RU: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&h=900&q=80&fit=crop", // 러시아 - 모스크바
  SE: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&h=900&q=80&fit=crop", // 스웨덴 - 스톡홀름
  SI: "https://images.unsplash.com/photo-1547638375-7e95da4fb8b4?w=1200&h=900&q=80&fit=crop", // 슬로베니아 - 블레드 호수
  SK: "https://images.unsplash.com/photo-1609055726049-611e01ceaef4?w=1200&h=900&q=80&fit=crop", // 슬로바키아 - 브라티슬라바
  SM: "https://images.unsplash.com/photo-1623921711683-0256f4e1ce00?w=1200&h=900&q=80&fit=crop", // 산마리노
  UA: "https://images.unsplash.com/photo-1584881419381-980ed5d1ec17?w=1200&h=900&q=80&fit=crop", // 우크라이나 - 키이우
  VA: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&h=900&q=80&fit=crop", // 바티칸 시국
  XK: "https://images.unsplash.com/photo-1599487958150-7a2d0c1e4e2d?w=1200&h=900&q=80&fit=crop", // 코소보 - 프리슈티나

  // 북미
  US: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&h=900&q=80&fit=crop", // 미국 - 자유의 여신상
  CA: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=900&q=80&fit=crop", // 캐나다 - 로키산맥
  MX: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&h=900&q=80&fit=crop", // 멕시코 - 칸쿤

  // 북미/중미/카리브해 추가
  AG: "https://images.unsplash.com/photo-1654043621928-c29594c13336?w=1200&h=900&q=80&fit=crop", // 앤티가 바부다 - 해변
  BB: "https://images.unsplash.com/photo-1657549195441-5bf271bf7180?w=1200&h=900&q=80&fit=crop", // 바베이도스 - 해변
  BS: "https://images.unsplash.com/photo-1506126383447-1baf4fb3c267?w=1200&h=900&q=80&fit=crop", // 바하마 - 낫소 해변
  BZ: "https://images.unsplash.com/photo-1722761478075-720dc58e63d1?w=1200&h=900&q=80&fit=crop", // 벨리즈 - 블루홀
  CR: "https://images.unsplash.com/photo-1698871741610-11e817f934e3?w=1200&h=900&q=80&fit=crop", // 코스타리카 - 열대우림
  CU: "https://images.unsplash.com/photo-1634308102861-4c6fd2310298?w=1200&h=900&q=80&fit=crop", // 쿠바 - 하바나 올드카
  DM: "https://images.unsplash.com/photo-1575221165108-1c5d11ee1c51?w=1200&h=900&q=80&fit=crop", // 도미니카 - 열대 폭포
  DO: "https://images.unsplash.com/photo-1504897264915-7a1d030ccd00?w=1200&h=900&q=80&fit=crop", // 도미니카 공화국 - 푼타카나 해변
  GD: "https://images.unsplash.com/photo-1605926748878-3167189b5ac0?w=1200&h=900&q=80&fit=crop", // 그레나다 - 그랜드 앤스 해변
  GT: "https://images.unsplash.com/photo-1624397741918-19d0a95fa902?w=1200&h=900&q=80&fit=crop", // 과테말라 - 안티구아 화산
  GU: "https://images.unsplash.com/photo-1600576933158-34def7f3854f?w=1200&h=900&q=80&fit=crop", // 괌 - 하갓냐 일몰
  GY: "https://images.unsplash.com/photo-1595794038905-0b713525dead?w=1200&h=900&q=80&fit=crop", // 가이아나 - 조지타운
  HN: "https://images.unsplash.com/photo-1668813922195-edd3eb44a22e?w=1200&h=900&q=80&fit=crop", // 온두라스 - 로아탄 섬
  HT: "https://images.unsplash.com/photo-1583029364705-25981646947c?w=1200&h=900&q=80&fit=crop", // 아이티 - 포르토프랭스
  JM: "https://images.unsplash.com/photo-1451411787567-040a8a56a4a1?w=1200&h=900&q=80&fit=crop", // 자메이카 - 해변 일몰
  KN: "https://images.unsplash.com/photo-1709028758819-72275c61af7c?w=1200&h=900&q=80&fit=crop", // 세인트키츠 네비스 - 해변
  LC: "https://images.unsplash.com/photo-1710001222246-1c70c7feafe1?w=1200&h=900&q=80&fit=crop", // 세인트루시아 - 피톤스
  NI: "https://images.unsplash.com/photo-1655346934940-b39b2924091f?w=1200&h=900&q=80&fit=crop", // 니카라과 - 그라나다
  PA: "https://images.unsplash.com/photo-1607044273397-4155761fdc7f?w=1200&h=900&q=80&fit=crop", // 파나마 - 파나마시티 일몰
  SV: "https://images.unsplash.com/photo-1634072634195-9391455ba32b?w=1200&h=900&q=80&fit=crop", // 엘살바도르 - 산살바도르 국립궁전
  TT: "https://images.unsplash.com/photo-1641409802543-bccc19f683ed?w=1200&h=900&q=80&fit=crop", // 트리니다드 토바고 - 해안
  VC: "https://images.unsplash.com/photo-1535517898918-bcc1f3997adb?w=1200&h=900&q=80&fit=crop", // 세인트빈센트 - 영 아일랜드 항공뷰

  // 남미
  BR: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=900&q=80&fit=crop", // 브라질 - 리오
  AR: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&h=900&q=80&fit=crop", // 아르헨티나 - 부에노스아이레스
  PE: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=900&q=80&fit=crop", // 페루 - 마추픽추
  CL: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=900&q=80&fit=crop", // 칠레
  CO: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=1200&h=900&q=80&fit=crop", // 콜롬비아 - 카르타헤나

  // 남미 추가
  BO: "https://images.unsplash.com/photo-1670593102356-3ff212d2d5a6?w=1200&h=900&q=80&fit=crop", // 볼리비아 - 우유니 소금사막
  EC: "https://images.unsplash.com/photo-1672860004522-5b88ffcf39ce?w=1200&h=900&q=80&fit=crop", // 에콰도르 - 갈라파고스
  PY: "https://images.unsplash.com/photo-1655425774484-008aa1b2a324?w=1200&h=900&q=80&fit=crop", // 파라과이 - 아순시온
  SR: "https://images.unsplash.com/photo-1660758898976-66382b34c00d?w=1200&h=900&q=80&fit=crop", // 수리남 - 열대우림 강
  UY: "https://images.unsplash.com/photo-1621826300103-e076924f8393?w=1200&h=900&q=80&fit=crop", // 우루과이 - 몬테비데오 살보 궁전
  VE: "https://images.unsplash.com/photo-1708869749284-255c8a6bc4a3?w=1200&h=900&q=80&fit=crop", // 베네수엘라 - 메리다 전경

  // 오세아니아
  AU: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=900&q=80&fit=crop", // 호주 - 시드니
  FJ: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&h=900&q=80&fit=crop", // 피지 - 열대 해변
  FM: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 미크로네시아 - 해변
  KI: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 키리바시 - 환초
  MH: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 마셜 제도 - 환초
  NC: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=900&q=80&fit=crop", // 뉴칼레도니아 - 누메아
  NR: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 나우루 - 해변
  NZ: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&h=900&q=80&fit=crop", // 뉴질랜드
  PF: "https://images.unsplash.com/photo-1606149405099-339e52a1f993?w=1200&h=900&q=80&fit=crop", // 프랑스령 폴리네시아 - 보라보라
  PG: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200&h=900&q=80&fit=crop", // 파푸아뉴기니 - 열대우림
  PW: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 팔라우 - 락 아일랜드
  SB: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 솔로몬 제도 - 해변
  TO: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 통가 - 해변
  TV: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 투발루 - 환초
  VU: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=900&q=80&fit=crop", // 바누아투 - 화산섬
  WS: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 사모아 - 해변

  // 아프리카
  AO: "https://images.unsplash.com/photo-1645440158770-0dc96ce25b16?w=1200&h=900&q=80&fit=crop", // 앙골라 - 루안다
  BF: "https://images.unsplash.com/photo-1580982172477-470cf84e5cda?w=1200&h=900&q=80&fit=crop", // 부르키나파소 - 와가두구
  BI: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1200&h=900&q=80&fit=crop", // 부룬디 - 부줌부라
  BJ: "https://images.unsplash.com/photo-1599660771160-01c5a0b6e63c?w=1200&h=900&q=80&fit=crop", // 베냉 - 코토누
  BW: "https://images.unsplash.com/photo-1621104083740-183b8f8fd663?w=1200&h=900&q=80&fit=crop", // 보츠와나 - 오카방고 델타
  CD: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=900&q=80&fit=crop", // 콩고민주공화국 - 킨샤사
  CF: "https://images.unsplash.com/photo-1547481887-a26e2cacb9b2?w=1200&h=900&q=80&fit=crop", // 중앙아프리카공화국 - 방기
  CG: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&h=900&q=80&fit=crop", // 콩고공화국 - 브라자빌
  CI: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=1200&h=900&q=80&fit=crop", // 코트디부아르 - 아비장
  CM: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=900&q=80&fit=crop", // 카메룬 - 야운데
  CV: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=1200&h=900&q=80&fit=crop", // 카보베르데 - 해변
  DJ: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&h=900&q=80&fit=crop", // 지부티
  DZ: "https://images.unsplash.com/photo-1612556853109-bb720e8df07b?w=1200&h=900&q=80&fit=crop", // 알제리 - 알제
  EG: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&h=900&q=80&fit=crop", // 이집트 - 피라미드
  ER: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1200&h=900&q=80&fit=crop", // 에리트레아 - 아스마라
  ET: "https://images.unsplash.com/photo-1624729042041-d14deda7e0f7?w=1200&h=900&q=80&fit=crop", // 에티오피아 - 아디스아바바
  GA: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=900&q=80&fit=crop", // 가봉 - 열대우림
  GH: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=900&q=80&fit=crop", // 가나 - 자연 풍경
  GM: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?w=1200&h=900&q=80&fit=crop", // 감비아 - 감비아 강
  GN: "https://images.unsplash.com/photo-1600179456824-cc3fafdcc823?w=1200&h=900&q=80&fit=crop", // 기니 - 코나크리 모스크
  GQ: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1200&h=900&q=80&fit=crop", // 적도기니 - 말라보
  GW: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200&h=900&q=80&fit=crop", // 기니비사우 - 비사우
  KE: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=900&q=80&fit=crop", // 케냐 - 사파리
  KM: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 코모로 - 해변
  LR: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&h=900&q=80&fit=crop", // 라이베리아 - 몬로비아
  LS: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=1200&h=900&q=80&fit=crop", // 레소토 - 산악
  LY: "https://images.unsplash.com/photo-1558619420-045fc423c5e1?w=1200&h=900&q=80&fit=crop", // 리비아 - 트리폴리
  MA: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=900&q=80&fit=crop", // 모로코 - 마라케시
  MG: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200&h=900&q=80&fit=crop", // 마다가스카르 - 바오밥 나무
  ML: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=900&q=80&fit=crop", // 말리 - 바마코
  MR: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=900&q=80&fit=crop", // 모리타니 - 사하라
  MU: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&h=900&q=80&fit=crop", // 모리셔스 - 해변
  MW: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=900&q=80&fit=crop", // 말라위 - 말라위 호수
  MZ: "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=1200&h=900&q=80&fit=crop", // 모잠비크 - 마푸토
  NA: "https://images.unsplash.com/photo-1650668302197-7f556c34cb91?w=1200&h=900&q=80&fit=crop", // 나미비아 - 데드블라이
  NE: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=900&q=80&fit=crop", // 니제르 - W국립공원
  NG: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&h=900&q=80&fit=crop", // 나이지리아 - 라고스 해안
  RW: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=900&q=80&fit=crop", // 르완다 - 키갈리
  SC: "https://images.unsplash.com/photo-1552755626-e820b5d95031?w=1200&h=900&q=80&fit=crop", // 세이셸 - 해변
  SD: "https://images.unsplash.com/photo-1624729042041-d14deda7e0f7?w=1200&h=900&q=80&fit=crop", // 수단 - 하르툼
  SL: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&h=900&q=80&fit=crop", // 시에라리온 - 프리타운
  SN: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=900&q=80&fit=crop", // 세네갈 - 다카르
  SO: "https://images.unsplash.com/photo-1624729042041-d14deda7e0f7?w=1200&h=900&q=80&fit=crop", // 소말리아 - 모가디슈
  SS: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=900&q=80&fit=crop", // 남수단 - 주바
  ST: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&q=80&fit=crop", // 상투메 프린시페 - 해변
  SZ: "https://images.unsplash.com/photo-1586276393390-4c7e93e75e1e?w=1200&h=900&q=80&fit=crop", // 에스와티니 - 산악
  TD: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=900&q=80&fit=crop", // 차드 - 은자메나
  TG: "https://images.unsplash.com/photo-1599660771160-01c5a0b6e63c?w=1200&h=900&q=80&fit=crop", // 토고 - 로메
  TN: "https://images.unsplash.com/photo-1565532307435-99a3e0b5d50a?w=1200&h=900&q=80&fit=crop", // 튀니지 - 튀니스
  TZ: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=900&q=80&fit=crop", // 탄자니아 - 세렝게티
  UG: "https://images.unsplash.com/photo-1621104083740-183b8f8fd663?w=1200&h=900&q=80&fit=crop", // 우간다 - 캄팔라
  ZA: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&h=900&q=80&fit=crop", // 남아프리카 - 케이프타운
  ZM: "https://images.unsplash.com/photo-1621532146248-6c9eca77c6c7?w=1200&h=900&q=80&fit=crop", // 잠비아 - 빅토리아 폭포
  ZW: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=900&q=80&fit=crop", // 짐바브웨 - 빅토리아 폭포

  // 중동
  AE: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=900&q=80&fit=crop", // UAE - 두바이
  TR: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=900&q=80&fit=crop", // 튀르키예 - 이스탄불
  IL: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=900&q=80&fit=crop", // 이스라엘 - 예루살렘
  JO: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=1200&h=900&q=80&fit=crop", // 요르단 - 페트라
  SA: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1200&h=900&q=80&fit=crop", // 사우디아라비아 - 알울라
  QA: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=1200&h=900&q=80&fit=crop", // 카타르 - 도하
  OM: "https://images.unsplash.com/photo-1715890545305-b6927eeea369?w=1200&h=900&q=80&fit=crop", // 오만 - 술탄 카부스 그랜드 모스크
  BH: "https://images.unsplash.com/photo-1684252569089-2dd18848e4bd?w=1200&h=900&q=80&fit=crop", // 바레인 - 마나마 스카이라인
  IR: "https://images.unsplash.com/photo-1710854292261-dde4dc012deb?w=1200&h=900&q=80&fit=crop", // 이란 - 이스파한 모스크
  IQ: "https://images.unsplash.com/photo-1635182293755-d786901a1455?w=1200&h=900&q=80&fit=crop", // 이라크 - 에르빌 성채
  KW: "https://images.unsplash.com/photo-1567074994308-df304d5611db?w=1200&h=900&q=80&fit=crop", // 쿠웨이트 - 쿠웨이트 타워
  LB: "https://images.unsplash.com/photo-1596607808481-495f70aa5b26?w=1200&h=900&q=80&fit=crop", // 레바논 - 베이루트
};

// 국가 ID로 이미지 URL 가져오기 (없으면 null 반환)
export function getCountryImage(countryId: string): string | null {
  return COUNTRY_IMAGES[countryId] ?? null;
}

// 국가 ID로 국기 이미지 URL 생성 (flagcdn.com CDN 사용)
// width: 원하는 너비 (20, 40, 80, 160, 320 등)
export function getFlagUrl(countryId: string, width: number = 40): string {
  return `https://flagcdn.com/w${width}/${countryId.toLowerCase()}.png`;
}
