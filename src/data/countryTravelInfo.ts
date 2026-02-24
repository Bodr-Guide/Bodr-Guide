// 국가별 여행 실용 정보 (통신, 긴급연락처, 보험)
// 2026년 기준 데이터

export interface CommInfo {
  esim: { price: string; providers: string; note: string };
  localSim: { price: string; carriers: string; note: string };
  roaming: { price: string; note: string };
}

export interface EmergencyInfo {
  police: string;
  fire: string;
  ambulance: string;
  embassy: { name: string; phone: string };
}

export interface InsuranceInfo {
  level: "very_high" | "high" | "medium" | "low";
  avgMedicalCost: string;
  minCoverage: string;
  tips: string[];
}

export interface FlightRoute {
  airport: string;       // 공항명 (예: "나리타 국제공항")
  airportCode: string;   // IATA 코드 (예: "NRT")
  duration: string;      // 비행시간 (예: "약 2시간 30분")
  airlines: string;      // 주요 항공사 (예: "대한항공, 아시아나, ANA, JAL")
}

export interface CountryTravelInfo {
  comm: CommInfo;
  emergency: EmergencyInfo;
  insurance: InsuranceInfo;
  flights?: FlightRoute[];
}

export const countryTravelInfo: Record<string, CountryTravelInfo> = {
  // === 아시아 ===
  JP: {
    comm: {
      esim: { price: "15,000~25,000원", providers: "Ubigi, Airalo, eSIM2Fly", note: "전국 5G 커버리지 우수" },
      localSim: { price: "3,000~5,000엔", carriers: "docomo, au, SoftBank", note: "공항 자판기 구매 가능" },
      roaming: { price: "11,000원~/일", note: "SKT/KT/LGU+ 일본 전용 요금제" },
    },
    emergency: { police: "110", fire: "119", ambulance: "119", embassy: { name: "주일본대한민국대사관", phone: "+81-3-3452-7611" } },
    insurance: {
      level: "high",
      avgMedicalCost: "감기 진료 5~8만원, 입원 1일 15~30만원",
      minCoverage: "5천만원",
      tips: ["의료비가 한국의 2~3배", "치과 치료비 매우 높음", "지진 등 자연재해 보장 확인"],
    },
    flights: [
      { airport: "나리타 국제공항", airportCode: "NRT", duration: "약 2시간 30분", airlines: "대한항공, 아시아나, ANA, JAL" },
      { airport: "하네다 공항", airportCode: "HND", duration: "약 2시간 30분", airlines: "대한항공, 아시아나, ANA, JAL" },
      { airport: "간사이 국제공항", airportCode: "KIX", duration: "약 1시간 40분", airlines: "대한항공, 아시아나, 피치항공, 제주항공" },
      { airport: "후쿠오카 공항", airportCode: "FUK", duration: "약 1시간 20분", airlines: "대한항공, 아시아나, 진에어, 에어부산" },
    ],
  },
  CN: {
    comm: {
      esim: { price: "12,000~20,000원", providers: "Airalo, China Unicom eSIM", note: "Great Firewall로 일부 서비스 제한" },
      localSim: { price: "50~100위안", carriers: "China Mobile, China Unicom, China Telecom", note: "여권 및 등록 필요" },
      roaming: { price: "9,900원~/일", note: "VPN 사용 권장" },
    },
    emergency: { police: "110", fire: "119", ambulance: "120", embassy: { name: "주중국대한민국대사관", phone: "+86-10-8531-0700" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 3~5만원, 입원 1일 10~20만원",
      minCoverage: "3천만원",
      tips: ["국제병원 이용 시 비용 높음", "응급실 혼잡", "의료진 영어 소통 제한적"],
    },
    flights: [
      { airport: "베이징 수도 국제공항", airportCode: "PEK", duration: "약 2시간", airlines: "대한항공, 아시아나, 중국국제항공, 중국남방항공" },
      { airport: "상하이 푸둥 국제공항", airportCode: "PVG", duration: "약 2시간", airlines: "대한항공, 아시아나, 중국동방항공, 상하이항공" },
      { airport: "광저우 바이윈 국제공항", airportCode: "CAN", duration: "약 3시간 30분", airlines: "대한항공, 아시아나, 중국남방항공" },
      { airport: "청두 톈푸 국제공항", airportCode: "TFU", duration: "약 4시간", airlines: "대한항공, 아시아나, 쓰촨항공" },
    ],
  },
  HK: {
    comm: {
      esim: { price: "10,000~18,000원", providers: "Klook, CSL eSIM, Airalo", note: "전국 4G/5G 우수" },
      localSim: { price: "50~100 HKD", carriers: "3HK, CSL, SmarTone", note: "편의점에서 간편 구매" },
      roaming: { price: "9,900원~/일", note: "중국 본토와 별도 요금" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주홍콩대한민국총영사관", phone: "+852-2529-4141" } },
    insurance: {
      level: "high",
      avgMedicalCost: "감기 진료 5~10만원, 입원 1일 20~40만원",
      minCoverage: "5천만원",
      tips: ["공립병원은 대기시간 길어", "사립병원 비용 매우 높음", "약값 비쌈"],
    },
    flights: [
      { airport: "홍콩 국제공항", airportCode: "HKG", duration: "약 3시간 40분", airlines: "대한항공, 아시아나, 캐세이퍼시픽, 홍콩항공" },
    ],
  },
  TW: {
    comm: {
      esim: { price: "8,000~15,000원", providers: "Klook, KKday, Airalo", note: "전국 커버리지 양호" },
      localSim: { price: "300~500 TWD", carriers: "Chunghwa Telecom, Taiwan Mobile, FarEasTone", note: "공항 카운터 구매 편리" },
      roaming: { price: "8,800원~/일", note: "한국 통신사 대만 요금제" },
    },
    emergency: { police: "110", fire: "119", ambulance: "119", embassy: { name: "주타이베이대한민국대표부", phone: "+886-2-2758-8320" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 2~4만원, 입원 1일 8~15만원",
      minCoverage: "3천만원",
      tips: ["의료 수준 우수하고 비용 합리적", "지진 대비 필요", "국민건강보험 외국인 적용 제한"],
    },
    flights: [
      { airport: "타오위안 국제공항", airportCode: "TPE", duration: "약 2시간 30분", airlines: "대한항공, 아시아나, 에바항공, 중화항공" },
      { airport: "가오슝 국제공항", airportCode: "KHH", duration: "약 2시간 40분", airlines: "대한항공, 아시아나, 에어부산, 티웨이항공" },
    ],
  },
  TH: {
    comm: {
      esim: { price: "7,000~12,000원", providers: "Airalo, AIS eSIM, dtac", note: "관광지 중심 커버리지" },
      localSim: { price: "200~400 THB", carriers: "AIS, dtac, TrueMove", note: "7-Eleven에서 구매 가능" },
      roaming: { price: "7,700원~/일", note: "태국 전용 로밍 패키지" },
    },
    emergency: { police: "191", fire: "199", ambulance: "1669", embassy: { name: "주태국대한민국대사관", phone: "+66-2-247-7537" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 1~3만원, 입원 1일 5~15만원",
      minCoverage: "2천만원",
      tips: ["국제병원 수준 높지만 비용 높음", "모기 매개 질병 주의", "교통사고 빈번"],
    },
    flights: [
      { airport: "수완나품 국제공항", airportCode: "BKK", duration: "약 5시간 30분", airlines: "대한항공, 아시아나, 타이항공, 진에어" },
      { airport: "돈므앙 국제공항", airportCode: "DMK", duration: "약 5시간 30분", airlines: "타이에어아시아X, 녹스쿳, 티웨이항공" },
      { airport: "치앙마이 국제공항", airportCode: "CNX", duration: "약 5시간", airlines: "대한항공, 진에어, 제주항공, 에어부산" },
      { airport: "푸켓 국제공항", airportCode: "HKT", duration: "약 6시간", airlines: "대한항공, 진에어, 제주항공, 에어부산" },
    ],
  },
  SG: {
    comm: {
      esim: { price: "12,000~20,000원", providers: "Singtel eSIM, StarHub, Airalo", note: "전국 5G 완벽 커버리지" },
      localSim: { price: "15~30 SGD", carriers: "Singtel, StarHub, M1", note: "공항에서 즉시 구매" },
      roaming: { price: "11,000원~/일", note: "싱가포르 전용 요금제" },
    },
    emergency: { police: "999", fire: "995", ambulance: "995", embassy: { name: "주싱가포르대한민국대사관", phone: "+65-6256-1188" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "감기 진료 8~15만원, 입원 1일 30~60만원",
      minCoverage: "1억원",
      tips: ["의료비 매우 비쌈", "사립병원 중심", "처방약 비용 높음"],
    },
    flights: [
      { airport: "창이 국제공항", airportCode: "SIN", duration: "약 6시간 30분", airlines: "대한항공, 아시아나, 싱가포르항공, 스쿳" },
    ],
  },
  MY: {
    comm: {
      esim: { price: "6,000~12,000원", providers: "Airalo, Maxis eSIM, Celcom", note: "주요 도시 커버리지 양호" },
      localSim: { price: "20~50 MYR", carriers: "Maxis, Celcom, Digi", note: "편의점 구매 가능" },
      roaming: { price: "7,700원~/일", note: "말레이시아 로밍 패키지" },
    },
    emergency: { police: "999", fire: "994", ambulance: "999", embassy: { name: "주말레이시아대한민국대사관", phone: "+60-3-4251-2336" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 1~3만원, 입원 1일 5~12만원",
      minCoverage: "2천만원",
      tips: ["사립병원 수준 양호", "공립병원 대기시간 길어", "뎅기열 주의"],
    },
    flights: [
      { airport: "쿠알라룸푸르 국제공항", airportCode: "KUL", duration: "약 6시간 30분", airlines: "대한항공, 아시아나, 말레이시아항공, 에어아시아X" },
      { airport: "코타키나발루 국제공항", airportCode: "BKI", duration: "약 5시간 30분", airlines: "대한항공, 진에어, 에어아시아" },
    ],
  },
  ID: {
    comm: {
      esim: { price: "5,000~10,000원", providers: "Airalo, Telkomsel eSIM", note: "수도권 중심 커버리지" },
      localSim: { price: "50,000~100,000 IDR", carriers: "Telkomsel, Indosat, XL Axiata", note: "미니마켓 구매 가능" },
      roaming: { price: "7,700원~/일", note: "인도네시아 로밍" },
    },
    emergency: { police: "110", fire: "113", ambulance: "118", embassy: { name: "주인도네시아대한민국대사관", phone: "+62-21-2967-2555" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 50,000~150,000 IDR, 입원 1일 3~8만원",
      minCoverage: "2천만원",
      tips: ["국제병원 외 영어 소통 어려움", "지진·화산 위험", "교통사고 빈번"],
    },
    flights: [
      { airport: "수카르노-하타 국제공항", airportCode: "CGK", duration: "약 7시간", airlines: "대한항공, 아시아나, 가루다인도네시아, 바틱에어" },
      { airport: "응우라라이 국제공항 (발리)", airportCode: "DPS", duration: "약 7시간", airlines: "대한항공, 가루다인도네시아, 진에어, 에어부산" },
    ],
  },
  PH: {
    comm: {
      esim: { price: "5,000~10,000원", providers: "Airalo, Globe eSIM, Smart", note: "마닐라·세부 중심" },
      localSim: { price: "300~600 PHP", carriers: "Globe, Smart, DITO", note: "편의점 구매 가능" },
      roaming: { price: "7,700원~/일", note: "필리핀 로밍 패키지" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주필리핀대한민국대사관", phone: "+63-2-8856-9210" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 1~2만원, 입원 1일 5~10만원",
      minCoverage: "2천만원",
      tips: ["사립병원 권장", "태풍·지진 빈번", "모기 매개 질병 주의"],
    },
    flights: [
      { airport: "니노이 아키노 국제공항", airportCode: "MNL", duration: "약 4시간 20분", airlines: "대한항공, 아시아나, 필리핀항공, 세부퍼시픽" },
      { airport: "막탄 세부 국제공항", airportCode: "CEB", duration: "약 4시간 30분", airlines: "대한항공, 진에어, 필리핀항공, 세부퍼시픽" },
      { airport: "칼리보 국제공항", airportCode: "KLO", duration: "약 4시간 40분", airlines: "진에어, 제주항공, 필리핀에어아시아" },
    ],
  },
  IN: {
    comm: {
      esim: { price: "6,000~12,000원", providers: "Airalo, Jio eSIM", note: "대도시 중심 커버리지" },
      localSim: { price: "200~500 INR", carriers: "Jio, Airtel, Vi", note: "등록에 시간 소요" },
      roaming: { price: "8,800원~/일", note: "인도 로밍 패키지" },
    },
    emergency: { police: "100", fire: "101", ambulance: "102", embassy: { name: "주인도대한민국대사관", phone: "+91-11-4200-7000" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 5,000~15,000원, 입원 1일 2~5만원",
      minCoverage: "3천만원",
      tips: ["위생 수준 편차 큼", "식중독·수인성 질병 주의", "사립병원 권장"],
    },
    flights: [
      { airport: "인디라 간디 국제공항 (뉴델리)", airportCode: "DEL", duration: "약 8시간", airlines: "대한항공, 아시아나, 에어인디아" },
      { airport: "차트라파티 시바지 국제공항 (뭄바이)", airportCode: "BOM", duration: "약 8시간 30분", airlines: "대한항공, 에어인디아" },
      { airport: "첸나이 국제공항", airportCode: "MAA", duration: "약 9시간 (경유)", airlines: "경유편 (방콕, 싱가포르 경유)" },
    ],
  },
  VN: {
    comm: {
      esim: { price: "5,000~10,000원", providers: "Airalo, Viettel eSIM", note: "주요 도시 커버리지" },
      localSim: { price: "100,000~200,000 VND", carriers: "Viettel, Vinaphone, MobiFone", note: "공항·편의점 구매" },
      roaming: { price: "7,700원~/일", note: "베트남 로밍" },
    },
    emergency: { police: "113", fire: "114", ambulance: "115", embassy: { name: "주베트남대한민국대사관", phone: "+84-24-3831-5110" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 1~2만원, 입원 1일 3~8만원",
      minCoverage: "2천만원",
      tips: ["국제병원 수준 양호", "공립병원 혼잡", "뎅기열·말라리아 주의"],
    },
    flights: [
      { airport: "노이바이 국제공항", airportCode: "HAN", duration: "약 4시간 30분", airlines: "대한항공, 아시아나, 베트남항공, 비엣젯항공" },
      { airport: "떤선녓 국제공항", airportCode: "SGN", duration: "약 5시간 10분", airlines: "대한항공, 아시아나, 베트남항공, 비엣젯항공" },
      { airport: "다낭 국제공항", airportCode: "DAD", duration: "약 4시간 40분", airlines: "대한항공, 아시아나, 진에어, 제주항공" },
      { airport: "나트랑 깜라인 국제공항", airportCode: "CXR", duration: "약 5시간", airlines: "대한항공, 진에어, 비엣젯항공" },
    ],
  },
  KH: {
    comm: {
      esim: { price: "5,000~8,000원", providers: "Airalo, Cellcard eSIM", note: "주요 도시 한정" },
      localSim: { price: "5~10 USD", carriers: "Cellcard, Smart, Metfone", note: "공항·시내 구매" },
      roaming: { price: "8,800원~/일", note: "캄보디아 로밍" },
    },
    emergency: { police: "117", fire: "118", ambulance: "119", embassy: { name: "주캄보디아대한민국대사관", phone: "+855-23-211-900" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 10~30 USD, 입원 1일 2~5만원",
      minCoverage: "2천만원",
      tips: ["의료 인프라 취약", "국제병원 이용 권장", "말라리아·뎅기열 주의"],
    },
    flights: [
      { airport: "프놈펜 국제공항", airportCode: "PNH", duration: "약 5시간 30분", airlines: "대한항공, 아시아나, 캄보디아앙코르에어" },
      { airport: "시엠립 앙코르 국제공항", airportCode: "SAI", duration: "약 5시간 20분", airlines: "진에어, 에어부산, 캄보디아앙코르에어" },
    ],
  },
  LA: {
    comm: {
      esim: { price: "6,000~10,000원", providers: "Airalo, Unitel eSIM", note: "비엔티안 중심" },
      localSim: { price: "20,000~50,000 LAK", carriers: "Unitel, Lao Telecom, ETL", note: "공항·편의점 구매" },
      roaming: { price: "9,900원~/일", note: "라오스 로밍" },
    },
    emergency: { police: "191", fire: "190", ambulance: "195", embassy: { name: "주라오스대한민국대사관", phone: "+856-21-352-031" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 1~2만원, 입원 1일 2~4만원",
      minCoverage: "2천만원",
      tips: ["의료 시설 제한적", "태국 이송 고려", "말라리아·뎅기열 주의"],
    },
    flights: [
      { airport: "왓타이 국제공항 (비엔티안)", airportCode: "VTE", duration: "약 5시간 (경유)", airlines: "경유편 (방콕, 하노이 경유)" },
      { airport: "루앙프라방 국제공항", airportCode: "LPQ", duration: "약 6시간 (경유)", airlines: "경유편 (방콕, 하노이 경유)" },
    ],
  },
  MM: {
    comm: {
      esim: { price: "7,000~12,000원", providers: "Airalo, MPT eSIM", note: "양곤·만달레이 중심" },
      localSim: { price: "5,000~15,000 MMK", carriers: "MPT, Telenor, Ooredoo", note: "등록 필요" },
      roaming: { price: "11,000원~/일", note: "미얀마 로밍" },
    },
    emergency: { police: "199", fire: "191", ambulance: "192", embassy: { name: "주미얀마대한민국대사관", phone: "+95-1-527-142" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 1~2만원, 입원 1일 2~5만원",
      minCoverage: "3천만원",
      tips: ["의료 인프라 매우 취약", "정세 불안", "국제병원 제한적"],
    },
    flights: [
      { airport: "양곤 국제공항", airportCode: "RGN", duration: "약 5시간 30분 (경유)", airlines: "경유편 (방콕, 싱가포르 경유)" },
      { airport: "만달레이 국제공항", airportCode: "MDL", duration: "약 7시간 (경유)", airlines: "경유편 (방콕 경유)" },
    ],
  },
  MN: {
    comm: {
      esim: { price: "8,000~15,000원", providers: "Airalo, Unitel eSIM", note: "울란바토르 중심" },
      localSim: { price: "10,000~30,000 MNT", carriers: "Unitel, Mobicom, Skytel", note: "공항 구매 가능" },
      roaming: { price: "9,900원~/일", note: "몽골 로밍" },
    },
    emergency: { police: "102", fire: "101", ambulance: "103", embassy: { name: "주몽골대한민국대사관", phone: "+976-11-321-548" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 1~3만원, 입원 1일 3~8만원",
      minCoverage: "2천만원",
      tips: ["겨울 극한 추위", "의료 시설 제한적", "응급 이송 어려움"],
    },
    flights: [
      { airport: "칭기즈 칸 국제공항", airportCode: "UBN", duration: "약 3시간 30분", airlines: "대한항공, 아시아나, 미아트몽골항공, 에어로몽골리아" },
    ],
  },
  NP: {
    comm: {
      esim: { price: "6,000~10,000원", providers: "Airalo, Ncell eSIM", note: "카트만두 중심" },
      localSim: { price: "500~1,500 NPR", carriers: "Ncell, Nepal Telecom", note: "공항·시내 구매" },
      roaming: { price: "9,900원~/일", note: "네팔 로밍" },
    },
    emergency: { police: "100", fire: "101", ambulance: "102", embassy: { name: "주네팔대한민국대사관", phone: "+977-1-427-0172" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 500~2,000 NPR, 입원 1일 2~5만원",
      minCoverage: "3천만원",
      tips: ["고산병 대비 필수", "의료 인프라 취약", "트레킹 중 응급상황 대비"],
    },
    flights: [
      { airport: "트리부반 국제공항 (카트만두)", airportCode: "KTM", duration: "약 7시간 (경유)", airlines: "경유편 (방콕, 쿠알라룸푸르 경유)" },
    ],
  },
  LK: {
    comm: {
      esim: { price: "6,000~12,000원", providers: "Airalo, Dialog eSIM", note: "주요 도시 커버리지" },
      localSim: { price: "500~1,500 LKR", carriers: "Dialog, Mobitel, Hutch", note: "공항 구매 편리" },
      roaming: { price: "8,800원~/일", note: "스리랑카 로밍" },
    },
    emergency: { police: "119", fire: "110", ambulance: "110", embassy: { name: "주스리랑카대한민국대사관", phone: "+94-11-269-8639" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 1~2만원, 입원 1일 3~6만원",
      minCoverage: "2천만원",
      tips: ["사립병원 권장", "뎅기열 주의", "경제 불안정"],
    },
    flights: [
      { airport: "반다라나이케 국제공항 (콜롬보)", airportCode: "CMB", duration: "약 8시간 (경유)", airlines: "스리랑카항공, 경유편 (싱가포르, 방콕 경유)" },
    ],
  },
  BD: {
    comm: {
      esim: { price: "7,000~12,000원", providers: "Airalo, Grameenphone eSIM", note: "다카 중심" },
      localSim: { price: "200~500 BDT", carriers: "Grameenphone, Robi, Banglalink", note: "등록 필요" },
      roaming: { price: "9,900원~/일", note: "방글라데시 로밍" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주방글라데시대한민국대사관", phone: "+880-2-8836-304" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 500~2,000 BDT, 입원 1일 2~5만원",
      minCoverage: "2천만원",
      tips: ["위생 수준 낮음", "수인성 질병 주의", "국제병원 제한적"],
    },
    flights: [
      { airport: "샤잘랄 국제공항 (다카)", airportCode: "DAC", duration: "약 6시간 (경유)", airlines: "경유편 (방콕, 쿠알라룸푸르 경유)" },
    ],
  },
  PK: {
    comm: {
      esim: { price: "7,000~12,000원", providers: "Airalo, Jazz eSIM", note: "주요 도시 한정" },
      localSim: { price: "500~1,500 PKR", carriers: "Jazz, Telenor, Zong", note: "등록 절차 복잡" },
      roaming: { price: "11,000원~/일", note: "파키스탄 로밍" },
    },
    emergency: { police: "15", fire: "16", ambulance: "115", embassy: { name: "주파키스탄대한민국대사관", phone: "+92-51-282-0232" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 1~2만원, 입원 1일 2~5만원",
      minCoverage: "3천만원",
      tips: ["치안 불안", "사립병원 권장", "여행 제한 지역 확인"],
    },
    flights: [
      { airport: "이슬라마바드 국제공항", airportCode: "ISB", duration: "약 8시간 (경유)", airlines: "경유편 (방콕, 두바이 경유)" },
      { airport: "진나 국제공항 (카라치)", airportCode: "KHI", duration: "약 9시간 (경유)", airlines: "경유편 (두바이, 방콕 경유)" },
    ],
  },
  UZ: {
    comm: {
      esim: { price: "8,000~15,000원", providers: "Airalo, Ucell eSIM", note: "타슈켄트 중심" },
      localSim: { price: "50,000~150,000 UZS", carriers: "Ucell, Beeline, UMS", note: "등록 필요" },
      roaming: { price: "11,000원~/일", note: "우즈베키스탄 로밍" },
    },
    emergency: { police: "102", fire: "101", ambulance: "103", embassy: { name: "주우즈베키스탄대한민국대사관", phone: "+998-71-252-3171" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 1~2만원, 입원 1일 2~5만원",
      minCoverage: "2천만원",
      tips: ["의료 인프라 낙후", "언어 장벽", "사립병원 제한적"],
    },
    flights: [
      { airport: "이슬람 카리모프 타슈켄트 국제공항", airportCode: "TAS", duration: "약 6시간 30분", airlines: "대한항공, 아시아나, 우즈베키스탄항공" },
      { airport: "사마르칸트 국제공항", airportCode: "SKD", duration: "약 8시간 (경유)", airlines: "경유편 (타슈켄트 경유)" },
    ],
  },
  KZ: {
    comm: {
      esim: { price: "9,000~16,000원", providers: "Airalo, Kcell eSIM", note: "알마티·누르술탄 중심" },
      localSim: { price: "2,000~5,000 KZT", carriers: "Kcell, Beeline, Tele2", note: "등록 필요" },
      roaming: { price: "11,000원~/일", note: "카자흐스탄 로밍" },
    },
    emergency: { police: "102", fire: "101", ambulance: "103", embassy: { name: "주카자흐스탄대한민국대사관", phone: "+7-7172-977-977" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 5,000~15,000 KZT, 입원 1일 3~7만원",
      minCoverage: "2천만원",
      tips: ["겨울 극한 추위", "의료 수준 도시별 편차", "러시아어 필수"],
    },
    flights: [
      { airport: "알마티 국제공항", airportCode: "ALA", duration: "약 6시간", airlines: "아시아나, 에어아스타나" },
      { airport: "누르술탄 나자르바예프 국제공항", airportCode: "NQZ", duration: "약 6시간 30분", airlines: "에어아스타나" },
    ],
  },
  KG: {
    comm: {
      esim: { price: "8,000~14,000원", providers: "Airalo, Beeline eSIM", note: "비슈케크 중심" },
      localSim: { price: "200~500 KGS", carriers: "Beeline, O!, Megacom", note: "공항 구매" },
      roaming: { price: "11,000원~/일", note: "키르기스스탄 로밍" },
    },
    emergency: { police: "102", fire: "101", ambulance: "103", embassy: { name: "주키르기스스탄대한민국대사관", phone: "+996-312-597-521" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 500~2,000 KGS, 입원 1일 2~5만원",
      minCoverage: "2천만원",
      tips: ["고산 지역 주의", "의료 인프라 취약", "러시아어 필수"],
    },
    flights: [
      { airport: "마나스 국제공항 (비슈케크)", airportCode: "FRU", duration: "약 7시간 (경유)", airlines: "경유편 (타슈켄트, 알마티 경유)" },
    ],
  },
  TJ: {
    comm: {
      esim: { price: "9,000~15,000원", providers: "Airalo", note: "두샨베 한정" },
      localSim: { price: "30~100 TJS", carriers: "Tcell, Babilon-Mobile, Megafon", note: "등록 필요" },
      roaming: { price: "13,200원~/일", note: "타지키스탄 로밍" },
    },
    emergency: { police: "102", fire: "101", ambulance: "103", embassy: { name: "주타지키스탄대한민국대사관 (카자흐스탄 대사관 겸임)", phone: "+7-7172-977-977" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 20~50 TJS, 입원 1일 2~4만원",
      minCoverage: "2천만원",
      tips: ["의료 시설 매우 취약", "고산 지역 위험", "정세 불안"],
    },
  },
  TM: {
    comm: {
      esim: { price: "12,000~20,000원", providers: "Airalo (제한적)", note: "아슈하바트 한정" },
      localSim: { price: "제한적", carriers: "Altyn Asyr, TM Cell", note: "외국인 구매 어려움" },
      roaming: { price: "13,200원~/일", note: "투르크메니스탄 로밍" },
    },
    emergency: { police: "102", fire: "101", ambulance: "103", embassy: { name: "주투르크메니스탄대한민국대사관 (카자흐스탄 대사관 겸임)", phone: "+7-7172-977-977" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 1~3만원, 입원 1일 3~6만원",
      minCoverage: "3천만원",
      tips: ["의료 정보 제한적", "비자 취득 어려움", "통신 제한"],
    },
  },
  BN: {
    comm: {
      esim: { price: "10,000~18,000원", providers: "Airalo, DST eSIM", note: "전국 커버리지 양호" },
      localSim: { price: "10~30 BND", carriers: "DST, Progresif", note: "공항 구매" },
      roaming: { price: "11,000원~/일", note: "브루나이 로밍" },
    },
    emergency: { police: "993", fire: "995", ambulance: "991", embassy: { name: "주브루나이대한민국대사관 (말레이시아 대사관 겸임)", phone: "+60-3-4251-2336" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 3~6만원, 입원 1일 10~20만원",
      minCoverage: "3천만원",
      tips: ["의료 수준 양호", "공공병원 무료 (비거주자 유료)", "말레이어·영어 소통"],
    },
    flights: [
      { airport: "브루나이 국제공항", airportCode: "BWN", duration: "약 5시간 30분 (경유)", airlines: "로열브루나이항공 (직항 운항 간헐적), 경유편 (쿠알라룸푸르 경유)" },
    ],
  },
  MO: {
    comm: {
      esim: { price: "10,000~18,000원", providers: "Airalo, CTM eSIM", note: "전국 5G 커버리지" },
      localSim: { price: "50~100 MOP", carriers: "CTM, 3, SmarTone", note: "편의점 구매 가능" },
      roaming: { price: "9,900원~/일", note: "마카오 로밍" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주마카오대한민국총영사관 (홍콩 총영사관 겸임)", phone: "+852-2529-4141" } },
    insurance: {
      level: "high",
      avgMedicalCost: "감기 진료 4~8만원, 입원 1일 15~30만원",
      minCoverage: "5천만원",
      tips: ["의료 수준 높음", "사립병원 비용 높음", "중국어·포르투갈어·영어"],
    },
  },
  BT: {
    comm: {
      esim: { price: "10,000~18,000원", providers: "Airalo (제한적)", note: "팀푸·파로 중심" },
      localSim: { price: "100~300 BTN", carriers: "Tashi Cell, B-Mobile", note: "공항·시내 구매" },
      roaming: { price: "13,200원~/일", note: "부탄 로밍" },
    },
    emergency: { police: "113", fire: "110", ambulance: "112", embassy: { name: "주부탄대한민국대사관 (인도 대사관 겸임)", phone: "+91-11-4200-7000" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 500~1,500 BTN, 입원 1일 2~5만원",
      minCoverage: "3천만원",
      tips: ["고산병 주의", "의료 시설 제한적", "관광비 높음"],
    },
    flights: [
      { airport: "파로 국제공항", airportCode: "PBH", duration: "약 9시간 (경유)", airlines: "드룩항공, 경유편 (방콕, 카트만두 경유)" },
    ],
  },
  MV: {
    comm: {
      esim: { price: "12,000~20,000원", providers: "Airalo, Dhiraagu eSIM", note: "말레·주요 리조트" },
      localSim: { price: "50~150 MVR", carriers: "Dhiraagu, Ooredoo", note: "공항 구매" },
      roaming: { price: "11,000원~/일", note: "몰디브 로밍" },
    },
    emergency: { police: "119", fire: "118", ambulance: "102", embassy: { name: "주몰디브대한민국대사관 (스리랑카 대사관 겸임)", phone: "+94-11-269-8639" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "감기 진료 50~150 USD, 입원 1일 10~25만원",
      minCoverage: "5천만원",
      tips: ["리조트 의료 서비스 제한적", "응급 이송 비용 높음", "수상 스포츠 사고 대비"],
    },
    flights: [
      { airport: "벨라나 국제공항 (말레)", airportCode: "MLE", duration: "약 9시간 (경유)", airlines: "대한항공 (직항 시즌 운항), 경유편 (싱가포르, 스리랑카 경유)" },
    ],
  },
  TL: {
    comm: {
      esim: { price: "10,000~18,000원", providers: "Airalo (제한적)", note: "딜리 중심" },
      localSim: { price: "5~15 USD", carriers: "Timor Telecom, Telemor", note: "공항·시내 구매" },
      roaming: { price: "13,200원~/일", note: "동티모르 로밍" },
    },
    emergency: { police: "112", fire: "115", ambulance: "110", embassy: { name: "주동티모르대한민국대사관 (인도네시아 대사관 겸임)", phone: "+62-21-2967-2555" } },
    insurance: {
      level: "low",
      avgMedicalCost: "감기 진료 5~15 USD, 입원 1일 2~5만원",
      minCoverage: "3천만원",
      tips: ["의료 인프라 매우 취약", "말라리아·뎅기열 주의", "호주 이송 고려"],
    },
    flights: [
      { airport: "프레지덴테 니콜라우 로바투 국제공항 (딜리)", airportCode: "DIL", duration: "약 9시간 (경유)", airlines: "경유편 (발리, 싱가포르 경유)" },
    ],
  },
  // === 중동 ===
  AE: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Nomad", note: "7일 3~5GB 기준" },
      localSim: { price: "AED 50~100", carriers: "Etisalat, du", note: "공항·편의점 구매 가능, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "999", fire: "997", ambulance: "998", embassy: { name: "주아랍에미리트 대한민국대사관", phone: "+971-2-495-7200" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 AED 500~1,500, 입원 1일 AED 3,000~10,000",
      minCoverage: "₩50,000,000 이상",
      tips: ["민간병원 의료비 매우 고가", "사막 투어 시 상해보험 필수", "약국에서 일부 처방약 구매 가능"],
    },
    flights: [
      { airport: "두바이 국제공항", airportCode: "DXB", duration: "약 9시간", airlines: "대한항공, 아시아나, 에미레이트항공, 플라이두바이" },
      { airport: "아부다비 국제공항", airportCode: "AUH", duration: "약 9시간 30분", airlines: "에티하드항공" },
    ],
  },
  SA: {
    comm: {
      esim: { price: "₩18,000~28,000", providers: "Airalo, Holafly", note: "7일 3~5GB 기준" },
      localSim: { price: "SAR 50~120", carriers: "STC, Mobily, Zain", note: "공항 구매 가능, 여권·비자 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "999", fire: "998", ambulance: "997", embassy: { name: "주사우디아라비아 대한민국대사관", phone: "+966-11-488-2211" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 SAR 300~1,000, 입원 1일 SAR 2,000~8,000",
      minCoverage: "₩50,000,000 이상",
      tips: ["관광비자 의료보험 가입 의무화", "메카·메디나 순례 시 별도 보험 권장", "민간병원 비용 매우 고가"],
    },
    flights: [
      { airport: "킹 압둘아지즈 국제공항 (제다)", airportCode: "JED", duration: "약 10시간 30분", airlines: "사우디아항공, 대한항공 (경유)" },
      { airport: "킹 칼리드 국제공항 (리야드)", airportCode: "RUH", duration: "약 10시간", airlines: "사우디아항공, 경유편 (두바이 경유)" },
    ],
  },
  QA: {
    comm: {
      esim: { price: "₩16,000~26,000", providers: "Airalo, Nomad, Holafly", note: "7일 3~5GB 기준" },
      localSim: { price: "QAR 50~100", carriers: "Ooredoo, Vodafone", note: "공항·쇼핑몰 구매 가능, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주카타르 대한민국대사관", phone: "+974-4483-0733" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 QAR 200~800, 입원 1일 QAR 2,500~9,000",
      minCoverage: "₩50,000,000 이상",
      tips: ["민간병원 의료비 고가", "국립병원은 상대적 저렴하나 대기 긴 편", "응급상황 시 Hamad Hospital 이용"],
    },
    flights: [
      { airport: "하마드 국제공항 (도하)", airportCode: "DOH", duration: "약 9시간 30분", airlines: "대한항공, 카타르항공" },
    ],
  },
  KW: {
    comm: {
      esim: { price: "₩17,000~27,000", providers: "Airalo, Holafly", note: "7일 3~5GB 기준" },
      localSim: { price: "KWD 3~8", carriers: "Zain, Ooredoo, STC", note: "공항·통신사 매장 구매, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주쿠웨이트 대한민국대사관", phone: "+965-2537-7100" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 KWD 30~100, 입원 1일 KWD 200~800",
      minCoverage: "₩50,000,000 이상",
      tips: ["민간병원 의료비 매우 고가", "공공병원은 외국인 이용 제한적", "치과·안과 비용 특히 고가"],
    },
    flights: [
      { airport: "쿠웨이트 국제공항", airportCode: "KWI", duration: "약 9시간 30분", airlines: "대한항공, 쿠웨이트항공" },
    ],
  },
  BH: {
    comm: {
      esim: { price: "₩15,000~24,000", providers: "Airalo, Nomad", note: "7일 3~5GB 기준" },
      localSim: { price: "BHD 3~7", carriers: "Batelco, Zain, STC", note: "공항·쇼핑몰 구매 가능, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주바레인 대한민국대사관", phone: "+973-1753-1745" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 BHD 20~80, 입원 1일 BHD 150~600",
      minCoverage: "₩30,000,000 이상",
      tips: ["공공병원은 외국인 유료", "민간병원 의료비 고가", "약국에서 기본 의약품 구매 가능"],
    },
    flights: [
      { airport: "바레인 국제공항", airportCode: "BAH", duration: "약 10시간 (경유)", airlines: "걸프에어, 경유편 (두바이, 도하 경유)" },
    ],
  },
  OM: {
    comm: {
      esim: { price: "₩16,000~25,000", providers: "Airalo, Holafly", note: "7일 3~5GB 기준" },
      localSim: { price: "OMR 5~10", carriers: "Omantel, Ooredoo", note: "공항·통신사 매장 구매, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "9999", fire: "9999", ambulance: "9999", embassy: { name: "주오만 대한민국대사관", phone: "+968-2469-5837" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 OMR 20~70, 입원 1일 OMR 100~400",
      minCoverage: "₩30,000,000 이상",
      tips: ["민간병원 의료비 고가", "공공병원은 대기시간 긴 편", "사막 트레킹 시 상해보험 필수"],
    },
    flights: [
      { airport: "무스카트 국제공항", airportCode: "MCT", duration: "약 10시간 (경유)", airlines: "오만에어, 경유편 (두바이, 도하 경유)" },
    ],
  },
  JO: {
    comm: {
      esim: { price: "₩12,000~20,000", providers: "Airalo, Holafly, Nomad", note: "7일 3~5GB 기준" },
      localSim: { price: "JOD 5~15", carriers: "Zain, Orange, Umniah", note: "공항·시내 매장 구매, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주요르단 대한민국대사관", phone: "+962-6-593-0745" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 JOD 30~80, 입원 1일 JOD 100~300",
      minCoverage: "₩20,000,000 이상",
      tips: ["페트라 등 관광지 의료시설 제한적", "수도 암만 외 지역 응급의료 접근성 낮음", "사해·와디럼 방문 시 상해보험 권장"],
    },
    flights: [
      { airport: "퀸알리아 국제공항 (암만)", airportCode: "AMM", duration: "약 11시간 (경유)", airlines: "로열요르단항공, 경유편 (두바이, 이스탄불 경유)" },
    ],
  },
  LB: {
    comm: {
      esim: { price: "₩13,000~22,000", providers: "Airalo, Holafly", note: "7일 3~5GB 기준" },
      localSim: { price: "LBP 150,000~400,000", carriers: "Alfa, touch", note: "공항·시내 매장 구매, 여권 필수, 통신 불안정" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "112", fire: "175", ambulance: "140", embassy: { name: "주레바논 대한민국대사관", phone: "+961-4-520-536" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 USD 50~150, 입원 1일 USD 200~600",
      minCoverage: "₩30,000,000 이상",
      tips: ["정세 불안정으로 긴급후송 보험 필수", "민간병원 USD 현금 결제 요구", "약품 수급 불안정으로 상비약 지참 권장"],
    },
    flights: [
      { airport: "베이루트 라픽 하리리 국제공항", airportCode: "BEY", duration: "약 11시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
    ],
  },
  IL: {
    comm: {
      esim: { price: "₩14,000~23,000", providers: "Airalo, Holafly, Nomad", note: "7일 3~5GB 기준" },
      localSim: { price: "₪50~100", carriers: "Pelephone, Cellcom, Partner", note: "공항·시내 매장 구매, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "100", fire: "102", ambulance: "101", embassy: { name: "주이스라엘 대한민국대사관", phone: "+972-3-769-4568" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 ₪500~2,000, 입원 1일 ₪3,000~12,000",
      minCoverage: "₩100,000,000 이상",
      tips: ["의료비 세계 최고 수준", "전쟁·테러 보장 특약 필수 가입", "긴급후송 보장 필수", "여행경보 확인 필수"],
    },
    flights: [
      { airport: "벤구리온 국제공항 (텔아비브)", airportCode: "TLV", duration: "약 11시간", airlines: "대한항공, 엘알이스라엘항공" },
    ],
  },
  TR: {
    comm: {
      esim: { price: "₩10,000~18,000", providers: "Airalo, Holafly, Nomad", note: "7일 3~5GB 기준" },
      localSim: { price: "₺150~350", carriers: "Turkcell, Vodafone, Türk Telekom", note: "공항·시내 매장 구매, 여권 필수, 등록제" },
      roaming: { price: "₩8,800/일", note: "SKT/KT/LG U+ 데이터 로밍" },
    },
    emergency: { police: "155", fire: "110", ambulance: "112", embassy: { name: "주터키 대한민국대사관", phone: "+90-312-468-4508" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 ₺500~2,000, 입원 1일 ₺2,000~8,000",
      minCoverage: "₩20,000,000 이상",
      tips: ["민간병원은 영어 소통 가능하나 고가", "공공병원 대기시간 긴 편", "지진·자연재해 보장 특약 권장"],
    },
    flights: [
      { airport: "이스탄불 공항", airportCode: "IST", duration: "약 11시간", airlines: "대한항공, 아시아나, 터키항공" },
      { airport: "사비하 괵첸 국제공항", airportCode: "SAW", duration: "약 11시간 (경유)", airlines: "경유편 (이스탄불 IST 경유)" },
      { airport: "안탈리아 공항", airportCode: "AYT", duration: "약 12시간 (경유)", airlines: "경유편 (이스탄불 경유)" },
    ],
  },
  IQ: {
    comm: {
      esim: { price: "₩20,000~35,000", providers: "Airalo", note: "7일 3~5GB 기준, 제공업체 제한적" },
      localSim: { price: "IQD 10,000~25,000", carriers: "Asiacell, Zain, Korek", note: "시내 매장 구매, 여권 필수, 통신 불안정" },
      roaming: { price: "₩15,000/일", note: "일부 통신사만 지원" },
    },
    emergency: { police: "104", fire: "115", ambulance: "122", embassy: { name: "주이라크 대한민국대사관", phone: "+964-770-427-0200" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 USD 30~100, 입원 1일 USD 100~400",
      minCoverage: "₩50,000,000 이상",
      tips: ["전쟁·테러 보장 특약 필수", "긴급후송 보험 필수", "현지 의료시설 열악", "여행금지 국가로 보험 가입 제한적"],
    },
    flights: [
      { airport: "바그다드 국제공항", airportCode: "BGW", duration: "약 12시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
      { airport: "에르빌 국제공항", airportCode: "EBL", duration: "약 11시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
    ],
  },
  IR: {
    comm: {
      esim: { price: "사용 불가", providers: "제재로 인해 국제 eSIM 미지원", note: "현지 SIM만 가능" },
      localSim: { price: "IRR 500,000~1,500,000", carriers: "Irancell, MCI, Rightel", note: "공항·시내 매장, 여권 필수, 국제전화 제한" },
      roaming: { price: "사용 불가", note: "국제 제재로 로밍 불가" },
    },
    emergency: { police: "110", fire: "125", ambulance: "115", embassy: { name: "주이란 대한민국대사관", phone: "+98-21-8871-0841~3" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 IRR 5,000,000~20,000,000, 입원 1일 IRR 20,000,000~80,000,000",
      minCoverage: "₩30,000,000 이상",
      tips: ["국제 제재로 해외 보험사 보장 제한적", "현지 의료비는 저렴하나 시설 수준 낮음", "긴급후송 보장 필수", "신용카드 사용 불가로 현금 지참 필수"],
    },
    flights: [
      { airport: "이맘 호메이니 국제공항 (테헤란)", airportCode: "IKA", duration: "약 9시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
      { airport: "시라즈 국제공항", airportCode: "SYZ", duration: "약 11시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
    ],
  },
  YE: {
    comm: {
      esim: { price: "사용 불가", providers: "내전으로 인해 미지원", note: "현지 SIM 구매 어려움" },
      localSim: { price: "YER 2,000~5,000", carriers: "Yemen Mobile, MTN, Sabafon", note: "통신망 대부분 파괴, 사용 불안정" },
      roaming: { price: "사용 불가", note: "대부분 통신사 로밍 중단" },
    },
    emergency: { police: "194", fire: "191", ambulance: "191", embassy: { name: "주예멘 대한민국대사관(폐쇄)", phone: "현재 운영 중단" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 USD 20~80, 입원 1일 USD 50~200",
      minCoverage: "₩100,000,000 이상",
      tips: ["여행금지 국가로 보험 가입 불가", "내전으로 의료시설 대부분 파괴", "긴급후송 외 대안 없음", "절대 방문 금지"],
    },
    flights: [
      { airport: "아덴 국제공항", airportCode: "ADE", duration: "약 14시간 (경유)", airlines: "경유편 (두바이, 카이로 경유), 운항 불안정" },
    ],
  },
  SY: {
    comm: {
      esim: { price: "사용 불가", providers: "제재로 인해 미지원", note: "현지 SIM만 가능" },
      localSim: { price: "SYP 10,000~30,000", carriers: "Syriatel, MTN", note: "통신망 일부 지역만 작동, 여권 필수" },
      roaming: { price: "사용 불가", note: "국제 제재로 로밍 불가" },
    },
    emergency: { police: "112", fire: "113", ambulance: "110", embassy: { name: "주시리아 대한민국대사관(폐쇄)", phone: "현재 운영 중단" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 USD 10~50, 입원 1일 USD 30~150",
      minCoverage: "₩100,000,000 이상",
      tips: ["여행금지 국가로 보험 가입 불가", "내전으로 의료시설 심각한 피해", "긴급후송 외 대안 없음", "절대 방문 금지"],
    },
    flights: [
      { airport: "다마스쿠스 국제공항", airportCode: "DAM", duration: "약 12시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유), 운항 불안정" },
    ],
  },
  PS: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly", note: "7일 3~5GB 기준, 가자지구 사용 불가" },
      localSim: { price: "₪40~80", carriers: "Jawwal, Ooredoo", note: "서안지구만 가능, 가자지구 통신망 파괴" },
      roaming: { price: "₩11,000/일", note: "이스라엘 네트워크 사용, 불안정" },
    },
    emergency: { police: "100", fire: "102", ambulance: "101", embassy: { name: "주팔레스타인 대표사무소", phone: "+970-2-296-5030" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 ₪150~500, 입원 1일 ₪400~1,500",
      minCoverage: "₩50,000,000 이상",
      tips: ["전쟁·테러 보장 특약 필수", "가자지구 여행 절대 금지", "긴급후송 보험 필수", "서안지구도 정세 불안정"],
    },
    flights: [
      { airport: "벤구리온 국제공항 (이스라엘 경유)", airportCode: "TLV", duration: "약 11시간 (경유)", airlines: "경유편 (이스라엘 TLV 경유 후 육로), 가자지구 접근 불가" },
    ],
  },
  // === 유럽 ===
  AT: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 30개국 통합 eSIM 추천, 오스트리아 단독보다 저렴" },
      localSim: { price: "€10~20", carriers: "A1, Magenta, Drei", note: "공항 및 편의점에서 구매 가능, 신분증 필요" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정으로 역내 추가요금 없음" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주오스트리아 대한민국 대사관", phone: "+43-1-478-1991" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €150~300, 입원 €800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["스키 여행시 겨울 스포츠 특약 필수", "EU 건강보험카드 소지자 의료비 감면", "산악 구조비용 별도 커버리지 확인"],
    },
    flights: [
      { airport: "빈 국제공항", airportCode: "VIE", duration: "약 11시간 30분", airlines: "대한항공, 오스트리아항공" },
      { airport: "잘츠부르크 공항", airportCode: "SZG", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  BE: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "Proximus, Orange, BASE", note: "공항 및 슈퍼마켓에서 구매 가능" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주벨기에 대한민국 대사관", phone: "+32-2-675-5777" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €120~250, 입원 €700~1,200/일",
      minCoverage: "₩50,000,000",
      tips: ["브뤼셀 테러 이후 보안 강화, 여행자 보험 필수", "프랑스어/네덜란드어 권역별 병원 정보 사전 확인", "EU 건강보험카드 인정"],
    },
    flights: [
      { airport: "브뤼셀 공항", airportCode: "BRU", duration: "약 11시간 30분", airlines: "대한항공, 아시아나" },
      { airport: "브뤼셀 사우스샤를루아 공항", airportCode: "CRL", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  CY: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 사용 가능" },
      localSim: { price: "€10~15", carriers: "Cyta, MTN, PrimeTel", note: "공항 및 편의점에서 구매, 북키프로스는 별도망" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용, 북키프로스 주의" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주키프로스 대한민국 대사관", phone: "+357-22-377-040" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €80~150, 입원 €400~800/일",
      minCoverage: "₩30,000,000",
      tips: ["해변 스포츠 사고 커버리지 확인", "북키프로스는 EU 보험 적용 안됨", "여름철 일사병 주의"],
    },
    flights: [
      { airport: "라르나카 국제공항", airportCode: "LCA", duration: "약 14시간 (경유)", airlines: "경유편" },
      { airport: "파포스 국제공항", airportCode: "PFO", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  DE: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 30개국 통합 eSIM 추천" },
      localSim: { price: "€10~20", carriers: "Telekom, Vodafone, O2", note: "공항, 슈퍼마켓, 키오스크에서 구매 가능" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주독일 대한민국 대사관", phone: "+49-30-260-650" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €150~300, 입원 €800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["의료보험 가입 의무 엄격", "약국(Apotheke)은 일요일 휴무", "크리스마스 마켓 등 대규모 행사시 보험 확인"],
    },
    flights: [
      { airport: "프랑크푸르트 국제공항", airportCode: "FRA", duration: "약 11시간 30분", airlines: "대한항공, 아시아나, 루프트한자" },
      { airport: "뮌헨 국제공항", airportCode: "MUC", duration: "약 11시간 30분", airlines: "대한항공, 루프트한자" },
      { airport: "베를린 브란덴부르크 공항", airportCode: "BER", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  EE: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "발트 3국 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "Telia, Elisa, Tele2", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주에스토니아 대한민국 대사관", phone: "+372-6205-200" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €50~120, 입원 €300~600/일",
      minCoverage: "₩30,000,000",
      tips: ["디지털 헬스케어 발달, 전자처방전 보편화", "겨울철 낙상사고 주의", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "탈린 레나르트 메리 공항", airportCode: "TLL", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  ES: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~20", carriers: "Movistar, Vodafone, Orange", note: "공항, 슈퍼마켓, 담배점(Estanco)에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주스페인 대한민국 대사관", phone: "+34-91-353-2000" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €120~250, 입원 €600~1,200/일",
      minCoverage: "₩50,000,000",
      tips: ["소매치기 다발지역 주의, 도난 보험 필수", "공공병원 대기시간 긴 편", "카탈루냐 지역 시위 발생시 여행자 보험 확인"],
    },
    flights: [
      { airport: "마드리드 바라하스 공항", airportCode: "MAD", duration: "약 13시간", airlines: "대한항공, 아시아나" },
      { airport: "바르셀로나 엘프라트 공항", airportCode: "BCN", duration: "약 12시간 30분", airlines: "대한항공, 아시아나" },
    ],
  },
  FI: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "북유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "Elisa, Telia, DNA", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주핀란드 대한민국 대사관", phone: "+358-9-251-5000" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €150~300, 입원 €800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["겨울철 한파 및 동상 주의", "사우나 사고 커버리지 확인", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "헬싱키 반타 공항", airportCode: "HEL", duration: "약 10시간", airlines: "대한항공, 핀에어" },
    ],
  },
  FR: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~20", carriers: "Orange, SFR, Bouygues", note: "공항, 슈퍼마켓, 담배점(Tabac)에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주프랑스 대한민국 대사관", phone: "+33-1-4753-0101" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €150~350, 입원 €800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["파리 소매치기 다발, 도난 보험 필수", "시위 빈번 발생, 취소 보험 검토", "약국(Pharmacie) 영어 가능 지점 제한적"],
    },
    flights: [
      { airport: "파리 샤를 드 골 공항", airportCode: "CDG", duration: "약 12시간", airlines: "대한항공, 아시아나, 에어프랑스" },
      { airport: "니스 코트다쥐르 공항", airportCode: "NCE", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  GR: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "Cosmote, Vodafone, Wind", note: "공항 및 키오스크에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주그리스 대한민국 대사관", phone: "+30-210-698-4080" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €80~150, 입원 €400~800/일",
      minCoverage: "₩30,000,000",
      tips: ["섬 지역 의료시설 제한적", "해양 스포츠 사고 커버리지 확인", "여름철 일사병 주의"],
    },
    flights: [
      { airport: "아테네 엘레프테리오스 베니젤로스 공항", airportCode: "ATH", duration: "약 12시간 (경유)", airlines: "경유편" },
      { airport: "테살로니키 마게도니아 공항", airportCode: "SKG", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  HR: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "A1, Tele2, Telemach", note: "공항 및 편의점에서 구매, 2023년 유로 도입" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주크로아티아 대한민국 대사관", phone: "+385-1-4877-213" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €60~120, 입원 €350~700/일",
      minCoverage: "₩30,000,000",
      tips: ["해안 관광지 응급실 혼잡", "수상 스포츠 사고 커버리지 확인", "내륙 지역 병원 접근성 낮음"],
    },
    flights: [
      { airport: "자그레브 프라뇨 투지만 공항", airportCode: "ZAG", duration: "약 13시간 30분 (경유)", airlines: "경유편" },
      { airport: "두브로브니크 공항", airportCode: "DBV", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  IE: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~20", carriers: "Vodafone, Three, Eir", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주아일랜드 대한민국 대사관", phone: "+353-1-660-8800" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €150~300, 입원 €800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["공공병원 대기시간 매우 긴 편", "사설병원 이용시 고액 청구", "여행자 보험 필수"],
    },
    flights: [
      { airport: "더블린 공항", airportCode: "DUB", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  IT: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~20", carriers: "TIM, Vodafone, Wind Tre", note: "공항, 슈퍼마켓, 담배점(Tabacchi)에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주이탈리아 대한민국 대사관", phone: "+39-06-802-461" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €120~250, 입원 €700~1,300/일",
      minCoverage: "₩50,000,000",
      tips: ["로마, 밀라노 소매치기 다발", "지진 발생 지역 취소 보험 검토", "8월 휴가철 병원 운영 축소"],
    },
    flights: [
      { airport: "로마 피우미치노 공항", airportCode: "FCO", duration: "약 12시간", airlines: "대한항공, 아시아나, ITA항공" },
      { airport: "밀라노 말펜사 공항", airportCode: "MXP", duration: "약 11시간 30분", airlines: "대한항공" },
      { airport: "베네치아 마르코 폴로 공항", airportCode: "VCE", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  LT: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "발트 3국 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "Telia, Bitė, Tele2", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주리투아니아 대한민국 대사관", phone: "+370-5-273-1735" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €50~100, 입원 €300~600/일",
      minCoverage: "₩30,000,000",
      tips: ["겨울철 낙상사고 주의", "영어 가능 병원 제한적", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "빌뉴스 국제공항", airportCode: "VNO", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  LU: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "POST, Tango, Orange", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주벨기에 대한민국 대사관 (겸임)", phone: "+32-2-675-5777" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 €200~400, 입원 €1,000~2,000/일",
      minCoverage: "₩70,000,000",
      tips: ["의료비 매우 고액", "다국어(프랑스어/독일어/영어) 병원", "여행자 보험 필수"],
    },
    flights: [
      { airport: "룩셈부르크 핀델 공항", airportCode: "LUX", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  LV: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "발트 3국 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "LMT, Tele2, Bite", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주라트비아 대한민국 대사관", phone: "+371-6735-5850" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €50~100, 입원 €300~600/일",
      minCoverage: "₩30,000,000",
      tips: ["겨울철 도로 사고 주의", "영어 가능 의료진 제한적", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "리가 국제공항", airportCode: "RIX", duration: "약 13시간 30분 (경유)", airlines: "경유편" },
    ],
  },
  MT: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 사용 가능" },
      localSim: { price: "€10~15", carriers: "Vodafone, GO, Melita", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주이탈리아 대한민국 대사관 (겸임)", phone: "+39-06-802-461" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €80~150, 입원 €400~800/일",
      minCoverage: "₩30,000,000",
      tips: ["해양 스포츠 사고 커버리지 확인", "여름철 일사병 주의", "영어 통용"],
    },
    flights: [
      { airport: "몰타 국제공항", airportCode: "MLA", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  NL: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~20", carriers: "KPN, Vodafone, T-Mobile", note: "공항 및 슈퍼마켓에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주네덜란드 대한민국 대사관", phone: "+31-70-358-6076" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €150~300, 입원 €800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["자전거 사고 다발, 사고 보험 확인", "의료보험 가입 의무", "영어 통용"],
    },
    flights: [
      { airport: "암스테르담 스키폴 공항", airportCode: "AMS", duration: "약 11시간 30분", airlines: "대한항공, KLM" },
    ],
  },
  PT: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "MEO, Vodafone, NOS", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주포르투갈 대한민국 대사관", phone: "+351-21-793-7200" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €80~150, 입원 €400~800/일",
      minCoverage: "₩30,000,000",
      tips: ["해양 스포츠 사고 커버리지 확인", "산불 발생시 여행 취소 보험 검토", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "리스본 움베르투 델가두 공항", airportCode: "LIS", duration: "약 14시간 (경유)", airlines: "경유편" },
      { airport: "포르투 프란시스쿠 사 카르네이루 공항", airportCode: "OPO", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  SI: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "Telekom Slovenije, A1, Telemach", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주오스트리아 대한민국 대사관 (겸임)", phone: "+43-1-478-1991" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €60~120, 입원 €350~700/일",
      minCoverage: "₩30,000,000",
      tips: ["스키 여행시 겨울 스포츠 특약 필수", "동굴 투어 사고 커버리지 확인", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "류블랴나 요제 푸치닉 공항", airportCode: "LJU", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  SK: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "€10~15", carriers: "Orange, Telekom, O2", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주슬로바키아 대한민국 대사관", phone: "+421-2-3307-0611" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 €50~100, 입원 €300~600/일",
      minCoverage: "₩30,000,000",
      tips: ["스키 여행시 겨울 스포츠 특약 필수", "영어 가능 병원 제한적", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "브라티슬라바 공항", airportCode: "BTS", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  AD: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "스페인/프랑스 망 로밍" },
      localSim: { price: "€15~25", carriers: "Andorra Telecom", note: "유일 통신사, 공항 및 시내에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 별도" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주스페인 대한민국 대사관 (겸임)", phone: "+34-91-353-2000" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €150~300, 입원 €800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["스키 사고 다발, 겨울 스포츠 특약 필수", "산악 구조비용 별도", "의료비 고액"],
    },
    flights: [
      { airport: "바르셀로나 엘프라트 공항 (인접)", airportCode: "BCN", duration: "약 12시간 30분 + 육로 3시간", airlines: "대한항공, 아시아나 (바르셀로나 경유)" },
    ],
  },
  MC: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "프랑스 망 로밍" },
      localSim: { price: "€15~25", carriers: "Monaco Telecom", note: "유일 통신사, 시내에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 프랑스 망 사용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주프랑스 대한민국 대사관 (겸임)", phone: "+33-1-4753-0101" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 €250~500, 입원 €1,200~2,500/일",
      minCoverage: "₩100,000,000",
      tips: ["의료비 매우 고액", "프랑스 의료보험 연계", "여행자 보험 필수"],
    },
    flights: [
      { airport: "니스 코트다쥐르 공항 (인접)", airportCode: "NCE", duration: "약 14시간 (경유) + 육로 30분", airlines: "경유편 (니스 경유)" },
    ],
  },
  SM: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "이탈리아 망 로밍" },
      localSim: { price: "€10~15", carriers: "San Marino Telecom", note: "이탈리아 SIM 사용 가능" },
      roaming: { price: "₩11,000/일", note: "이탈리아 망 사용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주이탈리아 대한민국 대사관 (겸임)", phone: "+39-06-802-461" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €120~250, 입원 €700~1,300/일",
      minCoverage: "₩50,000,000",
      tips: ["이탈리아 의료 시스템 사용", "소국으로 이탈리아 병원 이용", "EU 건강보험카드 인정"],
    },
    flights: [
      { airport: "리미니 페데리코 펠리니 공항 (인접)", airportCode: "RMI", duration: "약 14시간 (경유) + 육로 30분", airlines: "경유편 (리미니 경유)" },
    ],
  },
  VA: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "이탈리아 망 로밍" },
      localSim: { price: "N/A", carriers: "이탈리아 통신사 사용", note: "바티칸 자체 통신망 없음" },
      roaming: { price: "₩11,000/일", note: "이탈리아 망 사용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주이탈리아 대한민국 대사관 (겸임)", phone: "+39-06-802-461" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 €120~250, 입원 €700~1,300/일",
      minCoverage: "₩50,000,000",
      tips: ["이탈리아 의료 시스템 사용", "로마 병원 이용", "소매치기 주의"],
    },
    flights: [
      { airport: "로마 피우미치노 공항", airportCode: "FCO", duration: "약 12시간", airlines: "대한항공, 아시아나, ITA항공" },
    ],
  },
  XK: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "발칸 지역 eSIM 제한적" },
      localSim: { price: "€5~10", carriers: "Vala, IPKO, Z Mobile", note: "공항 및 시내에서 구매, 저렴" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주오스트리아 대한민국 대사관 (겸임)", phone: "+43-1-478-1991" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 €20~50, 입원 €100~200/일",
      minCoverage: "₩20,000,000",
      tips: ["의료 인프라 제한적", "수도 외 지역 병원 부족", "현금 진료 일반적"],
    },
    flights: [
      { airport: "프리슈티나 아뎀 야샤리 공항", airportCode: "PRN", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  ME: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "발칸 지역 eSIM 제한적" },
      localSim: { price: "€5~10", carriers: "Crnogorski Telekom, Telenor, M:tel", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 별도" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주세르비아 대한민국 대사관 (겸임)", phone: "+381-11-3060-370" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 €30~60, 입원 €150~300/일",
      minCoverage: "₩20,000,000",
      tips: ["해안 관광지 응급실 혼잡", "산악 구조 인프라 제한적", "현금 진료 일반적"],
    },
    flights: [
      { airport: "포드고리차 공항", airportCode: "TGD", duration: "약 15시간 (경유)", airlines: "경유편" },
      { airport: "티바트 공항", airportCode: "TIV", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  GB: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly, Ubigi", note: "브렉시트 이후 유럽 eSIM 별도" },
      localSim: { price: "£10~20", carriers: "EE, Vodafone, Three, O2", note: "공항 및 슈퍼마켓에서 구매" },
      roaming: { price: "₩13,000/일", note: "브렉시트 이후 EU 로밍 요금 별도" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주영국 대한민국 대사관", phone: "+44-20-7227-5500" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 £150~300, 입원 £800~1,500/일",
      minCoverage: "₩50,000,000",
      tips: ["NHS 대기시간 긴 편", "사설병원 이용시 고액", "여행자 보험 필수"],
    },
    flights: [
      { airport: "런던 히드로 공항", airportCode: "LHR", duration: "약 11시간 30분", airlines: "대한항공, 아시아나, 영국항공" },
      { airport: "런던 개트윅 공항", airportCode: "LGW", duration: "약 12시간 (경유)", airlines: "경유편" },
      { airport: "맨체스터 공항", airportCode: "MAN", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  CH: {
    comm: {
      esim: { price: "₩25,000~35,000", providers: "Airalo, Holafly, Ubigi", note: "스위스 단독 eSIM 고가" },
      localSim: { price: "CHF 20~40", carriers: "Swisscom, Salt, Sunrise", note: "공항 및 편의점에서 구매, 고가" },
      roaming: { price: "₩18,000/일", note: "EU 비회원국, 로밍 요금 매우 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주스위스 대한민국 대사관", phone: "+41-31-356-2444" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 CHF 300~600, 입원 CHF 1,500~3,000/일",
      minCoverage: "₩100,000,000",
      tips: ["세계 최고 수준 의료비", "스키 사고 특약 필수", "산악 구조비용 별도 고액"],
    },
    flights: [
      { airport: "취리히 공항", airportCode: "ZRH", duration: "약 12시간", airlines: "대한항공, 스위스국제항공" },
      { airport: "제네바 공항", airportCode: "GVA", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  LI: {
    comm: {
      esim: { price: "₩25,000~35,000", providers: "Airalo, Holafly, Ubigi", note: "스위스 망 로밍" },
      localSim: { price: "CHF 20~40", carriers: "Telecom Liechtenstein, 스위스 통신사", note: "스위스 SIM 사용 가능" },
      roaming: { price: "₩18,000/일", note: "스위스 망 사용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주스위스 대한민국 대사관 (겸임)", phone: "+41-31-356-2444" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 CHF 300~600, 입원 CHF 1,500~3,000/일",
      minCoverage: "₩100,000,000",
      tips: ["스위스 의료 시스템 사용", "의료비 매우 고액", "여행자 보험 필수"],
    },
    flights: [
      { airport: "취리히 공항 (인접)", airportCode: "ZRH", duration: "약 12시간 + 육로 1시간 30분", airlines: "대한항공, 스위스국제항공 (취리히 경유)" },
    ],
  },
  NO: {
    comm: {
      esim: { price: "₩25,000~35,000", providers: "Airalo, Holafly, Ubigi", note: "북유럽 eSIM 고가" },
      localSim: { price: "NOK 100~300", carriers: "Telenor, Telia, Ice", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩18,000/일", note: "EU 비회원국, 로밍 요금 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주노르웨이 대한민국 대사관", phone: "+47-22-54-7090" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 NOK 1,500~3,000, 입원 NOK 8,000~15,000/일",
      minCoverage: "₩100,000,000",
      tips: ["의료비 매우 고액", "산악 구조비용 별도", "겨울철 한파 주의"],
    },
    flights: [
      { airport: "오슬로 가르데르모엔 공항", airportCode: "OSL", duration: "약 11시간 30분 (경유)", airlines: "경유편" },
      { airport: "베르겐 공항", airportCode: "BGO", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  SE: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly, Ubigi", note: "북유럽 통합 eSIM 추천" },
      localSim: { price: "SEK 100~200", carriers: "Telia, Telenor, Tre", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩13,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주스웨덴 대한민국 대사관", phone: "+46-8-5458-9400" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 SEK 1,500~3,000, 입원 SEK 8,000~15,000/일",
      minCoverage: "₩70,000,000",
      tips: ["의료비 고액", "겨울철 한파 주의", "영어 통용"],
    },
    flights: [
      { airport: "스톡홀름 알란다 공항", airportCode: "ARN", duration: "약 11시간 (경유)", airlines: "경유편" },
    ],
  },
  DK: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly, Ubigi", note: "북유럽 통합 eSIM 추천" },
      localSim: { price: "DKK 75~150", carriers: "TDC, Telenor, Telia", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩13,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주덴마크 대한민국 대사관", phone: "+45-39-46-0400" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 DKK 1,000~2,000, 입원 DKK 6,000~12,000/일",
      minCoverage: "₩70,000,000",
      tips: ["의료비 고액", "자전거 사고 커버리지 확인", "영어 통용"],
    },
    flights: [
      { airport: "코펜하겐 카스트럽 공항", airportCode: "CPH", duration: "약 11시간 (경유)", airlines: "경유편" },
    ],
  },
  IS: {
    comm: {
      esim: { price: "₩25,000~35,000", providers: "Airalo, Holafly, Ubigi", note: "아이슬란드 단독 eSIM 고가" },
      localSim: { price: "ISK 1,500~3,000", carriers: "Síminn, Vodafone, Nova", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩18,000/일", note: "EU 비회원국, 로밍 요금 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주노르웨이 대한민국 대사관 (겸임)", phone: "+47-22-54-7090" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 방문 ISK 30,000~60,000, 입원 ISK 150,000~300,000/일",
      minCoverage: "₩100,000,000",
      tips: ["의료비 매우 고액", "산악/빙하 구조비용 별도", "날씨 급변 주의"],
    },
    flights: [
      { airport: "케플라비크 국제공항", airportCode: "KEF", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  CZ: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "CZK 200~400", carriers: "T-Mobile, Vodafone, O2", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주체코 대한민국 대사관", phone: "+420-234-090-411" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 CZK 1,500~3,000, 입원 CZK 8,000~15,000/일",
      minCoverage: "₩30,000,000",
      tips: ["영어 가능 병원 제한적", "맥주 축제 시즌 사고 주의", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "프라하 바츨라프 하벨 공항", airportCode: "PRG", duration: "약 11시간 30분", airlines: "대한항공, 체코항공" },
    ],
  },
  PL: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "PLN 20~40", carriers: "Orange, T-Mobile, Play", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주폴란드 대한민국 대사관", phone: "+48-22-559-4900" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 PLN 200~500, 입원 PLN 1,000~2,000/일",
      minCoverage: "₩30,000,000",
      tips: ["겨울철 낙상사고 주의", "영어 가능 병원 대도시 중심", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "바르샤바 쇼팽 공항", airportCode: "WAW", duration: "약 11시간 (경유)", airlines: "경유편" },
      { airport: "크라쿠프 발리체 공항", airportCode: "KRK", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  HU: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "HUF 2,000~4,000", carriers: "Telekom, Vodafone, Yettel", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주헝가리 대한민국 대사관", phone: "+36-1-462-3080" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 HUF 15,000~30,000, 입원 HUF 80,000~150,000/일",
      minCoverage: "₩30,000,000",
      tips: ["온천 사고 커버리지 확인", "영어 가능 병원 제한적", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "부다페스트 리스트 페렌츠 공항", airportCode: "BUD", duration: "약 11시간 30분", airlines: "대한항공" },
    ],
  },
  RO: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "RON 20~40", carriers: "Orange, Vodafone, Telekom", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주루마니아 대한민국 대사관", phone: "+40-21-230-7198" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 RON 150~300, 입원 RON 800~1,500/일",
      minCoverage: "₩30,000,000",
      tips: ["지방 의료 인프라 제한적", "영어 가능 병원 수도 중심", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "부쿠레슈티 앙리 코안더 공항", airportCode: "OTP", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  BG: {
    comm: {
      esim: { price: "₩15,000~25,000", providers: "Airalo, Holafly, Ubigi", note: "유럽 통합 eSIM 추천" },
      localSim: { price: "BGN 10~20", carriers: "Vivacom, Telenor, A1", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩11,000/일", note: "EU 로밍 규정 적용" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주불가리아 대한민국 대사관", phone: "+359-2-971-3631" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 방문 BGN 80~150, 입원 BGN 400~800/일",
      minCoverage: "₩30,000,000",
      tips: ["스키 리조트 사고 커버리지 확인", "영어 가능 병원 제한적", "EU 건강보험카드 사용 가능"],
    },
    flights: [
      { airport: "소피아 공항", airportCode: "SOF", duration: "약 13시간 30분 (경유)", airlines: "경유편" },
    ],
  },
  RS: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "발칸 지역 eSIM 제한적" },
      localSim: { price: "RSD 500~1,000", carriers: "Telekom Srbija, Telenor, A1", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 별도" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주세르비아 대한민국 대사관", phone: "+381-11-3060-370" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 RSD 3,000~6,000, 입원 RSD 15,000~30,000/일",
      minCoverage: "₩20,000,000",
      tips: ["지방 의료 인프라 제한적", "영어 가능 병원 수도 중심", "현금 진료 일반적"],
    },
    flights: [
      { airport: "베오그라드 니콜라 테슬라 공항", airportCode: "BEG", duration: "약 13시간 30분 (경유)", airlines: "경유편" },
    ],
  },
  BA: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "발칸 지역 eSIM 제한적" },
      localSim: { price: "BAM 10~20", carriers: "BH Telecom, M:tel, HT Eronet", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 별도" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주오스트리아 대한민국 대사관 (겸임)", phone: "+43-1-478-1991" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 BAM 50~100, 입원 BAM 200~400/일",
      minCoverage: "₩20,000,000",
      tips: ["의료 인프라 제한적", "지뢰 지대 주의", "현금 진료 일반적"],
    },
    flights: [
      { airport: "사라예보 국제공항", airportCode: "SJJ", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  AL: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "발칸 지역 eSIM 제한적" },
      localSim: { price: "ALL 500~1,000", carriers: "Vodafone, Telekom, ALBtelecom", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 별도" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주그리스 대한민국 대사관 (겸임)", phone: "+30-210-698-4080" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 ALL 3,000~6,000, 입원 ALL 15,000~30,000/일",
      minCoverage: "₩20,000,000",
      tips: ["의료 인프라 미흡", "수도 외 지역 병원 부족", "현금 진료 일반적"],
    },
    flights: [
      { airport: "티라나 국제공항", airportCode: "TIA", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  MK: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "발칸 지역 eSIM 제한적" },
      localSim: { price: "MKD 300~600", carriers: "A1, Telekom, ONE", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 별도" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주그리스 대한민국 대사관 (겸임)", phone: "+30-210-698-4080" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 MKD 2,000~4,000, 입원 MKD 10,000~20,000/일",
      minCoverage: "₩20,000,000",
      tips: ["의료 인프라 제한적", "영어 가능 병원 수도 중심", "현금 진료 일반적"],
    },
    flights: [
      { airport: "스코페 국제공항", airportCode: "SKP", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  MD: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "동유럽 eSIM 제한적" },
      localSim: { price: "MDL 50~100", carriers: "Orange, Moldcell, Moldtelecom", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주루마니아 대한민국 대사관 (겸임)", phone: "+40-21-230-7198" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 MDL 500~1,000, 입원 MDL 2,000~4,000/일",
      minCoverage: "₩20,000,000",
      tips: ["의료 인프라 미흡", "수도 외 지역 병원 부족", "현금 진료 일반적"],
    },
    flights: [
      { airport: "키시너우 국제공항", airportCode: "KIV", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  UA: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "전쟁 영향으로 서비스 불안정" },
      localSim: { price: "UAH 100~200", carriers: "Kyivstar, Vodafone, lifecell", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "전쟁으로 로밍 서비스 제한적" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주우크라이나 대한민국 대사관", phone: "+380-44-246-3759" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 UAH 1,000~2,000, 입원 UAH 5,000~10,000/일",
      minCoverage: "₩50,000,000",
      tips: ["전쟁 지역 여행 경보 발령", "전쟁 특약 보험 필수", "긴급 대피 보험 확인"],
    },
    flights: [
      { airport: "키이우 보리스필 공항", airportCode: "KBP", duration: "약 13시간 (경유, 전쟁으로 운항 중단)", airlines: "운항 중단" },
    ],
  },
  BY: {
    comm: {
      esim: { price: "₩25,000~35,000", providers: "Airalo", note: "제재로 eSIM 제공 제한적" },
      localSim: { price: "BYN 10~20", carriers: "A1, MTS, life:)", note: "공항에서 구매, 등록 필수" },
      roaming: { price: "₩18,000/일", note: "제재로 로밍 서비스 제한적" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주러시아 대한민국 대사관 (겸임)", phone: "+7-495-783-2727" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 BYN 50~100, 입원 BYN 200~400/일",
      minCoverage: "₩30,000,000",
      tips: ["의료 인프라 구소련 수준", "정치 리스크 보험 검토", "현금 진료 일반적"],
    },
    flights: [
      { airport: "민스크 국제공항", airportCode: "MSQ", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  RU: {
    comm: {
      esim: { price: "₩30,000~40,000", providers: "제한적", note: "제재로 eSIM 제공 거의 불가" },
      localSim: { price: "RUB 300~600", carriers: "MTS, Beeline, MegaFon", note: "등록 의무, 신분증 필수" },
      roaming: { price: "₩20,000/일", note: "제재로 로밍 서비스 제한적" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주러시아 대한민국 대사관", phone: "+7-495-783-2727" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 RUB 3,000~6,000, 입원 RUB 15,000~30,000/일",
      minCoverage: "₩30,000,000",
      tips: ["제재로 해외 보험 제한적", "현지 보험 구매 권장", "정치 리스크 주의"],
    },
  },
  GE: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "코카서스 지역 eSIM 제한적" },
      localSim: { price: "GEL 10~20", carriers: "Magticom, Beeline, Silknet", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주조지아 대한민국 대사관", phone: "+995-32-298-0721" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 GEL 100~200, 입원 GEL 500~1,000/일",
      minCoverage: "₩20,000,000",
      tips: ["분쟁 지역(압하지야, 남오세티야) 주의", "산악 구조 인프라 제한적", "현금 진료 일반적"],
    },
    flights: [
      { airport: "트빌리시 국제공항", airportCode: "TBS", duration: "약 10시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
    ],
  },
  AM: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "코카서스 지역 eSIM 제한적" },
      localSim: { price: "AMD 2,000~4,000", carriers: "Beeline, VivaCell-MTS, Ucom", note: "공항 및 편의점에서 구매" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주아르메니아 대한민국 대사관", phone: "+374-10-523-026" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 AMD 15,000~30,000, 입원 AMD 80,000~150,000/일",
      minCoverage: "₩20,000,000",
      tips: ["국경 분쟁 지역 주의", "의료 인프라 제한적", "현금 진료 일반적"],
    },
    flights: [
      { airport: "즈바르트노츠 국제공항 (예레반)", airportCode: "EVN", duration: "약 11시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
    ],
  },
  AZ: {
    comm: {
      esim: { price: "₩20,000~30,000", providers: "Airalo, Holafly", note: "코카서스 지역 eSIM 제한적" },
      localSim: { price: "AZN 10~20", carriers: "Azercell, Bakcell, Nar", note: "공항 및 편의점에서 구매, 등록 필요" },
      roaming: { price: "₩15,000/일", note: "EU 비회원국, 로밍 요금 고액" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주아제르바이잔 대한민국 대사관", phone: "+994-12-488-1760" } },
    insurance: {
      level: "low",
      avgMedicalCost: "응급실 방문 AZN 50~100, 입원 AZN 200~400/일",
      minCoverage: "₩20,000,000",
      tips: ["분쟁 지역(나고르노-카라바흐) 절대 주의", "수도 외 지역 병원 부족", "현금 진료 일반적"],
    },
    flights: [
      { airport: "헤이다르 알리예프 국제공항 (바쿠)", airportCode: "GYD", duration: "약 10시간 (경유)", airlines: "경유편 (이스탄불, 두바이 경유)" },
    ],
  },
  // === 아메리카 ===
  US: {
    comm: {
      esim: { price: "25,000원~", providers: "Airalo, Holafly, Ubigi", note: "무제한 데이터 플랜 다수, 5G 지원" },
      localSim: { price: "$30~50 (7일)", carriers: "T-Mobile, AT&T, Verizon", note: "공항/편의점 구매 가능, 신분증 필요" },
      roaming: { price: "77,000원~ (7일)", note: "SKT/KT/LGU+ 하루 11,000원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주미국대한민국대사관", phone: "+1-202-939-5600" } },
    insurance: {
      level: "very_high",
      avgMedicalCost: "응급실 기본 $1,500~3,000, 입원 1일 $5,000~10,000",
      minCoverage: "최소 1억원 이상 (5천만원 이상 권장)",
      tips: ["의료비 매우 고액, 보험 필수", "치과/안과 별도 보장 확인", "여행자보험 긴급의료 직접 청구 서비스 확인"],
    },
    flights: [
      { airport: "존 F. 케네디 국제공항", airportCode: "JFK", duration: "약 14시간", airlines: "대한항공, 아시아나항공, 델타항공" },
      { airport: "로스앤젤레스 국제공항", airportCode: "LAX", duration: "약 11시간", airlines: "대한항공, 아시아나항공, 유나이티드항공" },
      { airport: "샌프란시스코 국제공항", airportCode: "SFO", duration: "약 11시간", airlines: "대한항공, 아시아나항공, 유나이티드항공" },
    ],
  },
  CA: {
    comm: {
      esim: { price: "22,000원~", providers: "Airalo, Holafly, Nomad", note: "미국+캐나다 통합 플랜 다수" },
      localSim: { price: "CAD 40~60 (7일)", carriers: "Rogers, Bell, Telus", note: "공항 및 편의점 구매, 신분증 필요" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주캐나다대한민국대사관", phone: "+1-613-244-5010" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 기본 CAD 500~1,500, 입원 1일 CAD 2,000~5,000",
      minCoverage: "최소 5천만원 이상",
      tips: ["공공의료 외국인 비적용", "구급차 유료 (CAD 500~)", "처방약 고액"],
    },
    flights: [
      { airport: "토론토 피어슨 국제공항", airportCode: "YYZ", duration: "약 13시간 30분", airlines: "대한항공, 에어캐나다" },
      { airport: "밴쿠버 국제공항", airportCode: "YVR", duration: "약 10시간 30분", airlines: "대한항공, 에어캐나다" },
    ],
  },
  MX: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo, Holafly, Maya Mobile", note: "관광지 4G/5G 양호" },
      localSim: { price: "MXN 200~400 (7일)", carriers: "Telcel, AT&T México, Movistar", note: "OXXO 편의점 및 공항 구매 가능" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주멕시코대한민국대사관", phone: "+52-55-5202-9866" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $50~100, 입원 1일 $300~800",
      minCoverage: "3천만원 이상",
      tips: ["사립병원 권장", "응급 시 영어 가능 병원 확인", "여행자 설사/식중독 보장 확인"],
    },
    flights: [
      { airport: "멕시코시티 국제공항", airportCode: "MEX", duration: "약 14시간 30분", airlines: "아에로멕시코 (직항)" },
      { airport: "칸쿤 국제공항", airportCode: "CUN", duration: "약 18시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  PA: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo, Holafly", note: "파나마시티 외곽 커버리지 제한적" },
      localSim: { price: "$15~30 (7일)", carriers: "+Móvil, Claro, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "103", ambulance: "911", embassy: { name: "주파나마대한민국대사관", phone: "+507-210-6500" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $60~120, 입원 1일 $400~1,000",
      minCoverage: "3천만원 이상",
      tips: ["사립병원 수준 양호", "황열병 백신 증명서 일부 지역 필요", "뎅기열 주의"],
    },
    flights: [
      { airport: "토쿠멘 국제공항", airportCode: "PTY", duration: "약 20시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  CR: {
    comm: {
      esim: { price: "19,000원~", providers: "Airalo, Holafly", note: "관광지 양호, 밀림 지역 불안정" },
      localSim: { price: "$20~35 (7일)", carriers: "Kolbi, Claro, Movistar", note: "공항 및 슈퍼마켓 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주코스타리카대한민국대사관", phone: "+506-2220-3188" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $80~150, 입원 1일 $500~1,200",
      minCoverage: "3천만원 이상",
      tips: ["의료 관광지로 수준 높음", "어드벤처 액티비티 보장 확인", "뎅기열/지카 주의"],
    },
    flights: [
      { airport: "후안 산타마리아 국제공항", airportCode: "SJO", duration: "약 20시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  GT: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo, Holafly", note: "도심 양호, 시골 불안정" },
      localSim: { price: "Q80~150 (7일)", carriers: "Tigo, Claro, Movistar", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "110", fire: "122", ambulance: "123", embassy: { name: "주과테말라대한민국대사관", phone: "+502-2382-4057" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $40~80, 입원 1일 $200~500",
      minCoverage: "2천만원 이상",
      tips: ["사립병원 권장", "고산지대 고산병 주의", "말라리아 예방약 필요 지역 있음"],
    },
    flights: [
      { airport: "라 아우로라 국제공항", airportCode: "GUA", duration: "약 21시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  HN: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo", note: "주요 도시만 안정적" },
      localSim: { price: "L200~400 (7일)", carriers: "Tigo, Claro, Hondutel", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주온두라스대한민국대사관 (주과테말라대사관 겸임)", phone: "+502-2382-4057" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $30~60, 입원 1일 $150~400",
      minCoverage: "2천만원 이상",
      tips: ["테구시갈파/산페드로술라 사립병원 권장", "뎅기열 다발", "치안 주의"],
    },
    flights: [
      { airport: "톤콘틴 국제공항", airportCode: "TGU", duration: "약 22시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  SV: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo", note: "도심 양호" },
      localSim: { price: "$10~25 (7일)", carriers: "Tigo, Claro, Movistar", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "913", ambulance: "132", embassy: { name: "주엘살바도르대한민국대사관 (주과테말라대사관 겸임)", phone: "+502-2382-4057" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $35~70, 입원 1일 $180~450",
      minCoverage: "2천만원 이상",
      tips: ["산살바도르 사립병원 이용", "뎅기열 주의", "치안 불안"],
    },
    flights: [
      { airport: "엘살바도르 국제공항", airportCode: "SAL", duration: "약 21시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  NI: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo", note: "마나과 중심 커버리지" },
      localSim: { price: "C$200~400 (7일)", carriers: "Claro, Movistar, Tigo", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "118", fire: "115", ambulance: "128", embassy: { name: "주니카라과대한민국대사관 (주과테말라대사관 겸임)", phone: "+502-2382-4057" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $30~60, 입원 1일 $150~400",
      minCoverage: "2천만원 이상",
      tips: ["사립병원 권장", "뎅기열/말라리아 지역 있음", "정치 상황 확인"],
    },
    flights: [
      { airport: "아우구스토 세사르 산디노 국제공항", airportCode: "MGA", duration: "약 22시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  BZ: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "관광지 중심 커버리지" },
      localSim: { price: "$15~30 (7일)", carriers: "Digi, Smart", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "90", ambulance: "90", embassy: { name: "주벨리즈대한민국대사관 (주과테말라대사관 겸임)", phone: "+502-2382-4057" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $50~100, 입원 1일 $250~600",
      minCoverage: "2천만원 이상",
      tips: ["중증은 멕시코/미국 이송", "다이빙 사고 보장 확인", "뎅기열 주의"],
    },
    flights: [
      { airport: "필립 골드슨 국제공항", airportCode: "BZE", duration: "약 22시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  CU: {
    comm: {
      esim: { price: "25,000원~", providers: "Holafly (일부 지원)", note: "인터넷 제한적, 속도 느림" },
      localSim: { price: "$15~30 (7일)", carriers: "ETECSA", note: "공항/ETECSA 매장, 국영통신사 독점" },
      roaming: { price: "110,000원~ (7일)", note: "하루 15,700원 수준, 제한적 지원" },
    },
    emergency: { police: "106", fire: "105", ambulance: "104", embassy: { name: "주쿠바대한민국대사관", phone: "+53-7-204-3366" } },
    insurance: {
      level: "low",
      avgMedicalCost: "외국인 전용 클리닉 $50~150, 입원 1일 $200~500",
      minCoverage: "2천만원 이상",
      tips: ["외국인 전용 의료기관 이용", "현금(유로/달러) 필수", "의료 수준 제한적"],
    },
    flights: [
      { airport: "호세 마르티 국제공항", airportCode: "HAV", duration: "약 22시간 (경유)", airlines: "경유편 (캐나다/멕시코 경유)" },
    ],
  },
  JM: {
    comm: {
      esim: { price: "19,000원~", providers: "Airalo, Holafly", note: "관광지 양호" },
      localSim: { price: "$20~35 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "119", fire: "110", ambulance: "110", embassy: { name: "주자메이카대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $60~120, 입원 1일 $300~700",
      minCoverage: "2천만원 이상",
      tips: ["킹스턴 사립병원 권장", "치안 주의", "뎅기열 주의"],
    },
    flights: [
      { airport: "노먼 맨리 국제공항", airportCode: "KIN", duration: "약 22시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  DO: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo, Holafly", note: "관광지 5G 지원" },
      localSim: { price: "$15~30 (7일)", carriers: "Claro, Altice, Viva", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주도미니카공화국대한민국대사관", phone: "+1-809-683-0636" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $50~100, 입원 1일 $300~800",
      minCoverage: "3천만원 이상",
      tips: ["산토도밍고/푸에르토플라타 사립병원 양호", "수상 스포츠 보장 확인", "뎅기열/지카 주의"],
    },
    flights: [
      { airport: "라스 아메리카스 국제공항", airportCode: "SDQ", duration: "약 22시간 (경유)", airlines: "경유편 (미국 경유)" },
      { airport: "푼타카나 국제공항", airportCode: "PUJ", duration: "약 23시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  TT: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "도심 양호" },
      localSim: { price: "$25~40 (7일)", carriers: "bmobile, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "999", fire: "990", ambulance: "811", embassy: { name: "주트리니다드토바고대한민국대사관", phone: "+1-868-622-3535" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $70~140, 입원 1일 $400~1,000",
      minCoverage: "3천만원 이상",
      tips: ["포트오브스페인 사립병원 권장", "뎅기열 주의", "치안 주의"],
    },
    flights: [
      { airport: "피아르코 국제공항", airportCode: "POS", duration: "약 24시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  BS: {
    comm: {
      esim: { price: "22,000원~", providers: "Airalo, Holafly", note: "나소/프리포트 양호" },
      localSim: { price: "$30~50 (7일)", carriers: "BTC, Aliv", note: "공항 및 편의점 구매" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "919", fire: "911", ambulance: "911", embassy: { name: "주바하마대한민국대사관 (주미국대사관 겸임)", phone: "+1-202-939-5600" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $100~200, 입원 1일 $800~2,000",
      minCoverage: "5천만원 이상",
      tips: ["의료비 고액", "중증은 미국 이송", "수상 스포츠 보장 필수"],
    },
    flights: [
      { airport: "린든 핀들링 국제공항", airportCode: "NAS", duration: "약 20시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  BB: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo, Holafly", note: "전국 커버리지 양호" },
      localSim: { price: "$25~40 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "211", fire: "311", ambulance: "511", embassy: { name: "주바베이도스대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $80~150, 입원 1일 $500~1,200",
      minCoverage: "3천만원 이상",
      tips: ["의료 수준 양호", "수상 스포츠 보장 확인", "허리케인 시즌 주의"],
    },
    flights: [
      { airport: "그랜틀리 애덤스 국제공항", airportCode: "BGI", duration: "약 24시간 (경유)", airlines: "경유편 (미국/영국 경유)" },
    ],
  },
  HT: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "포르토프랭스 중심, 불안정" },
      localSim: { price: "$15~30 (7일)", carriers: "Digicel, Natcom", note: "공항 및 일부 매장" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준, 제한적 지원" },
    },
    emergency: { police: "114", fire: "115", ambulance: "116", embassy: { name: "주아이티대한민국대사관 (주도미니카공화국대사관 겸임)", phone: "+1-809-683-0636" } },
    insurance: {
      level: "low",
      avgMedicalCost: "국제 클리닉 진료 $50~100, 입원 1일 $200~500",
      minCoverage: "3천만원 이상 (긴급 후송 보장 필수)",
      tips: ["의료 인프라 취약", "긴급 후송 보장 필수", "치안 매우 불안, 여행 자제 권고"],
    },
    flights: [
      { airport: "투생 루베르튀르 국제공항", airportCode: "PAP", duration: "약 23시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  BR: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo, Holafly, Nomad", note: "주요 도시 5G 지원" },
      localSim: { price: "R$30~60 (7일)", carriers: "Vivo, Claro, TIM", note: "공항 및 편의점 구매, CPF(납세번호) 필요할 수 있음" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "190", fire: "193", ambulance: "192", embassy: { name: "주브라질대한민국대사관", phone: "+55-61-3321-2500" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 R$200~500, 입원 1일 R$1,500~4,000",
      minCoverage: "3천만원 이상",
      tips: ["사립병원 권장", "뎅기열/지카/황열 주의", "아마존 지역 말라리아 예방약 필요"],
    },
    flights: [
      { airport: "상파울루 구아룰류스 국제공항", airportCode: "GRU", duration: "약 24시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
      { airport: "리우데자네이루 갈레앙 국제공항", airportCode: "GIG", duration: "약 26시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
    ],
  },
  AR: {
    comm: {
      esim: { price: "19,000원~", providers: "Airalo, Holafly, Nomad", note: "부에노스아이레스 5G 지원" },
      localSim: { price: "$15~30 (7일)", carriers: "Claro, Movistar, Personal", note: "공항 및 키오스크 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "100", ambulance: "107", embassy: { name: "주아르헨티나대한민국대사관", phone: "+54-11-4802-8062" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $50~120, 입원 1일 $300~800",
      minCoverage: "3천만원 이상",
      tips: ["부에노스아이레스 사립병원 수준 높음", "고산지대(노르테) 고산병 주의", "황열 예방접종 일부 지역 권장"],
    },
    flights: [
      { airport: "에세이사 국제공항", airportCode: "EZE", duration: "약 26시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
    ],
  },
  CL: {
    comm: {
      esim: { price: "19,000원~", providers: "Airalo, Holafly, Nomad", note: "산티아고 5G 지원" },
      localSim: { price: "$15~35 (7일)", carriers: "Entel, Movistar, Claro, WOM", note: "공항 및 편의점 구매, 여권 필요" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "133", fire: "132", ambulance: "131", embassy: { name: "주칠레대한민국대사관", phone: "+56-2-2228-4214" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $60~150, 입원 1일 $400~1,200",
      minCoverage: "3천만원 이상",
      tips: ["산티아고 의료 수준 높음", "고산지대 고산병 주의", "지진 대비 확인"],
    },
    flights: [
      { airport: "아르투로 메리노 베니테스 국제공항", airportCode: "SCL", duration: "약 26시간 (경유)", airlines: "경유편 (미국/호주 경유)" },
    ],
  },
  CO: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo, Holafly, Nomad", note: "주요 도시 5G 지원" },
      localSim: { price: "$15~30 (7일)", carriers: "Claro, Movistar, Tigo", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "112", fire: "119", ambulance: "125", embassy: { name: "주콜롬비아대한민국대사관", phone: "+57-1-616-7200" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $40~100, 입원 1일 $250~700",
      minCoverage: "3천만원 이상",
      tips: ["보고타/메데인 사립병원 수준 양호", "고산지대 고산병 주의", "뎅기열/지카 주의"],
    },
    flights: [
      { airport: "엘도라도 국제공항", airportCode: "BOG", duration: "약 21시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  PE: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo, Holafly", note: "리마/쿠스코 양호" },
      localSim: { price: "S/20~40 (7일)", carriers: "Claro, Movistar, Entel, Bitel", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "105", fire: "116", ambulance: "117", embassy: { name: "주페루대한민국대사관", phone: "+51-1-210-8800" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $40~100, 입원 1일 $250~700",
      minCoverage: "3천만원 이상",
      tips: ["리마 사립병원 권장", "고산병 대비 필수(쿠스코 3,400m)", "황열 예방접종 아마존 지역 필요"],
    },
    flights: [
      { airport: "호르헤 차베스 국제공항", airportCode: "LIM", duration: "약 23시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  EC: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo, Holafly", note: "키토/과야킬 양호" },
      localSim: { price: "$10~25 (7일)", carriers: "Claro, Movistar, CNT", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주에콰도르대한민국대사관", phone: "+593-2-290-5539" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $40~90, 입원 1일 $200~600",
      minCoverage: "3천만원 이상",
      tips: ["키토/과야킬 사립병원 권장", "고산병 주의(키토 2,850m)", "갈라파고스 추가 보험 확인"],
    },
    flights: [
      { airport: "마리스칼 수크레 국제공항", airportCode: "UIO", duration: "약 22시간 (경유)", airlines: "경유편 (미국 경유)" },
    ],
  },
  VE: {
    comm: {
      esim: { price: "25,000원~", providers: "Airalo (제한적)", note: "인프라 불안정, 정전 빈번" },
      localSim: { price: "Bs.50~100 (7일)", carriers: "Movistar, Digitel", note: "구매 어려움, 현금 필요" },
      roaming: { price: "110,000원~ (7일)", note: "하루 15,700원 수준, 제한적 지원" },
    },
    emergency: { police: "171", fire: "171", ambulance: "171", embassy: { name: "주베네수엘라대한민국대사관", phone: "+58-212-993-0143" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $30~80 (현금), 입원 1일 $150~400",
      minCoverage: "3천만원 이상 (긴급 후송 보장 필수)",
      tips: ["의료 인프라 붕괴", "긴급 후송 보장 필수", "여행 자제 권고, 치안 매우 불안"],
    },
    flights: [
      { airport: "시몬 볼리바르 국제공항", airportCode: "CCS", duration: "약 24시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
    ],
  },
  UY: {
    comm: {
      esim: { price: "19,000원~", providers: "Airalo, Holafly", note: "몬테비데오 5G 지원" },
      localSim: { price: "$20~40 (7일)", carriers: "Antel, Movistar, Claro", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "104", ambulance: "105", embassy: { name: "주우루과이대한민국대사관", phone: "+598-2-712-5558" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 $50~120, 입원 1일 $300~800",
      minCoverage: "3천만원 이상",
      tips: ["몬테비데오 의료 수준 양호", "뎅기열 일부 지역", "치안 비교적 안전"],
    },
    flights: [
      { airport: "카라스코 국제공항", airportCode: "MVD", duration: "약 27시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
    ],
  },
  PY: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo", note: "아순시온 중심 커버리지" },
      localSim: { price: "₲100,000~200,000 (7일)", carriers: "Tigo, Personal, Claro", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "132", ambulance: "141", embassy: { name: "주파라과이대한민국대사관", phone: "+595-21-612-5903" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $30~70, 입원 1일 $150~400",
      minCoverage: "2천만원 이상",
      tips: ["아순시온 사립병원 권장", "뎅기열 주의", "황열 예방접종 일부 지역 권장"],
    },
    flights: [
      { airport: "실비오 페티로시 국제공항", airportCode: "ASU", duration: "약 28시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
    ],
  },
  BO: {
    comm: {
      esim: { price: "18,000원~", providers: "Airalo", note: "라파스/산타크루스 중심" },
      localSim: { price: "Bs30~60 (7일)", carriers: "Entel, Tigo, Viva", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "110", fire: "119", ambulance: "118", embassy: { name: "주볼리비아대한민국대사관", phone: "+591-2-279-7060" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $30~70, 입원 1일 $150~400",
      minCoverage: "2천만원 이상",
      tips: ["라파스 사립병원 권장", "고산병 대비 필수(라파스 3,640m)", "황열 예방접종 저지대 필요"],
    },
    flights: [
      { airport: "비루비루 국제공항", airportCode: "VVI", duration: "약 28시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
      { airport: "엘알토 국제공항", airportCode: "LPB", duration: "약 30시간 (경유)", airlines: "경유편 (미국/유럽 경유)" },
    ],
  },
  GY: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "조지타운 중심, 내륙 불안정" },
      localSim: { price: "$20~35 (7일)", carriers: "Digicel, GTT", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "911", fire: "912", ambulance: "913", embassy: { name: "주가이아나대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $40~80, 입원 1일 $200~500",
      minCoverage: "2천만원 이상",
      tips: ["조지타운 사립병원 권장", "말라리아/황열 예방 필수", "의료 인프라 제한적"],
    },
    flights: [
      { airport: "체디 자간 국제공항", airportCode: "GEO", duration: "약 26시간 (경유)", airlines: "경유편 (미국/캐나다 경유)" },
    ],
  },
  SR: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "파라마리보 중심" },
      localSim: { price: "$20~40 (7일)", carriers: "Digicel, Telesur", note: "공항 및 편의점 구매" },
      roaming: { price: "55,000원~ (7일)", note: "하루 7,900원 수준" },
    },
    emergency: { police: "115", fire: "110", ambulance: "113", embassy: { name: "주수리남대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $40~90, 입원 1일 $200~500",
      minCoverage: "2천만원 이상",
      tips: ["파라마리보 사립병원 권장", "말라리아/황열 예방 필수", "의료 인프라 제한적"],
    },
    flights: [
      { airport: "요한 아돌프 펭엘 국제공항", airportCode: "PBM", duration: "약 26시간 (경유)", airlines: "경유편 (네덜란드 경유)" },
    ],
  },
  AG: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo, Holafly", note: "앤티가 전역 양호" },
      localSim: { price: "$25~40 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주앤티가바부다대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립병원 진료 $80~150, 입원 1일 $400~1,000",
      minCoverage: "3천만원 이상",
      tips: ["중증은 미국/푸에르토리코 이송", "수상 스포츠 보장 확인", "허리케인 시즌 주의"],
    },
    flights: [
      { airport: "V.C. 버드 국제공항", airportCode: "ANU", duration: "약 24시간 (경유)", airlines: "경유편 (미국/영국 경유)" },
    ],
  },
  DM: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "로조 중심 커버리지" },
      localSim: { price: "$20~35 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주도미니카연방대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "병원 진료 $60~120, 입원 1일 $300~700",
      minCoverage: "2천만원 이상",
      tips: ["의료 인프라 제한적", "중증은 인근국 이송", "뎅기열 주의"],
    },
    flights: [
      { airport: "더글러스 찰스 공항", airportCode: "DOM", duration: "약 25시간 (경유)", airlines: "경유편 (미국/영국 경유)" },
    ],
  },
  GD: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "세인트조지스 양호" },
      localSim: { price: "$25~40 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "911", fire: "911", ambulance: "434", embassy: { name: "주그레나다대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "병원 진료 $60~120, 입원 1일 $300~700",
      minCoverage: "2천만원 이상",
      tips: ["의료 인프라 제한적", "중증은 트리니다드 이송", "뎅기열 주의"],
    },
    flights: [
      { airport: "모리스 비숍 국제공항", airportCode: "GND", duration: "약 25시간 (경유)", airlines: "경유편 (미국/영국 경유)" },
    ],
  },
  KN: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "바스테르 중심 양호" },
      localSim: { price: "$25~40 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "911", fire: "333", ambulance: "911", embassy: { name: "주세인트키츠네비스대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "병원 진료 $70~140, 입원 1일 $350~800",
      minCoverage: "3천만원 이상",
      tips: ["의료 인프라 제한적", "중증은 푸에르토리코 이송", "뎅기열 주의"],
    },
    flights: [
      { airport: "로버트 L. 브래드쇼 국제공항", airportCode: "SKB", duration: "약 24시간 (경유)", airlines: "경유편 (미국/영국 경유)" },
    ],
  },
  LC: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "카스트리스 중심 양호" },
      localSim: { price: "$25~40 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "999", fire: "911", ambulance: "911", embassy: { name: "주세인트루시아대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "병원 진료 $60~120, 입원 1일 $300~700",
      minCoverage: "2천만원 이상",
      tips: ["의료 인프라 제한적", "중증은 바베이도스 이송", "뎅기열 주의"],
    },
    flights: [
      { airport: "휴어노라 찰스 국제공항", airportCode: "UVF", duration: "약 25시간 (경유)", airlines: "경유편 (미국/영국 경유)" },
    ],
  },
  VC: {
    comm: {
      esim: { price: "20,000원~", providers: "Airalo", note: "킹스타운 중심 양호" },
      localSim: { price: "$25~40 (7일)", carriers: "Flow, Digicel", note: "공항 및 편의점 구매" },
      roaming: { price: "77,000원~ (7일)", note: "하루 11,000원 수준" },
    },
    emergency: { police: "999", fire: "911", ambulance: "911", embassy: { name: "주세인트빈센트그레나딘대한민국대사관 (주트리니다드토바고대사관 겸임)", phone: "+1-868-622-3535" } },
    insurance: {
      level: "low",
      avgMedicalCost: "병원 진료 $60~120, 입원 1일 $300~700",
      minCoverage: "2천만원 이상",
      tips: ["의료 인프라 제한적", "중증은 바베이도스/트리니다드 이송", "뎅기열 주의"],
    },
    flights: [
      { airport: "아가일 국제공항", airportCode: "SVD", duration: "약 25시간 (경유)", airlines: "경유편 (미국/영국 경유)" },
    ],
  },
  // === 아프리카 ===
  ZA: {
    comm: {
      esim: { price: "₩35,000~50,000", providers: "Airalo, Ubigi, Nomad", note: "1~10GB 플랜, 주요 통신사망 지원" },
      localSim: { price: "R50~150 (₩4,000~12,000)", carriers: "Vodacom, MTN, Cell C", note: "공항·편의점 구매, 여권 필요" },
      roaming: { price: "₩11,000/일 (KT 로밍패스 기준)", note: "1일 100MB, 추가 데이터 자동 차단" },
    },
    emergency: { police: "10111", fire: "10177", ambulance: "10177", embassy: { name: "주남아프리카공화국 대한민국대사관", phone: "+27-12-460-2508" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 R3,000~5,000, 입원 R15,000~30,000/일",
      minCoverage: "₩5,000만원 이상 권장",
      tips: ["사립병원 의료비 매우 고가", "여행자보험 필수", "넷케어(Netcare) 등 사립병원 체인 다수"],
    },
    flights: [
      { airport: "O.R. 탐보 국제공항", airportCode: "JNB", duration: "약 18시간 (경유)", airlines: "경유편 (홍콩/싱가포르/두바이 경유)" },
      { airport: "케이프타운 국제공항", airportCode: "CPT", duration: "약 20시간 (경유)", airlines: "경유편 (두바이/싱가포르 경유)" },
    ],
  },
  EG: {
    comm: {
      esim: { price: "₩20,000~35,000", providers: "Airalo, Holafly", note: "3~10GB, 카이로·알렉산드리아 우수" },
      localSim: { price: "EGP 100~200 (₩4,500~9,000)", carriers: "Vodafone, Orange, Etisalat", note: "공항·편의점, 여권 필수" },
      roaming: { price: "₩11,000/일", note: "중동 로밍 요금 적용" },
    },
    emergency: { police: "122", fire: "180", ambulance: "123", embassy: { name: "주이집트 대한민국대사관", phone: "+20-2-2795-2280" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 EGP 500~1,500, 입원 EGP 5,000~10,000/일",
      minCoverage: "₩3,000만원 이상",
      tips: ["카이로 사립병원 수준 양호", "공립병원 혼잡", "응급 시 사립병원 이용 권장"],
    },
    flights: [
      { airport: "카이로 국제공항", airportCode: "CAI", duration: "약 12시간 (경유)", airlines: "경유편 (두바이/이스탄불 경유)" },
    ],
  },
  MA: {
    comm: {
      esim: { price: "₩25,000~40,000", providers: "Airalo, Orange Travel", note: "5~15GB, 주요 도시 양호" },
      localSim: { price: "MAD 50~100 (₩6,000~12,000)", carriers: "Maroc Telecom, Orange, Inwi", note: "공항·거리 매장, 여권 필요" },
      roaming: { price: "₩11,000/일", note: "아프리카 로밍 요금" },
    },
    emergency: { police: "19", fire: "15", ambulance: "15", embassy: { name: "주모로코 대한민국대사관", phone: "+212-537-75-0737" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 MAD 300~800, 입원 MAD 3,000~6,000/일",
      minCoverage: "₩3,000만원",
      tips: ["카사블랑카·라바트 의료 시설 우수", "불어 소통 가능", "여행자보험 권장"],
    },
    flights: [
      { airport: "무함마드 5세 국제공항", airportCode: "CMN", duration: "약 17시간 (경유)", airlines: "경유편 (이스탄불/두바이/파리 경유)" },
      { airport: "마라케시 메나라 공항", airportCode: "RAK", duration: "약 18시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  TN: {
    comm: {
      esim: { price: "₩18,000~30,000", providers: "Airalo, Ubigi", note: "3~10GB" },
      localSim: { price: "TND 10~30 (₩4,500~13,000)", carriers: "Ooredoo, Orange, Tunisie Telecom", note: "여권 필요" },
      roaming: { price: "₩11,000/일", note: "중동·아프리카 요금" },
    },
    emergency: { police: "197", fire: "198", ambulance: "190", embassy: { name: "주튀니지 대한민국대사관", phone: "+216-71-781-234" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 TND 50~150, 입원 TND 500~1,200/일",
      minCoverage: "₩2,500만원",
      tips: ["튀니스 시내 의료 양호", "불어 소통", "관광지 약국 다수"],
    },
    flights: [
      { airport: "튀니스 카르타고 국제공항", airportCode: "TUN", duration: "약 16시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  KE: {
    comm: {
      esim: { price: "₩25,000~40,000", providers: "Airalo, Nomad, Safaricom eSIM", note: "5~20GB, 사파리콤 망 권장" },
      localSim: { price: "KES 300~1,000 (₩3,000~10,000)", carriers: "Safaricom, Airtel, Telkom", note: "나이로비 공항·시내 구매" },
      roaming: { price: "₩11,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주케냐 대한민국대사관", phone: "+254-20-3748-256" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립병원 진료 KES 5,000~15,000, 입원 KES 50,000~100,000/일",
      minCoverage: "₩3,000만원 이상",
      tips: ["나이로비 사립병원(Aga Khan 등) 우수", "사파리 지역 의료 접근 제한", "헬기 후송 보험 검토"],
    },
    flights: [
      { airport: "조모 케냐타 국제공항", airportCode: "NBO", duration: "약 16시간 (경유)", airlines: "경유편 (방콕/두바이/홍콩 경유)" },
    ],
  },
  TZ: {
    comm: {
      esim: { price: "₩22,000~35,000", providers: "Airalo, Holafly", note: "3~10GB" },
      localSim: { price: "TZS 5,000~20,000 (₩3,000~10,000)", carriers: "Vodacom, Airtel, Tigo", note: "다르에스살람·아루샤 구매" },
      roaming: { price: "₩11,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "112", fire: "114", ambulance: "114", embassy: { name: "주탄자니아 대한민국대사관", phone: "+255-22-211-5357" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 TZS 50,000~150,000, 입원 TZS 500,000~1,000,000/일",
      minCoverage: "₩3,000만원 (후송 포함)",
      tips: ["다르 사립병원 제한적", "잔지바르 의료 취약", "케냐 후송 대비"],
    },
    flights: [
      { airport: "줄리우스 니에레레 국제공항", airportCode: "DAR", duration: "약 18시간 (경유)", airlines: "경유편 (두바이/도하 경유)" },
      { airport: "킬리만자로 국제공항", airportCode: "JRO", duration: "약 19시간 (경유)", airlines: "경유편 (두바이/도하 경유)" },
    ],
  },
  NG: {
    comm: {
      esim: { price: "₩28,000~45,000", providers: "Airalo, Ubigi", note: "5~15GB, 라고스·아부자 양호" },
      localSim: { price: "NGN 2,000~5,000 (₩4,000~10,000)", carriers: "MTN, Airtel, Glo, 9mobile", note: "등록 절차 복잡, 여권 필수" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주나이지리아 대한민국대사관", phone: "+234-9-461-2401~3" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 NGN 20,000~50,000, 입원 NGN 200,000~500,000/일",
      minCoverage: "₩5,000만원",
      tips: ["라고스 사립병원 수준 양호", "공립 시설 취약", "보안 위험 지역 주의"],
    },
    flights: [
      { airport: "무르탈라 무함메드 국제공항", airportCode: "LOS", duration: "약 18시간 (경유)", airlines: "경유편 (두바이/이스탄불 경유)" },
      { airport: "나무디 아지키웨 국제공항", airportCode: "ABV", duration: "약 19시간 (경유)", airlines: "경유편 (두바이/이스탄불 경유)" },
    ],
  },
  GH: {
    comm: {
      esim: { price: "₩20,000~35,000", providers: "Airalo, Nomad", note: "3~10GB" },
      localSim: { price: "GHS 20~50 (₩2,500~7,000)", carriers: "MTN, Vodafone, AirtelTigo", note: "아크라 공항·시내 구매" },
      roaming: { price: "₩11,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "191", fire: "192", ambulance: "193", embassy: { name: "주가나 대한민국대사관", phone: "+233-302-776-157" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 GHS 200~500, 입원 GHS 2,000~5,000/일",
      minCoverage: "₩3,000만원",
      tips: ["아크라 의료 시설 제한적", "말라리아 예방 필수", "보험 후송 조항 확인"],
    },
    flights: [
      { airport: "코토카 국제공항", airportCode: "ACC", duration: "약 19시간 (경유)", airlines: "경유편 (두바이/이스탄불 경유)" },
    ],
  },
  ET: {
    comm: {
      esim: { price: "₩25,000~40,000", providers: "Airalo, Holafly", note: "5~10GB, Ethio Telecom망" },
      localSim: { price: "ETB 100~300 (₩2,500~7,500)", carriers: "Ethio Telecom, Safaricom Ethiopia", note: "아디스아바바 공항 구매" },
      roaming: { price: "₩13,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "991", fire: "939", ambulance: "907", embassy: { name: "주에티오피아 대한민국대사관", phone: "+251-11-661-2978" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 ETB 500~1,500, 입원 ETB 5,000~15,000/일",
      minCoverage: "₩3,000만원",
      tips: ["아디스 사립병원 제한적", "고산병 위험", "케냐 후송 경로 확보"],
    },
    flights: [
      { airport: "볼레 국제공항", airportCode: "ADD", duration: "약 14시간", airlines: "에티오피아항공 (직항)" },
    ],
  },
  SN: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo, Orange Travel", note: "5~10GB" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "Orange, Free, Expresso", note: "다카르 공항·시내" },
      roaming: { price: "₩11,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "17", fire: "18", ambulance: "15", embassy: { name: "주세네갈 대한민국대사관", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 15,000~40,000, 입원 XOF 100,000~250,000/일",
      minCoverage: "₩2,500만원",
      tips: ["다카르 프랑스계 병원 양호", "불어 소통", "황열병 예방접종 필수"],
    },
    flights: [
      { airport: "블레즈 디아뉴 국제공항", airportCode: "DSS", duration: "약 20시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  CI: {
    comm: {
      esim: { price: "₩23,000~38,000", providers: "Airalo, Ubigi", note: "5~10GB" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "Orange, MTN, Moov", note: "아비장 공항 구매" },
      roaming: { price: "₩11,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "111", fire: "180", ambulance: "185", embassy: { name: "주코트디부아르 대한민국대사관", phone: "+225-27-22-473-576" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 20,000~50,000, 입원 XOF 150,000~300,000/일",
      minCoverage: "₩2,500만원",
      tips: ["아비장 사립병원 제한적", "불어 소통", "정세 주의"],
    },
    flights: [
      { airport: "펠릭스 우푸에부아니 국제공항", airportCode: "ABJ", duration: "약 20시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  CM: {
    comm: {
      esim: { price: "₩24,000~40,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "XAF 2,000~5,000 (₩4,500~11,000)", carriers: "MTN, Orange, Nexttel", note: "야운데·두알라 구매" },
      roaming: { price: "₩13,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "119", embassy: { name: "주카메룬 대한민국대사관", phone: "+237-222-202-744" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XAF 15,000~40,000, 입원 XAF 100,000~250,000/일",
      minCoverage: "₩3,000만원",
      tips: ["야운데 의료 제한적", "불어·영어 병용", "말라리아 예방"],
    },
    flights: [
      { airport: "두알라 국제공항", airportCode: "DLA", duration: "약 20시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
      { airport: "야운데 은심빌렌 국제공항", airportCode: "NSI", duration: "약 21시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  MG: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo, Holafly", note: "3~10GB" },
      localSim: { price: "MGA 5,000~15,000 (₩1,500~4,500)", carriers: "Telma, Orange, Airtel", note: "안타나나리보 공항" },
      roaming: { price: "₩13,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "124", embassy: { name: "주마다가스카르 대한민국대사관 (주모리셔스대사관 겸임)", phone: "+230-210-3116" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 MGA 50,000~150,000, 입원 MGA 500,000~1,000,000/일",
      minCoverage: "₩3,000만원",
      tips: ["의료 시설 매우 취약", "모리셔스·케냐 후송 대비", "불어 소통"],
    },
    flights: [
      { airport: "이바토 국제공항", airportCode: "TNR", duration: "약 20시간 (경유)", airlines: "경유편 (방콕/모리셔스 경유)" },
    ],
  },
  MU: {
    comm: {
      esim: { price: "₩30,000~45,000", providers: "Airalo, Ubigi, my.t eSIM", note: "5~15GB, 전국 양호" },
      localSim: { price: "MUR 300~800 (₩9,000~24,000)", carriers: "my.t, Emtel, MTML", note: "공항·편의점 구매" },
      roaming: { price: "₩11,000/일", note: "아프리카·인도양 요금" },
    },
    emergency: { police: "999", fire: "995", ambulance: "114", embassy: { name: "주모리셔스 대한민국대사관", phone: "+230-210-3116" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 MUR 2,000~5,000, 입원 MUR 20,000~50,000/일",
      minCoverage: "₩2,000만원",
      tips: ["포트루이스 의료 양호", "관광 인프라 우수", "영어·불어 소통"],
    },
    flights: [
      { airport: "시우사가르 람굴람 국제공항", airportCode: "MRU", duration: "약 16시간 (경유)", airlines: "경유편 (싱가포르/두바이 경유)" },
    ],
  },
  SC: {
    comm: {
      esim: { price: "₩35,000~55,000", providers: "Airalo, Holafly", note: "3~10GB, 섬 지역 고가" },
      localSim: { price: "SCR 150~400 (₩15,000~40,000)", carriers: "Cable & Wireless, Airtel", note: "마헤 공항 구매" },
      roaming: { price: "₩13,000/일", note: "인도양 요금" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주세이셸 대한민국대사관 (주모리셔스대사관 겸임)", phone: "+230-210-3116" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 SCR 1,000~3,000, 입院 SCR 10,000~25,000/일",
      minCoverage: "₩2,500만원",
      tips: ["마헤섬 의료 제한적", "심각 시 모리셔스 후송", "관광 인프라 양호"],
    },
    flights: [
      { airport: "세이셸 국제공항", airportCode: "SEZ", duration: "약 16시간 (경유)", airlines: "경유편 (두바이/아부다비 경유)" },
    ],
  },
  RW: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo, Nomad", note: "5~10GB" },
      localSim: { price: "RWF 2,000~5,000 (₩2,000~5,000)", carriers: "MTN, Airtel", note: "키갈리 공항 구매" },
      roaming: { price: "₩11,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "112", fire: "112", ambulance: "912", embassy: { name: "주르완다 대한민국대사관", phone: "+250-788-304-100" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 RWF 20,000~50,000, 입원 RWF 200,000~500,000/일",
      minCoverage: "₩3,000만원",
      tips: ["키갈리 사립병원 양호", "지방 의료 취약", "케냐 후송 경로"],
    },
    flights: [
      { airport: "키갈리 국제공항", airportCode: "KGL", duration: "약 18시간 (경유)", airlines: "경유편 (두바이/아디스아바바 경유)" },
    ],
  },
  UG: {
    comm: {
      esim: { price: "₩20,000~35,000", providers: "Airalo, Holafly", note: "3~10GB" },
      localSim: { price: "UGX 10,000~30,000 (₩4,000~12,000)", carriers: "MTN, Airtel, Africell", note: "캄팔라 공항·시내" },
      roaming: { price: "₩11,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "999", fire: "999", ambulance: "911", embassy: { name: "주우간다 대한민국대사관 (주케냐대사관 겸임)", phone: "+254-20-3748-256" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 UGX 100,000~300,000, 입원 UGX 1,000,000~2,000,000/일",
      minCoverage: "₩3,000만원",
      tips: ["캄팔라 의료 제한적", "케냐 나이로비 후송 대비", "말라리아 예방"],
    },
    flights: [
      { airport: "엔테베 국제공항", airportCode: "EBB", duration: "약 17시간 (경유)", airlines: "경유편 (두바이/아디스아바바 경유)" },
    ],
  },
  MZ: {
    comm: {
      esim: { price: "₩25,000~40,000", providers: "Airalo, Ubigi", note: "5~10GB" },
      localSim: { price: "MZN 100~300 (₩2,000~6,000)", carriers: "Vodacom, Movitel, TMcel", note: "마푸투 공항 구매" },
      roaming: { price: "₩13,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "119", fire: "198", ambulance: "117", embassy: { name: "주모잠비크 대한민국대사관", phone: "+258-21-492-216" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 MZN 2,000~5,000, 입원 MZN 20,000~50,000/일",
      minCoverage: "₩3,000만원",
      tips: ["마푸투 의료 취약", "남아공 후송 고려", "말라리아 고위험"],
    },
    flights: [
      { airport: "마푸투 국제공항", airportCode: "MPM", duration: "약 20시간 (경유)", airlines: "경유편 (두바이/요하네스버그 경유)" },
    ],
  },
  ZM: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo, Nomad", note: "5~10GB" },
      localSim: { price: "ZMW 50~150 (₩3,000~9,000)", carriers: "MTN, Airtel, Zamtel", note: "루사카 공항 구매" },
      roaming: { price: "₩11,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "991", fire: "993", ambulance: "992", embassy: { name: "주잠비아 대한민국대사관 (주짐바브웨대사관 겸임)", phone: "+263-4-745-801~2" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 ZMW 500~1,500, 입원 ZMW 5,000~15,000/일",
      minCoverage: "₩3,000만원",
      tips: ["루사카 의료 제한적", "남아공 후송 대비", "말라리아 예방"],
    },
    flights: [
      { airport: "케네스 카운다 국제공항", airportCode: "LUN", duration: "약 20시간 (경유)", airlines: "경유편 (두바이/요하네스버그 경유)" },
    ],
  },
  ZW: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo, Holafly", note: "5~10GB" },
      localSim: { price: "USD 5~15 (₩7,000~20,000)", carriers: "Econet, NetOne, Telecel", note: "하라레 공항, 달러 결제" },
      roaming: { price: "₩13,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "995", fire: "993", ambulance: "994", embassy: { name: "주짐바브웨 대한민국대사관", phone: "+263-4-745-801~2" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 USD 50~150, 입원 USD 500~1,500/일",
      minCoverage: "₩3,000만원",
      tips: ["하라레 의료 취약", "남아공 후송 필수", "경제 불안정"],
    },
    flights: [
      { airport: "로버트 무가베 국제공항", airportCode: "HRE", duration: "약 20시간 (경유)", airlines: "경유편 (두바이/요하네스버그 경유)" },
      { airport: "빅토리아폴스 공항", airportCode: "VFA", duration: "약 22시간 (경유)", airlines: "경유편 (요하네스버그 경유)" },
    ],
  },
  BW: {
    comm: {
      esim: { price: "₩28,000~45,000", providers: "Airalo, Ubigi", note: "5~15GB" },
      localSim: { price: "BWP 50~150 (₩5,000~15,000)", carriers: "Mascom, Orange, BTC", note: "가보로네 공항 구매" },
      roaming: { price: "₩11,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "999", fire: "998", ambulance: "997", embassy: { name: "주보츠와나 대한민국대사관 (주남아공대사관 겸임)", phone: "+27-12-460-2508" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 BWP 500~1,500, 입원 BWP 5,000~15,000/일",
      minCoverage: "₩2,500만원",
      tips: ["가보로네 의료 양호", "사파리 지역 취약", "남아공 후송 가능"],
    },
    flights: [
      { airport: "세레체 카마 국제공항", airportCode: "GBE", duration: "약 20시간 (경유)", airlines: "경유편 (요하네스버그/두바이 경유)" },
    ],
  },
  NA: {
    comm: {
      esim: { price: "₩30,000~48,000", providers: "Airalo, Nomad", note: "5~15GB" },
      localSim: { price: "NAD 50~150 (₩4,000~12,000)", carriers: "MTC, TN Mobile", note: "빈트후크 공항 구매" },
      roaming: { price: "₩11,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "10111", fire: "211111", ambulance: "211111", embassy: { name: "주나미비아 대한민국대사관 (주남아공대사관 겸임)", phone: "+27-12-460-2508" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 NAD 500~1,500, 입원 NAD 5,000~15,000/일",
      minCoverage: "₩2,500만원",
      tips: ["빈트후크 의료 양호", "사막 지역 고립", "남아공 후송 경로"],
    },
    flights: [
      { airport: "호세아 쿠타코 국제공항", airportCode: "WDH", duration: "약 20시간 (경유)", airlines: "경유편 (요하네스버그/두바이 경유)" },
    ],
  },
  SZ: {
    comm: {
      esim: { price: "₩25,000~40,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "SZL 50~150 (₩4,000~12,000)", carriers: "MTN, Eswatini Mobile", note: "음바바네 구매" },
      roaming: { price: "₩11,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "999", fire: "933", ambulance: "977", embassy: { name: "주에스와티니 대한민국대사관 (주남아공대사관 겸임)", phone: "+27-12-460-2508" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 SZL 300~1,000, 입원 SZL 3,000~10,000/일",
      minCoverage: "₩2,000만원",
      tips: ["의료 제한적", "남아공 인접 후송 용이", "HIV 고위험"],
    },
    flights: [
      { airport: "킹 므스와티 3세 국제공항", airportCode: "SHO", duration: "약 20시간 (경유)", airlines: "경유편 (요하네스버그 경유)" },
    ],
  },
  LS: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo", note: "3~10GB" },
      localSim: { price: "LSL 50~150 (₩4,000~12,000)", carriers: "Vodacom, Econet", note: "마세루 구매" },
      roaming: { price: "₩13,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "123", fire: "122", ambulance: "121", embassy: { name: "주레소토 대한민국대사관 (주남아공대사관 겸임)", phone: "+27-12-460-2508" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 LSL 200~800, 입원 LSL 2,000~8,000/일",
      minCoverage: "₩2,000만원",
      tips: ["의료 매우 취약", "남아공 후송 필수", "고산 지역 주의"],
    },
    flights: [
      { airport: "모쇼에쇼에 1세 국제공항", airportCode: "MSU", duration: "약 21시간 (경유)", airlines: "경유편 (요하네스버그 경유)" },
    ],
  },
  DZ: {
    comm: {
      esim: { price: "₩28,000~45,000", providers: "Airalo, Holafly", note: "5~10GB" },
      localSim: { price: "DZD 500~1,500 (₩5,000~15,000)", carriers: "Mobilis, Djezzy, Ooredoo", note: "알제 공항, 등록 복잡" },
      roaming: { price: "₩13,000/일", note: "북아프리카 요금" },
    },
    emergency: { police: "17", fire: "14", ambulance: "14", embassy: { name: "주알제리 대한민국대사관", phone: "+213-23-476-161" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "사립 진료 DZD 5,000~15,000, 입원 DZD 50,000~150,000/일",
      minCoverage: "₩3,000만원",
      tips: ["알제 사립병원 양호", "불어 소통", "보안 주의"],
    },
  },
  LY: {
    comm: {
      esim: { price: "₩30,000~50,000", providers: "Airalo (제한적)", note: "5~10GB, 불안정" },
      localSim: { price: "LYD 20~50 (₩5,000~13,000)", carriers: "Libyana, Al-Madar", note: "트리폴리, 등록 필수" },
      roaming: { price: "₩15,000/일", note: "북아프리카 요금, 제한적" },
    },
    emergency: { police: "1515", fire: "1515", ambulance: "1515", embassy: { name: "주리비아 대한민국대사관 (주이집트대사관 겸임)", phone: "+20-2-2795-2280" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 LYD 100~300, 입원 LYD 1,000~3,000/일",
      minCoverage: "₩5,000만원 (후송 필수)",
      tips: ["의료 체계 붕괴", "튀니지·이집트 긴급 후송", "여행 비권장"],
    },
  },
  AO: {
    comm: {
      esim: { price: "₩30,000~50,000", providers: "Airalo, Ubigi", note: "5~10GB" },
      localSim: { price: "AOA 2,000~5,000 (₩5,000~12,000)", carriers: "Unitel, Movicel", note: "루안다 공항 구매" },
      roaming: { price: "₩13,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "113", fire: "115", ambulance: "116", embassy: { name: "주앙골라 대한민국대사관", phone: "+244-222-443-463" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 AOA 15,000~50,000, 입원 AOA 150,000~500,000/일",
      minCoverage: "₩5,000만원",
      tips: ["루안다 사립병원 고가", "지방 의료 부재", "포르투갈어 소통"],
    },
    flights: [
      { airport: "콴자 국제공항", airportCode: "LAD", duration: "약 22시간 (경유)", airlines: "경유편 (두바이/이스탄불 경유)" },
    ],
  },
  CD: {
    comm: {
      esim: { price: "₩25,000~45,000", providers: "Airalo (제한적)", note: "5~10GB, 킨샤사 위주" },
      localSim: { price: "USD 5~15 (₩7,000~20,000)", carriers: "Vodacom, Airtel, Orange", note: "킨샤사 구매, 달러 결제" },
      roaming: { price: "₩15,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "112", fire: "118", ambulance: "113", embassy: { name: "주콩고민주공화국 대한민국대사관", phone: "+243-81-700-9367" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 USD 50~200, 입원 USD 500~2,000/일",
      minCoverage: "₩5,000만원 (후송 필수)",
      tips: ["의료 체계 붕괴", "킨샤사 제한적", "케냐·남아공 후송"],
    },
    flights: [
      { airport: "은질리 국제공항", airportCode: "FIH", duration: "약 22시간 (경유)", airlines: "경유편 (아디스아바바/이스탄불 경유)" },
    ],
  },
  CG: {
    comm: {
      esim: { price: "₩28,000~45,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "XAF 2,000~5,000 (₩4,500~11,000)", carriers: "MTN, Airtel", note: "브라자빌 구매" },
      roaming: { price: "₩13,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "242", embassy: { name: "주콩고공화국 대한민국대사관 (주가봉대사관 겸임)", phone: "+241-11-73-4760" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XAF 20,000~60,000, 입원 XAF 200,000~600,000/일",
      minCoverage: "₩3,000만원",
      tips: ["브라자빌 의료 취약", "불어 소통", "가봉 후송 경로"],
    },
    flights: [
      { airport: "마야마야 공항", airportCode: "BZV", duration: "약 22시간 (경유)", airlines: "경유편 (아디스아바바/파리 경유)" },
    ],
  },
  GA: {
    comm: {
      esim: { price: "₩30,000~48,000", providers: "Airalo, Ubigi", note: "5~10GB" },
      localSim: { price: "XAF 3,000~8,000 (₩7,000~18,000)", carriers: "Airtel, Moov", note: "리브르빌 공항 구매" },
      roaming: { price: "₩13,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "1730", fire: "18", ambulance: "1300", embassy: { name: "주가봉 대한민국대사관", phone: "+241-11-73-4760" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XAF 25,000~70,000, 입원 XAF 250,000~700,000/일",
      minCoverage: "₩3,000만원",
      tips: ["리브르빌 프랑스계 병원 제한적", "불어 소통", "고가 물가"],
    },
    flights: [
      { airport: "리브르빌 레옹 음바 국제공항", airportCode: "LBV", duration: "약 21시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  TD: {
    comm: {
      esim: { price: "₩25,000~45,000", providers: "Airalo (매우 제한적)", note: "3~5GB, 불안정" },
      localSim: { price: "XAF 2,000~5,000 (₩4,500~11,000)", carriers: "Airtel, Tigo", note: "은자메나 구매" },
      roaming: { price: "₩15,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "17", fire: "18", ambulance: "2251-4242", embassy: { name: "주차드 대한민국대사관 (주카메룬대사관 겸임)", phone: "+237-222-202-744" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XAF 15,000~50,000, 입원 XAF 150,000~500,000/일",
      minCoverage: "₩5,000만원 (후송 필수)",
      tips: ["의료 체계 붕괴", "카메룬·케냐 후송", "여행 비권장"],
    },
    flights: [
      { airport: "은자메나 하산 주메이 국제공항", airportCode: "NDJ", duration: "약 22시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  CF: {
    comm: {
      esim: { price: "₩30,000~50,000", providers: "제한적", note: "통신망 매우 불안정" },
      localSim: { price: "XAF 2,000~5,000 (₩4,500~11,000)", carriers: "Orange, Moov", note: "방기 구매 어려움" },
      roaming: { price: "₩15,000/일", note: "중부아프리카 요금, 불안정" },
    },
    emergency: { police: "117", fire: "118", ambulance: "1220", embassy: { name: "주중앙아프리카공화국 대한민국대사관 (주카메룬대사관 겸임)", phone: "+237-222-202-744" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XAF 20,000~80,000, 입원 불가",
      minCoverage: "₩5,000만원 (후송 필수)",
      tips: ["의료 체계 붕괴", "즉시 후송 필요", "여행 금지"],
    },
    flights: [
      { airport: "방기 음포코 국제공항", airportCode: "BGF", duration: "약 24시간 (경유)", airlines: "경유편 (파리/아디스아바바 경유)" },
    ],
  },
  GQ: {
    comm: {
      esim: { price: "₩30,000~50,000", providers: "Airalo (제한적)", note: "5~10GB" },
      localSim: { price: "XAF 5,000~15,000 (₩11,000~33,000)", carriers: "Orange, Muni", note: "말라보 공항" },
      roaming: { price: "₩13,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "114", fire: "115", ambulance: "116", embassy: { name: "주적도기니 대한민국대사관 (주가봉대사관 겸임)", phone: "+241-11-73-4760" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XAF 30,000~100,000, 입원 XAF 300,000~1,000,000/일",
      minCoverage: "₩3,000만원",
      tips: ["말라보 의료 취약", "스페인어 소통", "가봉 후송"],
    },
    flights: [
      { airport: "말라보 국제공항", airportCode: "SSG", duration: "약 23시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  BF: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "Orange, Moov, Telecel", note: "와가두구 구매" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "17", fire: "18", ambulance: "3535", embassy: { name: "주부르키나파소 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 15,000~50,000, 입원 XOF 100,000~300,000/일",
      minCoverage: "₩3,000만원",
      tips: ["와가두구 의료 취약", "보안 위험", "세네갈 후송"],
    },
    flights: [
      { airport: "와가두구 공항", airportCode: "OUA", duration: "약 21시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  ML: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo", note: "5~10GB, 바마코 위주" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "Orange, Malitel", note: "바마코 구매" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "17", fire: "18", ambulance: "15", embassy: { name: "주말리 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 20,000~60,000, 입원 XOF 150,000~500,000/일",
      minCoverage: "₩3,000만원",
      tips: ["바마코 의료 취약", "북부 여행 금지", "세네갈 후송"],
    },
    flights: [
      { airport: "바마코 세누 국제공항", airportCode: "BKO", duration: "약 21시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  NE: {
    comm: {
      esim: { price: "₩23,000~40,000", providers: "Airalo", note: "3~10GB" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "Niger Telecom, Airtel, Moov", note: "니아메 구매" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "17", fire: "18", ambulance: "15", embassy: { name: "주니제르 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 15,000~50,000, 입원 XOF 100,000~400,000/일",
      minCoverage: "₩3,000만원",
      tips: ["니아메 의료 매우 취약", "보안 위험", "불어 소통"],
    },
    flights: [
      { airport: "디오리 아마니 국제공항", airportCode: "NIM", duration: "약 22시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  TG: {
    comm: {
      esim: { price: "₩20,000~35,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "Togocom, Moov", note: "로메 공항 구매" },
      roaming: { price: "₩11,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "8200", embassy: { name: "주토고 대한민국대사관 (주가나대사관 겸임)", phone: "+233-302-776-157" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 15,000~40,000, 입원 XOF 100,000~300,000/일",
      minCoverage: "₩2,500만원",
      tips: ["로메 의료 제한적", "불어 소통", "가나 후송 가능"],
    },
    flights: [
      { airport: "로메 녹치에 토크앙 공항", airportCode: "LFW", duration: "약 21시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  BJ: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "MTN, Moov", note: "코토누 공항 구매" },
      roaming: { price: "₩11,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "112", embassy: { name: "주베냉 대한민국대사관 (주코트디부아르대사관 겸임)", phone: "+225-27-22-473-576" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 15,000~50,000, 입원 XOF 120,000~350,000/일",
      minCoverage: "₩2,500만원",
      tips: ["코토누 의료 제한적", "불어 소통", "말라리아 예방"],
    },
    flights: [
      { airport: "코토누 카제후운 공항", airportCode: "COO", duration: "약 21시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  GN: {
    comm: {
      esim: { price: "₩25,000~40,000", providers: "Airalo", note: "3~10GB" },
      localSim: { price: "GNF 50,000~150,000 (₩7,000~20,000)", carriers: "Orange, MTN, Cellcom", note: "코나크리 구매" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "442-020", embassy: { name: "주기니 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 GNF 200,000~600,000, 입원 GNF 2,000,000~6,000,000/일",
      minCoverage: "₩3,000만원",
      tips: ["코나크리 의료 매우 취약", "에볼라 위험 지역", "세네갈 후송"],
    },
    flights: [
      { airport: "코나크리 국제공항", airportCode: "CKY", duration: "약 22시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  SL: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo", note: "3~10GB" },
      localSim: { price: "SLL 50,000~150,000 (₩3,000~9,000)", carriers: "Orange, Africell, Qcell", note: "프리타운 공항" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주시에라리온 대한민국대사관 (주가나대사관 겸임)", phone: "+233-302-776-157" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 SLL 300,000~1,000,000, 입원 SLL 3,000,000~10,000,000/일",
      minCoverage: "₩3,000만원",
      tips: ["프리타운 의료 매우 취약", "에볼라 후유증", "가나 후송"],
    },
    flights: [
      { airport: "프리타운 룽기 국제공항", airportCode: "FNA", duration: "약 22시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  LR: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo", note: "3~10GB" },
      localSim: { price: "USD 5~15 (₩7,000~20,000)", carriers: "Lonestar, Orange, Cellcom", note: "몬로비아 구매" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주라이베리아 대한민국대사관 (주가나대사관 겸임)", phone: "+233-302-776-157" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 USD 50~200, 입원 USD 500~2,000/일",
      minCoverage: "₩3,000만원",
      tips: ["몬로비아 의료 붕괴", "에볼라 위험", "가나 후송 필수"],
    },
    flights: [
      { airport: "로버츠 국제공항", airportCode: "ROB", duration: "약 23시간 (경유)", airlines: "경유편 (아크라/파리 경유)" },
    ],
  },
  GM: {
    comm: {
      esim: { price: "₩20,000~35,000", providers: "Airalo", note: "3~10GB" },
      localSim: { price: "GMD 100~300 (₩2,000~6,000)", carriers: "Africell, Gamcel, Qcell", note: "반줄 공항 구매" },
      roaming: { price: "₩11,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "116", embassy: { name: "주감비아 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 GMD 500~1,500, 입원 GMD 5,000~15,000/일",
      minCoverage: "₩2,000만원",
      tips: ["반줄 의료 제한적", "세네갈 인접 후송", "말라리아 예방"],
    },
    flights: [
      { airport: "반줄 국제공항", airportCode: "BJL", duration: "약 21시간 (경유)", airlines: "경유편 (이스탄불/파리 경유)" },
    ],
  },
  GW: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo (제한적)", note: "3~5GB, 불안정" },
      localSim: { price: "XOF 2,000~5,000 (₩4,500~11,000)", carriers: "Orange, MTN", note: "비사우 구매" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "119", embassy: { name: "주기니비사우 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 XOF 20,000~70,000, 입원 XOF 150,000~500,000/일",
      minCoverage: "₩3,000만원",
      tips: ["비사우 의료 붕괴", "세네갈 후송 필수", "포르투갈어"],
    },
    flights: [
      { airport: "오스발두 비에이라 국제공항", airportCode: "OXB", duration: "약 23시간 (경유)", airlines: "경유편 (파리/다카르 경유)" },
    ],
  },
  CV: {
    comm: {
      esim: { price: "₩30,000~48,000", providers: "Airalo, Ubigi", note: "5~15GB" },
      localSim: { price: "CVE 500~1,500 (₩6,000~18,000)", carriers: "CVMovel, Unitel T+", note: "프라이아 공항 구매" },
      roaming: { price: "₩11,000/일", note: "대서양 요금" },
    },
    emergency: { police: "132", fire: "131", ambulance: "130", embassy: { name: "주카보베르데 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 CVE 2,000~6,000, 입원 CVE 20,000~60,000/일",
      minCoverage: "₩2,000만원",
      tips: ["프라이아 의료 제한적", "포르투갈어", "관광 인프라 양호"],
    },
    flights: [
      { airport: "넬슨 만델라 국제공항", airportCode: "SID", duration: "약 22시간 (경유)", airlines: "경유편 (리스본/파리 경유)" },
    ],
  },
  ST: {
    comm: {
      esim: { price: "₩30,000~50,000", providers: "Airalo (제한적)", note: "3~5GB, 고가" },
      localSim: { price: "STN 50~150 (₩3,000~9,000)", carriers: "CST, Unitel", note: "상투메 공항" },
      roaming: { price: "₩15,000/일", note: "중부아프리카 요금" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주상투메프린시페 대한민국대사관 (주가봉대사관 겸임)", phone: "+241-11-73-4760" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 STN 200~600, 입원 STN 2,000~6,000/일",
      minCoverage: "₩2,500만원",
      tips: ["의료 매우 취약", "가봉 후송", "포르투갈어"],
    },
    flights: [
      { airport: "상투메 국제공항", airportCode: "TMS", duration: "약 24시간 (경유)", airlines: "경유편 (리스본/아크라 경유)" },
    ],
  },
  KM: {
    comm: {
      esim: { price: "₩28,000~45,000", providers: "Airalo (제한적)", note: "3~5GB" },
      localSim: { price: "KMF 2,000~6,000 (₩6,000~18,000)", carriers: "Comores Telecom", note: "모로니 구매" },
      roaming: { price: "₩15,000/일", note: "인도양 요금" },
    },
    emergency: { police: "17", fire: "18", ambulance: "772-03-73", embassy: { name: "주코모로 대한민국대사관 (주모리셔스대사관 겸임)", phone: "+230-210-3116" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 KMF 10,000~30,000, 입원 KMF 100,000~300,000/일",
      minCoverage: "₩2,500만원",
      tips: ["의료 매우 취약", "모리셔스 후송", "불어·아랍어"],
    },
    flights: [
      { airport: "프린스 사이드 이브라힘 국제공항", airportCode: "HAH", duration: "약 22시간 (경유)", airlines: "경유편 (아디스아바바/나이로비 경유)" },
    ],
  },
  DJ: {
    comm: {
      esim: { price: "₩28,000~45,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "DJF 2,000~6,000 (₩15,000~45,000)", carriers: "Djibouti Telecom", note: "지부티시티 공항" },
      roaming: { price: "₩13,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "17", fire: "18", ambulance: "19", embassy: { name: "주지부티 대한민국대사관 (주에티오피아대사관 겸임)", phone: "+251-11-661-2978" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 DJF 5,000~15,000, 입원 DJF 50,000~150,000/일",
      minCoverage: "₩2,500만원",
      tips: ["지부티시티 의료 제한적", "불어·아랍어", "에티오피아 후송"],
    },
    flights: [
      { airport: "지부티 암불리 국제공항", airportCode: "JIB", duration: "약 16시간 (경유)", airlines: "경유편 (아디스아바바/두바이 경유)" },
    ],
  },
  ER: {
    comm: {
      esim: { price: "₩30,000~50,000", providers: "제한적", note: "통신 매우 제한" },
      localSim: { price: "ERN 100~300 (₩9,000~27,000)", carriers: "EriTel", note: "아스마라, 등록 복잡" },
      roaming: { price: "₩15,000/일", note: "동아프리카 요금, 불안정" },
    },
    emergency: { police: "113", fire: "114", ambulance: "116", embassy: { name: "주에리트레아 대한민국대사관 (주에티오피아대사관 겸임)", phone: "+251-11-661-2978" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 ERN 500~1,500, 입원 ERN 5,000~15,000/일",
      minCoverage: "₩3,000만원",
      tips: ["의료 매우 취약", "통신 제한", "여행 비권장"],
    },
    flights: [
      { airport: "아스마라 국제공항", airportCode: "ASM", duration: "약 18시간 (경유)", airlines: "경유편 (두바이/카이로 경유)" },
    ],
  },
  SO: {
    comm: {
      esim: { price: "₩25,000~45,000", providers: "Airalo (제한적)", note: "3~5GB, 불안정" },
      localSim: { price: "USD 5~20 (₩7,000~27,000)", carriers: "Hormuud, Golis, Somtel", note: "모가디슈 구매" },
      roaming: { price: "₩15,000/일", note: "동아프리카 요금, 매우 불안정" },
    },
    emergency: { police: "888", fire: "555", ambulance: "999", embassy: { name: "주소말리아 대한민국대사관 (주케냐대사관 겸임)", phone: "+254-20-3748-256" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 USD 50~200, 입원 USD 500~2,000/일",
      minCoverage: "₩5,000만원 (후송 필수)",
      tips: ["의료 체계 붕괴", "케냐 긴급 후송", "여행 금지"],
    },
    flights: [
      { airport: "아덴 압둘레 오스만 국제공항", airportCode: "MGQ", duration: "약 18시간 (경유)", airlines: "경유편 (두바이/나이로비 경유)" },
    ],
  },
  SS: {
    comm: {
      esim: { price: "₩28,000~48,000", providers: "Airalo (매우 제한적)", note: "3~5GB" },
      localSim: { price: "SSP 500~1,500 (₩5,000~15,000)", carriers: "MTN, Zain", note: "주바 구매 어려움" },
      roaming: { price: "₩15,000/일", note: "동아프리카 요금, 불안정" },
    },
    emergency: { police: "777", fire: "999", ambulance: "999", embassy: { name: "주남수단 대한민국대사관 (주에티오피아대사관 겸임)", phone: "+251-11-661-2978" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 USD 100~300, 입원 USD 1,000~3,000/일",
      minCoverage: "₩5,000만원 (후송 필수)",
      tips: ["의료 체계 붕괴", "우간다·케냐 후송", "여행 금지"],
    },
    flights: [
      { airport: "주바 국제공항", airportCode: "JUB", duration: "약 20시간 (경유)", airlines: "경유편 (아디스아바바/나이로비 경유)" },
    ],
  },
  SD: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo (제한적)", note: "5~10GB, 하르툼 위주" },
      localSim: { price: "SDG 200~600 (₩5,000~15,000)", carriers: "Zain, MTN, Sudani", note: "하르툼 공항" },
      roaming: { price: "₩13,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "999", fire: "998", ambulance: "997", embassy: { name: "주수단 대한민국대사관 (주이집트대사관 겸임)", phone: "+20-2-2795-2280" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 SDG 5,000~15,000, 입원 SDG 50,000~150,000/일",
      minCoverage: "₩3,000만원",
      tips: ["하르툼 의료 취약", "분쟁 지역", "이집트 후송"],
    },
    flights: [
      { airport: "하르툼 국제공항", airportCode: "KRT", duration: "약 16시간 (경유)", airlines: "경유편 (두바이/카이로 경유)" },
    ],
  },
  MW: {
    comm: {
      esim: { price: "₩22,000~38,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "MWK 2,000~6,000 (₩2,000~6,000)", carriers: "Airtel, TNM", note: "릴롱궤 공항 구매" },
      roaming: { price: "₩11,000/일", note: "남부아프리카 요금" },
    },
    emergency: { police: "997", fire: "998", ambulance: "998", embassy: { name: "주말라위 대한민국대사관 (주짐바브웨대사관 겸임)", phone: "+263-4-745-801~2" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 MWK 20,000~60,000, 입원 MWK 200,000~600,000/일",
      minCoverage: "₩2,500만원",
      tips: ["릴롱궤 의료 취약", "말라리아 고위험", "남아공 후송"],
    },
    flights: [
      { airport: "카무주 국제공항", airportCode: "LLW", duration: "약 22시간 (경유)", airlines: "경유편 (아디스아바바/요하네스버그 경유)" },
    ],
  },
  BI: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo (제한적)", note: "3~5GB" },
      localSim: { price: "BIF 10,000~30,000 (₩5,000~15,000)", carriers: "Econet, Lumitel, Onatel", note: "부줌부라 구매" },
      roaming: { price: "₩13,000/일", note: "동아프리카 요금" },
    },
    emergency: { police: "112", fire: "118", ambulance: "112", embassy: { name: "주부룬디 대한민국대사관 (주르완다대사관 겸임)", phone: "+250-788-304-100" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 BIF 50,000~150,000, 입원 BIF 500,000~1,500,000/일",
      minCoverage: "₩3,000만원",
      tips: ["부줌부라 의료 매우 취약", "케냐 후송", "말라리아"],
    },
    flights: [
      { airport: "부줌부라 국제공항", airportCode: "BJM", duration: "약 22시간 (경유)", airlines: "경유편 (아디스아바바/나이로비 경유)" },
    ],
  },
  MR: {
    comm: {
      esim: { price: "₩25,000~42,000", providers: "Airalo", note: "5~10GB" },
      localSim: { price: "MRU 100~300 (₩3,500~10,000)", carriers: "Mauritel, Mattel, Chinguitel", note: "누악쇼트 구매" },
      roaming: { price: "₩13,000/일", note: "서아프리카 요금" },
    },
    emergency: { police: "117", fire: "118", ambulance: "101", embassy: { name: "주모리타니 대한민국대사관 (주세네갈대사관 겸임)", phone: "+221-33-864-5127" } },
    insurance: {
      level: "low",
      avgMedicalCost: "사립 진료 MRU 2,000~6,000, 입원 MRU 20,000~60,000/일",
      minCoverage: "₩2,500만원",
      tips: ["누악쇼트 의료 취약", "불어·아랍어", "세네갈 후송"],
    },
  },
  // === 오세아니아 ===
  AU: {
    comm: {
      esim: { price: "15,000~35,000원", providers: "Airalo, Holafly, Ubigi", note: "5~20GB, 7~30일 플랜" },
      localSim: { price: "25~50 AUD", carriers: "Telstra, Optus, Vodafone", note: "공항/편의점에서 구매 가능, 여권 필요" },
      roaming: { price: "8,800~13,200원/일", note: "통신3사 데이터무제한 로밍" },
    },
    emergency: { police: "000", fire: "000", ambulance: "000", embassy: { name: "주호주대한민국대사관", phone: "+61-2-6270-4100" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 방문 AUD 500~1,500, 입원 1일 AUD 2,000~5,000",
      minCoverage: "5,000만원 이상 (의료비 매우 고액)",
      tips: ["의료비 극히 고액, 충분한 보장 필수", "구급차 이용 시 AUD 1,000 이상 청구", "처방약도 고가이므로 보험 확인"],
    },
    flights: [
      { airport: "시드니 킹스포드 스미스 공항", airportCode: "SYD", duration: "약 10시간 30분", airlines: "대한항공, 아시아나, 콴타스" },
      { airport: "멜버른 툴라마린 공항", airportCode: "MEL", duration: "약 10시간 30분", airlines: "대한항공, 콴타스" },
      { airport: "브리즈번 공항", airportCode: "BNE", duration: "약 9시간 30분", airlines: "대한항공" },
    ],
  },
  NZ: {
    comm: {
      esim: { price: "12,000~30,000원", providers: "Airalo, Holafly, Flexiroam", note: "3~15GB, 7~30일 플랜" },
      localSim: { price: "20~40 NZD", carriers: "Spark, Vodafone, 2degrees", note: "공항/편의점, 여권 지참" },
      roaming: { price: "8,800~13,200원/일", note: "데이터무제한 로밍" },
    },
    emergency: { police: "111", fire: "111", ambulance: "111", embassy: { name: "주뉴질랜드대한민국대사관", phone: "+64-4-473-9073" } },
    insurance: {
      level: "high",
      avgMedicalCost: "응급실 NZD 300~1,000, 입원 1일 NZD 1,500~4,000",
      minCoverage: "5,000만원 이상",
      tips: ["의료비 고액, ACC 제도로 사고 부상 일부 보장", "치과/처방약은 본인 부담 큼", "산악/액티비티 사고 보장 확인"],
    },
    flights: [
      { airport: "오클랜드 공항", airportCode: "AKL", duration: "약 11시간 30분", airlines: "대한항공, 뉴질랜드항공" },
      { airport: "크라이스트처치 공항", airportCode: "CHC", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  FJ: {
    comm: {
      esim: { price: "15,000~25,000원", providers: "Airalo, Holafly", note: "3~10GB, 7~15일 플랜" },
      localSim: { price: "20~50 FJD", carriers: "Vodafone, Digicel", note: "공항/나디타운, 여권 필요" },
      roaming: { price: "13,200~19,800원/일", note: "일부 통신사만 지원" },
    },
    emergency: { police: "917", fire: "911", ambulance: "911", embassy: { name: "주피지대한민국대사관", phone: "+679-330-0977" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "진료 FJD 100~300, 입원 1일 FJD 500~1,500",
      minCoverage: "3,000만원 이상",
      tips: ["수바·나디 외 의료시설 제한적", "중증 시 호주/뉴질랜드 이송 고려", "해양 액티비티 사고 보장 확인"],
    },
    flights: [
      { airport: "나디 국제공항", airportCode: "NAN", duration: "약 11시간 (경유)", airlines: "경유편" },
    ],
  },
  PG: {
    comm: {
      esim: { price: "20,000~35,000원", providers: "Airalo", note: "1~5GB, 커버리지 제한적" },
      localSim: { price: "20~60 PGK", carriers: "Digicel, bmobile", note: "포트모르즈비 공항/시내, 여권 필요" },
      roaming: { price: "19,800~29,700원/일", note: "일부 통신사만 지원, 안정성 낮음" },
    },
    emergency: { police: "000", fire: "110", ambulance: "111", embassy: { name: "주파푸아뉴기니대한민국대사관", phone: "+675-320-1388" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 PGK 200~500, 입원 1일 PGK 1,000~3,000",
      minCoverage: "5,000만원 이상 (긴급후송 포함)",
      tips: ["의료시설 매우 열악, 중증 시 호주 후송 필수", "말라리아 등 감염병 위험", "긴급후송비용 보장 필수"],
    },
    flights: [
      { airport: "잭슨스 국제공항", airportCode: "POM", duration: "약 12시간 (경유)", airlines: "경유편" },
    ],
  },
  WS: {
    comm: {
      esim: { price: "18,000~28,000원", providers: "Airalo", note: "3~7GB, 7~15일" },
      localSim: { price: "20~40 WST", carriers: "Digicel, Bluesky", note: "아피아 공항/시내" },
      roaming: { price: "13,200~19,800원/일", note: "제한적 지원" },
    },
    emergency: { police: "995", fire: "994", ambulance: "996", embassy: { name: "주뉴질랜드대한민국대사관 (겸임)", phone: "+64-4-473-9073" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 WST 100~300, 입원 1일 WST 500~1,200",
      minCoverage: "3,000만원 이상",
      tips: ["의료시설 기초적, 중증 시 뉴질랜드 이송", "해양 스포츠 사고 빈번", "긴급후송비 보장 확인"],
    },
    flights: [
      { airport: "파레올로 국제공항", airportCode: "APW", duration: "약 16시간 (경유)", airlines: "경유편" },
    ],
  },
  TO: {
    comm: {
      esim: { price: "18,000~30,000원", providers: "Airalo", note: "3~7GB, 7~15일" },
      localSim: { price: "20~50 TOP", carriers: "Digicel, TCC", note: "누쿠알로파 공항/시내" },
      roaming: { price: "13,200~19,800원/일", note: "제한적" },
    },
    emergency: { police: "922", fire: "999", ambulance: "933", embassy: { name: "주뉴질랜드대한민국대사관 (겸임)", phone: "+64-4-473-9073" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 TOP 100~300, 입원 1일 TOP 500~1,500",
      minCoverage: "3,000만원 이상",
      tips: ["의료 인프라 제한적", "중증 질환 시 뉴질랜드/호주 이송", "긴급후송비 필수 확인"],
    },
    flights: [
      { airport: "푸아아모투 국제공항", airportCode: "TBU", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  VU: {
    comm: {
      esim: { price: "18,000~28,000원", providers: "Airalo", note: "3~7GB, 7~15일" },
      localSim: { price: "1,000~3,000 VUV", carriers: "Digicel, Vodafone", note: "포트빌라 공항/시내" },
      roaming: { price: "13,200~19,800원/일", note: "제한적" },
    },
    emergency: { police: "112", fire: "112", ambulance: "112", embassy: { name: "주호주대한민국대사관 (겸임)", phone: "+61-2-6270-4100" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 VUV 5,000~15,000, 입원 1일 VUV 30,000~80,000",
      minCoverage: "3,000만원 이상",
      tips: ["의료시설 기초적", "중증 시 호주/뉴칼레도니아 이송", "해양 액티비티 사고 주의"],
    },
    flights: [
      { airport: "포트빌라 바우어필드 공항", airportCode: "VLI", duration: "약 13시간 (경유)", airlines: "경유편" },
    ],
  },
  SB: {
    comm: {
      esim: { price: "20,000~35,000원", providers: "Airalo", note: "1~5GB, 커버리지 제한적" },
      localSim: { price: "50~100 SBD", carriers: "Our Telekom, bmobile", note: "호니아라 공항/시내" },
      roaming: { price: "19,800~29,700원/일", note: "제한적" },
    },
    emergency: { police: "999", fire: "999", ambulance: "999", embassy: { name: "주호주대한민국대사관 (겸임)", phone: "+61-2-6270-4100" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 SBD 200~600, 입원 1일 SBD 1,000~3,000",
      minCoverage: "5,000만원 이상 (후송 포함)",
      tips: ["의료 인프라 매우 열악", "말라리아 등 감염병 위험", "긴급 시 호주 이송 필수"],
    },
    flights: [
      { airport: "호니아라 국제공항", airportCode: "HIR", duration: "약 14시간 (경유)", airlines: "경유편" },
    ],
  },
  PW: {
    comm: {
      esim: { price: "20,000~35,000원", providers: "Airalo", note: "3~7GB, 7~15일" },
      localSim: { price: "$15~40", carriers: "PNCC, Palau Mobile", note: "코로르 공항/시내, USD 사용" },
      roaming: { price: "13,200~19,800원/일", note: "제한적" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주미크로네시아대한민국대사관 (겸임)", phone: "+691-320-2777" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 $100~300, 입원 1일 $500~1,500",
      minCoverage: "3,000만원 이상",
      tips: ["종합병원 없음, 중증 시 필리핀/괌 이송", "다이빙 사고 빈번, 전문 보험 고려", "긴급후송비 보장 필수"],
    },
    flights: [
      { airport: "팔라우 국제공항", airportCode: "ROR", duration: "약 4시간 30분", airlines: "대한항공, 티웨이항공" },
    ],
  },
  FM: {
    comm: {
      esim: { price: "20,000~35,000원", providers: "Airalo", note: "3~7GB, 일부 섬만 지원" },
      localSim: { price: "$15~35", carriers: "FSM Telecom", note: "포느페이/축 공항, USD 사용" },
      roaming: { price: "19,800~29,700원/일", note: "제한적" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주미크로네시아대한민국대사관", phone: "+691-320-2777" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 $80~250, 입원 1일 $400~1,200",
      minCoverage: "3,000만원 이상",
      tips: ["의료시설 제한적", "중증 시 괌/필리핀 이송", "섬 간 이동 어려움, 긴급후송 보장 필수"],
    },
    flights: [
      { airport: "추크 국제공항", airportCode: "TKK", duration: "약 7시간 (경유)", airlines: "경유편" },
      { airport: "폰페이 국제공항", airportCode: "PNI", duration: "약 8시간 (경유)", airlines: "경유편" },
    ],
  },
  MH: {
    comm: {
      esim: { price: "20,000~35,000원", providers: "Airalo", note: "3~7GB, 마주로 중심" },
      localSim: { price: "$20~40", carriers: "NTA", note: "마주로 공항, USD 사용" },
      roaming: { price: "19,800~29,700원/일", note: "제한적" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주미크로네시아대한민국대사관 (겸임)", phone: "+691-320-2777" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 $100~300, 입원 1일 $500~1,500",
      minCoverage: "3,000만원 이상",
      tips: ["의료 인프라 매우 제한적", "중증 시 하와이/필리핀 이송", "긴급후송비 필수"],
    },
    flights: [
      { airport: "마주로 마샬 아일랜드 국제공항", airportCode: "MAJ", duration: "약 10시간 (경유)", airlines: "경유편" },
    ],
  },
  KI: {
    comm: {
      esim: { price: "25,000~40,000원", providers: "Airalo", note: "1~3GB, 타라와만 지원" },
      localSim: { price: "$20~50 AUD", carriers: "Kiribati Telecom", note: "타라와, AUD 통용" },
      roaming: { price: "29,700~39,600원/일", note: "거의 미지원" },
    },
    emergency: { police: "999", fire: "998", ambulance: "994", embassy: { name: "주호주대한민국대사관 (겸임)", phone: "+61-2-6270-4100" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 AUD 50~200, 입원 1일 AUD 300~1,000",
      minCoverage: "5,000만원 이상 (후송 포함)",
      tips: ["의료 인프라 극히 열악", "중증 시 피지/호주 이송", "긴급후송비 보장 필수"],
    },
    flights: [
      { airport: "본리키 국제공항", airportCode: "TRW", duration: "약 16시간 (경유)", airlines: "경유편" },
    ],
  },
  NR: {
    comm: {
      esim: { price: "30,000~45,000원", providers: "일부 제공", note: "1~3GB, 제한적" },
      localSim: { price: "$25~60 AUD", carriers: "Digicel", note: "야렌, AUD 통용" },
      roaming: { price: "29,700~39,600원/일", note: "거의 미지원" },
    },
    emergency: { police: "110", fire: "119", ambulance: "111", embassy: { name: "주호주대한민국대사관 (겸임)", phone: "+61-2-6270-4100" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 AUD 80~250, 입원 1일 AUD 500~1,500",
      minCoverage: "5,000만원 이상 (후송 포함)",
      tips: ["의료 인프라 극히 제한적", "중증 시 호주 이송 필수", "긴급후송비 보장 필수"],
    },
    flights: [
      { airport: "나우루 국제공항", airportCode: "INU", duration: "약 15시간 (경유)", airlines: "경유편" },
    ],
  },
  TV: {
    comm: {
      esim: { price: "30,000~45,000원", providers: "거의 없음", note: "제공 매우 제한적" },
      localSim: { price: "$20~50 AUD", carriers: "TTC", note: "푸나푸티, AUD 통용" },
      roaming: { price: "39,600원/일", note: "거의 미지원" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주피지대한민국대사관 (겸임)", phone: "+679-330-0977" } },
    insurance: {
      level: "low",
      avgMedicalCost: "진료 AUD 50~200, 입원 1일 AUD 400~1,200",
      minCoverage: "5,000만원 이상 (후송 포함)",
      tips: ["의료 인프라 극히 열악", "중증 시 피지/호주 이송", "긴급후송비 보장 필수"],
    },
    flights: [
      { airport: "푸나푸티 국제공항", airportCode: "FUN", duration: "약 18시간 (경유)", airlines: "경유편" },
    ],
  },
  NC: {
    comm: {
      esim: { price: "15,000~30,000원", providers: "Airalo, Holafly", note: "5~15GB, 7~30일" },
      localSim: { price: "2,500~5,000 XPF", carriers: "OPT, Mobilis", note: "누메아 공항/시내" },
      roaming: { price: "13,200~19,800원/일", note: "일부 통신사 지원" },
    },
    emergency: { police: "17", fire: "18", ambulance: "15", embassy: { name: "주호주대한민국대사관 (겸임)", phone: "+61-2-6270-4100" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "진료 XPF 5,000~15,000, 입원 1일 XPF 30,000~80,000",
      minCoverage: "3,000만원 이상",
      tips: ["프랑스령, 의료 수준 양호하나 고가", "본섬 외 의료시설 제한적", "해양 액티비티 사고 보장 확인"],
    },
  },
  PF: {
    comm: {
      esim: { price: "15,000~35,000원", providers: "Airalo, Holafly", note: "5~15GB, 7~30일" },
      localSim: { price: "3,000~6,000 XPF", carriers: "Vini, Vodafone", note: "파페에테 공항/시내" },
      roaming: { price: "13,200~19,800원/일", note: "일부 통신사 지원" },
    },
    emergency: { police: "17", fire: "18", ambulance: "15", embassy: { name: "주호주대한민국대사관 (겸임)", phone: "+61-2-6270-4100" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "진료 XPF 6,000~18,000, 입원 1일 XPF 40,000~100,000",
      minCoverage: "3,000만원 이상",
      tips: ["프랑스령, 의료비 고가", "외곽 섬 의료시설 제한적", "수상 액티비티 사고 주의"],
    },
  },
  GU: {
    comm: {
      esim: { price: "12,000~28,000원", providers: "Airalo, Holafly, Ubigi", note: "5~15GB, 7~30일" },
      localSim: { price: "$20~45", carriers: "GTA, IT&E, Docomo Pacific", note: "공항/투몬, USD 사용" },
      roaming: { price: "8,800~13,200원/일", note: "미국 로밍과 동일" },
    },
    emergency: { police: "911", fire: "911", ambulance: "911", embassy: { name: "주미크로네시아대한민국대사관 (겸임)", phone: "+691-320-2777" } },
    insurance: {
      level: "medium",
      avgMedicalCost: "응급실 $300~1,200, 입원 1일 $1,500~4,000",
      minCoverage: "3,000만원 이상",
      tips: ["미국령, 의료비 고가", "종합병원 있으나 중증 시 하와이 이송", "의료보험 확인 필수"],
    },
  },
};
