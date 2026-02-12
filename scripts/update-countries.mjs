/**
 * 전체 국가 JSON에 quickInfo, passportValidity, timeline, alerts, checklist 일괄 추가
 * 실행: node scripts/update-countries.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = join(import.meta.dirname, "../src/data/countries");

// 국가별 상세 데이터 매핑
const COUNTRY_DATA = {
  // === 아시아 ===
  JP: {
    quickInfo: { timeDiff: "없음", voltage: "110V (돼지코 필수)", currency: "JPY (엔)", flight: "약 2시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "체류 예정 기간보다 유효기간이 더 남아있는지 확인하세요." },
      { dDay: "D-3", title: "Visit Japan Web 등록", description: "검역, 입국심사, 세관신고를 한 번에 등록하세요.", actionUrl: "https://vjw-lp.digital.go.jp/", actionLabel: "등록하기" },
      { dDay: "입국 당일", title: "QR 코드 준비", description: "Visit Japan Web에서 발급받은 QR 코드를 스크린샷으로 저장하세요." },
    ],
    alerts: ["금제품 반입 주의 (육류 가공품 등)", "110V 어댑터 필수 지참"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  CN: {
    quickInfo: { timeDiff: "-1시간", voltage: "220V (한국과 동일)", currency: "CNY (위안)", flight: "약 2시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-30", title: "비자 신청", description: "주한중국대사관에서 관광비자(L비자)를 신청하세요." },
      { dDay: "D-7", title: "여권 및 비자 확인", description: "비자 유효기간과 여권 유효기간을 재확인하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 배포되는 입국카드를 작성하세요." },
    ],
    alerts: ["VPN 없이 구글/카카오톡 사용 불가", "현금 위주 결제 지역 많음", "위안화 환전 미리 준비"],
    checklist: ["비자 출력본", "여권 사본 저장", "숙소 예약 확인서", "리턴 티켓"],
  },
  TH: {
    quickInfo: { timeDiff: "-2시간", voltage: "220V (한국과 동일)", currency: "THB (바트)", flight: "약 5시간 30분" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "Thailand Pass 확인", description: "입국 관련 최신 요건을 확인하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 TM.6 입국카드를 작성하세요." },
    ],
    alerts: ["왕실 모독죄 엄격 처벌", "전자담배 반입 금지 (벌금 최대 50만 바트)", "오토바이 무면허 운전 단속"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  VN: {
    quickInfo: { timeDiff: "-2시간", voltage: "220V (한국과 동일)", currency: "VND (동)", flight: "약 5시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-3", title: "숙소 예약 확인", description: "숙소 예약 확인서를 출력 또는 저장하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 배포되는 입국카드를 작성하세요." },
    ],
    alerts: ["현금 환전은 공인 환전소 이용", "오토바이 교통 주의", "길거리 음식 위생 주의"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  SG: {
    quickInfo: { timeDiff: "-1시간", voltage: "230V (어댑터 필요)", currency: "SGD (싱가포르 달러)", flight: "약 6시간 30분" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-3", title: "SG 입국카드 온라인 제출", description: "입국 3일 전부터 온라인으로 전자 입국카드를 제출할 수 있습니다.", actionUrl: "https://eservices.ica.gov.sg/sgarrivalcard/", actionLabel: "제출하기" },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 출력 또는 저장하세요." },
      { dDay: "입국 당일", title: "전자 입국카드 QR 준비", description: "제출 완료 확인 이메일의 QR 코드를 준비하세요." },
    ],
    alerts: ["껌 반입 금지 (벌금 부과)", "공공장소 흡연 시 벌금", "쓰레기 무단투기 시 고액 벌금"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  TW: {
    quickInfo: { timeDiff: "-1시간", voltage: "110V (돼지코 필수)", currency: "TWD (대만 달러)", flight: "약 2시간 30분" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "체류 기간 이상 여권 유효기간이 남아있어야 합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 배포되는 입국카드를 작성하세요." },
    ],
    alerts: ["110V 어댑터 필수 지참", "야시장 현금 결제 위주"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  PH: {
    quickInfo: { timeDiff: "-1시간", voltage: "220V (한국과 동일)", currency: "PHP (페소)", flight: "약 4시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "eTravel 등록", description: "필리핀 입국 전 eTravel 시스템에 등록하세요.", actionUrl: "https://etravel.gov.ph/", actionLabel: "등록하기" },
      { dDay: "입국 당일", title: "eTravel QR 준비", description: "eTravel 등록 후 발급된 QR 코드를 준비하세요." },
    ],
    alerts: ["마약 관련 법규 매우 엄격", "귀중품 소매치기 주의", "공항 택시 바가지 주의"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  MY: {
    quickInfo: { timeDiff: "-1시간", voltage: "240V (어댑터 필요)", currency: "MYR (링깃)", flight: "약 6시간 30분" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-3", title: "MDAC 디지털 입국카드 등록", description: "말레이시아 입국 전 온라인 디지털 입국카드를 제출하세요.", actionUrl: "https://imigresen-online.imi.gov.my/mdac/main", actionLabel: "등록하기" },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "MDAC 확인서 준비", description: "MDAC 등록 확인 화면을 스크린샷으로 저장하세요." },
    ],
    alerts: ["이슬람 문화 존중 (모스크 방문 시 복장 주의)", "마약 소지 시 사형 가능"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  ID: {
    quickInfo: { timeDiff: "-2시간", voltage: "230V (어댑터 필요)", currency: "IDR (루피아)", flight: "약 7시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "도착비자 준비", description: "공항에서 도착비자(VOA) 발급 가능합니다. USD 35 준비하세요." },
      { dDay: "D-1", title: "세관신고서 온라인 등록", description: "인도네시아 세관 앱에서 사전 등록 가능합니다." },
      { dDay: "입국 당일", title: "도착비자 발급", description: "공항 VOA 카운터에서 비자를 발급받으세요." },
    ],
    alerts: ["마약 관련 법규 매우 엄격 (사형 가능)", "발리 사원 방문 시 복장 규정 준수", "원숭이 숲에서 소지품 주의"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "USD 현금 (도착비자)"],
  },
  IN: {
    quickInfo: { timeDiff: "-3시간 30분", voltage: "230V (어댑터 필요)", currency: "INR (루피)", flight: "약 8시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-14", title: "e-비자 신청", description: "최소 4일 전 온라인으로 e-비자를 신청하세요.", actionUrl: "https://indianvisaonline.gov.in/", actionLabel: "신청하기" },
      { dDay: "D-7", title: "e-비자 승인 확인", description: "이메일로 도착한 e-비자 승인서를 출력하세요." },
      { dDay: "입국 당일", title: "e-비자 출력본 준비", description: "e-비자 승인서 출력본과 여권을 준비하세요." },
    ],
    alerts: ["식수는 반드시 생수 구입", "길거리 음식 위생 주의", "소매치기 및 사기 주의"],
    checklist: ["e-비자 출력본", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  KH: {
    quickInfo: { timeDiff: "-2시간", voltage: "230V (어댑터 필요)", currency: "USD/KHR (달러/리엘)", flight: "약 5시간 30분" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-14", title: "e-비자 신청", description: "온라인으로 캄보디아 e-비자를 신청하세요.", actionUrl: "https://www.evisa.gov.kh/", actionLabel: "신청하기" },
      { dDay: "D-7", title: "e-비자 승인 확인", description: "이메일로 도착한 e-비자를 출력하세요." },
      { dDay: "입국 당일", title: "e-비자 출력본 준비", description: "e-비자 출력본과 증명사진 1장을 준비하세요." },
    ],
    alerts: ["USD 현금 결제가 일반적", "앙코르와트 복장 규정 (어깨/무릎 가림)", "수돗물 음용 금지"],
    checklist: ["e-비자 출력본", "여권 사본 저장", "증명사진 1장", "USD 현금"],
  },
  LA: {
    quickInfo: { timeDiff: "-2시간", voltage: "230V (어댑터 필요)", currency: "LAK (킵)", flight: "약 5시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 배포되는 입국카드를 작성하세요." },
    ],
    alerts: ["사원 방문 시 복장 주의", "수돗물 음용 금지", "야간 이동 자제 권장"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  MM: {
    quickInfo: { timeDiff: "-2시간 30분", voltage: "230V (어댑터 필요)", currency: "MMK (짯)", flight: "약 5시간 30분" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-14", title: "e-비자 신청", description: "온라인으로 미얀마 e-비자를 신청하세요.", actionUrl: "https://evisa.moip.gov.mm/", actionLabel: "신청하기" },
      { dDay: "D-7", title: "e-비자 승인 확인", description: "이메일로 도착한 e-비자를 출력하세요." },
      { dDay: "입국 당일", title: "e-비자 출력본 준비", description: "e-비자 출력본과 여권을 준비하세요." },
    ],
    alerts: ["정치적 불안정 지역 주의", "현금 위주 결제 (USD/MMK)", "사원 방문 시 맨발 필수"],
    checklist: ["e-비자 출력본", "여권 사본 저장", "숙소 바우처", "USD 현금"],
  },
  HK: {
    quickInfo: { timeDiff: "-1시간", voltage: "220V (어댑터 필요)", currency: "HKD (홍콩 달러)", flight: "약 3시간 30분" },
    passportValidity: { months: 1 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "체류 기간 이상 여권 유효기간이 남아있어야 합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "e-도착카드 작성", description: "입국심사 시 전자 도착카드가 자동 발급됩니다." },
    ],
    alerts: ["옥토퍼스 카드 구입 권장 (교통/결제)", "영국식 3핀 플러그 사용"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  MO: {
    quickInfo: { timeDiff: "-1시간", voltage: "220V (어댑터 필요)", currency: "MOP (파타카)", flight: "약 4시간" },
    passportValidity: { months: 1 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "체류 기간 이상 여권 유효기간이 남아있어야 합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "입국심사 시 입국카드를 작성하세요." },
    ],
    alerts: ["홍콩 달러도 통용 가능", "카지노 21세 이상만 출입 가능"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },

  // === 유럽 (쉥겐 지역) ===
  FR: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 12시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험(3만 유로 이상) 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓, 여행자 보험을 준비하세요." },
    ],
    alerts: ["소매치기 주의 (파리 지하철, 관광지)", "일요일 상점 대부분 휴무", "팁 문화 없음 (서비스료 포함)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  IT: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 12시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험(3만 유로 이상) 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓, 여행자 보험을 준비하세요." },
    ],
    alerts: ["소매치기 주의 (로마, 밀라노 관광지)", "관광세 별도 부과 (도시별 상이)", "성당 방문 시 복장 주의 (어깨/무릎 가림)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  ES: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 13시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓, 여행자 보험을 준비하세요." },
    ],
    alerts: ["소매치기 주의 (바르셀로나 특히 주의)", "시에스타 (14-17시 상점 휴무 가능)", "늦은 식사 문화 (저녁 21시 이후)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  GB: {
    quickInfo: { timeDiff: "-9시간", voltage: "230V (3핀 어댑터 필요)", currency: "GBP (파운드)", flight: "약 12시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "체류 기간 동안 유효한 여권이 필요합니다." },
      { dDay: "D-2", title: "전자 입국 허가(ETA) 확인", description: "영국 ETA가 필요할 수 있습니다. 사전 확인하세요." },
      { dDay: "입국 당일", title: "e-Gate 이용", description: "한국 여권 소지자는 e-Gate 자동 입국심사 이용 가능합니다." },
    ],
    alerts: ["좌측통행 (차량 주의)", "영국식 3핀 플러그 어댑터 필수", "NHS 의료비 유료 (여행자 보험 권장)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  DE: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 11시간 30분" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓, 여행자 보험을 준비하세요." },
    ],
    alerts: ["일요일 상점 휴무 (법정)", "현금 결제 선호 (카드 안 되는 곳 많음)", "자전거 도로 보행 주의"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  CH: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (스위스형 어댑터 필요)", currency: "CHF (스위스 프랑)", flight: "약 12시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "스위스 트래블 패스 구매", description: "대중교통 이용 시 트래블 패스 사전 구매를 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓을 준비하세요." },
    ],
    alerts: ["물가 매우 높음 (유럽 최고 수준)", "스위스 전용 플러그 (J타입)", "일요일 상점 휴무"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  GR: {
    quickInfo: { timeDiff: "-7시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 12시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓을 준비하세요." },
    ],
    alerts: ["여름 극심한 더위 (40도 이상)", "섬 이동 시 페리 사전 예약 권장"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  PT: {
    quickInfo: { timeDiff: "-9시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 14시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓을 준비하세요." },
    ],
    alerts: ["소매치기 주의 (리스본 트램 28번)", "관광세 별도 부과"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  NL: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 11시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓을 준비하세요." },
    ],
    alerts: ["자전거 도로 보행 절대 금지", "관광세 별도 부과 (암스테르담)", "커피숍 ≠ 카페 주의"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  CZ: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "CZK (코루나)", flight: "약 11시간 30분" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓을 준비하세요." },
    ],
    alerts: ["유로 사용 불가 (코루나만 사용)", "관광지 환전소 환율 주의", "택시 미터기 확인 필수"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  AT: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 11시간 30분" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓을 준비하세요." },
    ],
    alerts: ["일요일/공휴일 상점 휴무", "비엔나 대중교통 검표 철저 (무임승차 벌금)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  HR: {
    quickInfo: { timeDiff: "-8시간", voltage: "230V (어댑터 필요)", currency: "EUR (유로)", flight: "약 12시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "쉥겐 지역 출국일 기준 3개월 이상 유효해야 합니다." },
      { dDay: "D-3", title: "여행자 보험 가입", description: "쉥겐 지역 여행자 보험 가입을 권장합니다." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "숙소 예약 확인서, 리턴 티켓을 준비하세요." },
    ],
    alerts: ["여름 성수기 두브로브니크 매우 혼잡", "국립공원 수영 가능 구역 확인"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },

  // === 북미 ===
  US: {
    quickInfo: { timeDiff: "-14시간 (동부)", voltage: "120V (돼지코 필수)", currency: "USD (달러)", flight: "약 14시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-72시간", title: "ESTA 신청", description: "출발 72시간 전까지 ESTA를 신청하세요. 유효기간 2년.", actionUrl: "https://esta.cbp.dhs.gov/", actionLabel: "신청하기" },
      { dDay: "D-7", title: "ESTA 승인 확인", description: "ESTA 승인 상태를 확인하고 출력하세요." },
      { dDay: "입국 당일", title: "세관신고서 작성", description: "기내에서 세관신고서를 작성하세요. 식품 반입 신고 필수." },
    ],
    alerts: ["ESTA 미승인 시 입국 불가", "팁 문화 (식당 15-20%, 택시 15%)", "주마다 법률 상이 (음주, 흡연 등)"],
    checklist: ["ESTA 출력본", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  CA: {
    quickInfo: { timeDiff: "-14시간 (동부)", voltage: "120V (돼지코 필수)", currency: "CAD (캐나다 달러)", flight: "약 12시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "eTA 신청", description: "캐나다 전자여행허가(eTA)를 온라인으로 신청하세요.", actionUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html", actionLabel: "신청하기" },
      { dDay: "D-3", title: "eTA 승인 확인", description: "이메일로 eTA 승인을 확인하세요." },
      { dDay: "입국 당일", title: "세관신고서 작성", description: "ArriveCAN 앱 또는 기내에서 세관신고서를 작성하세요." },
    ],
    alerts: ["eTA 미승인 시 탑승 불가", "겨울 극한 추위 대비 필요", "팁 문화 (15-20%)"],
    checklist: ["eTA 확인", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  MX: {
    quickInfo: { timeDiff: "-15시간", voltage: "127V (돼지코 필요)", currency: "MXN (페소)", flight: "약 15시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "FMM 입국카드를 기내에서 작성하세요. 출국 시까지 보관 필수." },
    ],
    alerts: ["FMM 카드 분실 시 출국 시 벌금", "수돗물 음용 금지", "택시는 공인 택시만 이용"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },

  // === 남미 ===
  BR: {
    quickInfo: { timeDiff: "-12시간", voltage: "127/220V (어댑터 필요)", currency: "BRL (헤알)", flight: "약 24시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-3", title: "숙소 및 리턴 티켓 확인", description: "숙소 예약 확인서와 리턴 티켓을 준비하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 입국카드를 작성하세요." },
    ],
    alerts: ["치안 주의 (소매치기, 강도)", "독특한 전원 플러그 (N타입)", "카니발 기간 교통 혼잡"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  AR: {
    quickInfo: { timeDiff: "-12시간", voltage: "220V (어댑터 필요)", currency: "ARS (아르헨티나 페소)", flight: "약 24시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 권장됩니다." },
      { dDay: "D-3", title: "숙소 및 리턴 티켓 확인", description: "숙소 예약 확인서와 리턴 티켓을 준비하세요." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "여권과 리턴 티켓을 준비하세요." },
    ],
    alerts: ["환율 차이 큼 (공식 vs 블루 달러)", "소매치기 주의 (부에노스아이레스)", "현금 USD 지참 권장"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  PE: {
    quickInfo: { timeDiff: "-14시간", voltage: "220V (어댑터 필요)", currency: "PEN (솔)", flight: "약 22시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-3", title: "마추픽추 예약 확인", description: "마추픽추 방문 시 사전 예약 필수 (1일 입장 제한)." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 배포되는 입국카드를 작성하세요." },
    ],
    alerts: ["고산병 주의 (쿠스코 3,400m)", "수돗물 음용 금지", "택시 미터기 없음 (요금 사전 협상)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  CL: {
    quickInfo: { timeDiff: "-13시간", voltage: "220V (어댑터 필요)", currency: "CLP (칠레 페소)", flight: "약 24시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 권장됩니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "SAG 세관신고서 작성", description: "식물/동물성 식품 반입 엄격 제한. 세관신고서를 정확히 작성하세요." },
    ],
    alerts: ["식물/과일 반입 엄격 금지 (벌금)", "지진 다발 지역", "산티아고 스모그 주의"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  CO: {
    quickInfo: { timeDiff: "-14시간", voltage: "110V (돼지코 필수)", currency: "COP (콜롬비아 페소)", flight: "약 20시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "Check-Mig 등록", description: "콜롬비아 입국 전 온라인 사전등록을 완료하세요." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "여권과 리턴 티켓, Check-Mig 확인서를 준비하세요." },
    ],
    alerts: ["야간 외출 자제 권장", "택시 앱 사용 권장 (길거리 호출 지양)", "고산병 주의 (보고타 2,600m)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },

  // === 오세아니아 ===
  AU: {
    quickInfo: { timeDiff: "+1시간 (시드니)", voltage: "230V (어댑터 필요)", currency: "AUD (호주 달러)", flight: "약 10시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-14", title: "ETA 신청", description: "호주 전자여행허가(ETA)를 앱으로 신청하세요.", actionUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601", actionLabel: "신청하기" },
      { dDay: "D-7", title: "ETA 승인 확인", description: "ETA 승인 이메일을 확인하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 입국카드를 작성하세요. 식품/식물 반입 신고 필수." },
    ],
    alerts: ["식품/동식물 반입 매우 엄격 (벌금 최대 AUD 66만)", "자외선 매우 강함 (선크림 필수)", "좌측통행"],
    checklist: ["ETA 확인", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  NZ: {
    quickInfo: { timeDiff: "+3시간", voltage: "230V (어댑터 필요)", currency: "NZD (뉴질랜드 달러)", flight: "약 12시간" },
    passportValidity: { months: 3 },
    timeline: [
      { dDay: "D-7", title: "NZeTA 신청", description: "뉴질랜드 전자여행허가(NZeTA)를 신청하세요.", actionUrl: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta", actionLabel: "신청하기" },
      { dDay: "D-3", title: "NZeTA 승인 확인", description: "NZeTA 승인을 확인하세요." },
      { dDay: "입국 당일", title: "NZTD 여행자 신고", description: "뉴질랜드 여행자 신고서를 온라인으로 제출하세요." },
    ],
    alerts: ["식품/식물 반입 매우 엄격", "자외선 매우 강함 (선크림 필수)", "좌측통행"],
    checklist: ["NZeTA 확인", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  FJ: {
    quickInfo: { timeDiff: "+3시간", voltage: "240V (어댑터 필요)", currency: "FJD (피지 달러)", flight: "약 11시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 입국카드를 작성하세요." },
    ],
    alerts: ["자외선 매우 강함", "마을 방문 시 예의 (선물 지참 문화)", "모기 주의 (뎅기열)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },

  // === 아프리카 ===
  ZA: {
    quickInfo: { timeDiff: "-7시간", voltage: "230V (3핀 어댑터 필요)", currency: "ZAR (랜드)", flight: "약 18시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 30일 + 여백 2페이지 이상 필요합니다." },
      { dDay: "D-3", title: "숙소 및 리턴 티켓 확인", description: "숙소 예약 확인서와 리턴 티켓을 준비하세요." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "여권과 리턴 티켓을 준비하세요." },
    ],
    alerts: ["치안 주의 (야간 외출 자제)", "남아공 전용 플러그 (M타입)", "말라리아 지역 주의 (크루거 국립공원)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "여행자 보험"],
  },
  EG: {
    quickInfo: { timeDiff: "-7시간", voltage: "220V (어댑터 필요)", currency: "EGP (이집트 파운드)", flight: "약 12시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "USD 현금 준비", description: "도착비자 비용 USD 25를 준비하세요." },
      { dDay: "입국 당일", title: "도착비자 발급", description: "공항 도착 후 비자 스티커를 구매하세요 (USD 25)." },
    ],
    alerts: ["호객행위 주의 (피라미드, 시장)", "수돗물 음용 금지", "여성 여행자 복장 주의 권장"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "USD 현금 (도착비자)"],
  },
  MA: {
    quickInfo: { timeDiff: "-9시간", voltage: "220V (어댑터 필요)", currency: "MAD (디르함)", flight: "약 15시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국카드 작성", description: "기내에서 배포되는 입국카드를 작성하세요." },
    ],
    alerts: ["미로 같은 메디나에서 길 안내 사기 주의", "이슬람 문화 존중 (라마단 기간 주의)", "흥정 문화 (시장에서 가격 협상)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  KE: {
    quickInfo: { timeDiff: "-6시간", voltage: "240V (어댑터 필요)", currency: "KES (케냐 실링)", flight: "약 14시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-14", title: "e-비자 신청", description: "케냐 e-비자를 온라인으로 신청하세요.", actionUrl: "https://www.etakenya.go.ke/", actionLabel: "신청하기" },
      { dDay: "D-7", title: "e-비자 승인 확인", description: "이메일로 도착한 e-비자를 출력하세요." },
      { dDay: "입국 당일", title: "e-비자 출력본 준비", description: "e-비자 출력본과 여권을 준비하세요." },
    ],
    alerts: ["황열병 예방접종 권장", "사파리 시 가이드 지시 준수", "수돗물 음용 금지"],
    checklist: ["e-비자 출력본", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  TZ: {
    quickInfo: { timeDiff: "-6시간", voltage: "230V (어댑터 필요)", currency: "TZS (탄자니아 실링)", flight: "약 15시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "USD 현금 준비", description: "도착비자 비용 USD 50를 준비하세요." },
      { dDay: "입국 당일", title: "도착비자 발급", description: "공항에서 도착비자를 발급받으세요 (USD 50)." },
    ],
    alerts: ["황열병 예방접종 필수 (일부 경유 시)", "킬리만자로 등반 시 고산병 주의", "말라리아 예방약 복용 권장"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "USD 현금 (도착비자)"],
  },

  // === 중동 ===
  AE: {
    quickInfo: { timeDiff: "-5시간", voltage: "220V (어댑터 필요)", currency: "AED (디르함)", flight: "약 9시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "스마트 게이트 이용", description: "두바이/아부다비 공항 스마트 게이트로 빠른 입국 가능합니다." },
    ],
    alerts: ["공공장소 음주 금지", "라마단 기간 낮 시간 공공 음식 섭취 금지", "복장 규정 주의 (쇼핑몰, 모스크)"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  TR: {
    quickInfo: { timeDiff: "-6시간", voltage: "230V (어댑터 필요)", currency: "TRY (리라)", flight: "약 11시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "여권과 리턴 티켓을 준비하세요." },
    ],
    alerts: ["그랜드 바자르 흥정 문화", "택시 미터기 확인 필수", "모스크 방문 시 복장 주의"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  IL: {
    quickInfo: { timeDiff: "-7시간", voltage: "230V (어댑터 필요)", currency: "ILS (셰켈)", flight: "약 12시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-3", title: "입국 목적 서류 준비", description: "이스라엘 입국심사가 매우 까다롭습니다. 숙소, 일정표, 리턴 티켓을 철저히 준비하세요." },
      { dDay: "입국 당일", title: "입국심사 대비", description: "입국 목적, 체류 기간, 방문 장소 등 영어 질문에 대비하세요." },
    ],
    alerts: ["입국심사 매우 까다로움 (2시간 이상 소요 가능)", "안식일(금요일 해질녘~토요일) 대중교통 운행 중단", "여행 제한 지역 확인 필수"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓", "일정표"],
  },
  JO: {
    quickInfo: { timeDiff: "-7시간", voltage: "230V (어댑터 필요)", currency: "JOD (요르단 디나르)", flight: "약 12시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "Jordan Pass 구매 권장", description: "페트라 입장료 + 비자비 포함. 사전 구매 시 절약 가능.", actionUrl: "https://www.jordanpass.jo/", actionLabel: "구매하기" },
      { dDay: "입국 당일", title: "도착비자 발급", description: "공항에서 도착비자를 발급받으세요 (JOD 40, Jordan Pass 소지 시 면제)." },
    ],
    alerts: ["Jordan Pass 사전 구매 강력 권장", "수돗물 음용 금지", "페트라 일사병 주의 (물 충분히 지참)"],
    checklist: ["Jordan Pass 확인", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  QA: {
    quickInfo: { timeDiff: "-6시간", voltage: "240V (어댑터 필요)", currency: "QAR (카타르 리얄)", flight: "약 10시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-7", title: "여권 유효기간 확인", description: "입국 시 여권 유효기간 6개월 이상 필요합니다." },
      { dDay: "D-1", title: "숙소 예약 확인", description: "숙소 예약 확인서를 준비하세요." },
      { dDay: "입국 당일", title: "입국심사 서류 준비", description: "여권과 리턴 티켓을 준비하세요." },
    ],
    alerts: ["공공장소 음주 금지", "복장 규정 주의 (어깨/무릎 가림)", "라마단 기간 공공 음식 섭취 금지"],
    checklist: ["여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  SA: {
    quickInfo: { timeDiff: "-6시간", voltage: "220V (어댑터 필요)", currency: "SAR (사우디 리얄)", flight: "약 10시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-14", title: "e-비자 신청", description: "사우디 관광 e-비자를 온라인으로 신청하세요.", actionUrl: "https://visa.visitsaudi.com/", actionLabel: "신청하기" },
      { dDay: "D-7", title: "e-비자 승인 확인", description: "e-비자 승인을 확인하고 출력하세요." },
      { dDay: "입국 당일", title: "e-비자 출력본 준비", description: "e-비자 출력본과 여권을 준비하세요." },
    ],
    alerts: ["주류 반입/음주 완전 금지", "여성 복장 규정 완화되었으나 보수적 복장 권장", "기도 시간 일부 상점 임시 휴무"],
    checklist: ["e-비자 출력본", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
  OM: {
    quickInfo: { timeDiff: "-5시간", voltage: "240V (어댑터 필요)", currency: "OMR (오만 리얄)", flight: "약 10시간" },
    passportValidity: { months: 6 },
    timeline: [
      { dDay: "D-14", title: "e-비자 신청", description: "오만 e-비자를 온라인으로 신청하세요.", actionUrl: "https://evisa.rop.gov.om/", actionLabel: "신청하기" },
      { dDay: "D-7", title: "e-비자 승인 확인", description: "e-비자 승인을 확인하고 출력하세요." },
      { dDay: "입국 당일", title: "e-비자 출력본 준비", description: "e-비자 출력본과 여권을 준비하세요." },
    ],
    alerts: ["이슬람 문화 존중 (복장 주의)", "사막 여행 시 충분한 물 준비", "공공장소 음주 금지"],
    checklist: ["e-비자 출력본", "여권 사본 저장", "숙소 바우처", "리턴 티켓"],
  },
};

// 스크립트 실행
const files = readdirSync(DIR).filter((f) => f.endsWith(".json"));

let updated = 0;
let skipped = 0;

for (const file of files) {
  const id = file.replace(".json", "");
  const filePath = join(DIR, file);
  const data = JSON.parse(readFileSync(filePath, "utf-8"));

  const extra = COUNTRY_DATA[id];
  if (!extra) {
    console.log(`⏭️  ${id}: 매핑 데이터 없음 - 스킵`);
    skipped++;
    continue;
  }

  // 이미 quickInfo가 있으면 덮어쓰기
  const merged = {
    ...data,
    quickInfo: extra.quickInfo,
    passportValidity: extra.passportValidity,
    timeline: extra.timeline,
    alerts: extra.alerts,
    checklist: extra.checklist,
  };

  writeFileSync(filePath, JSON.stringify(merged, null, 2) + "\n");
  console.log(`✅ ${id}: 업데이트 완료`);
  updated++;
}

console.log(`\n완료: ${updated}개 업데이트, ${skipped}개 스킵`);
