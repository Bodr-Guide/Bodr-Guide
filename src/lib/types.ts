// 대륙 타입 정의
export type Continent = "아시아" | "유럽" | "북미" | "남미" | "오세아니아" | "아프리카" | "중동";

// 비자 상태 타입 정의
export type VisaStatus = "visa_free" | "visa_required" | "visa_on_arrival" | "e_visa";

// 입국 등록 정보
export interface EntryRegistration {
  required: boolean;
  type: string;
  applicationUrl: string;
  description: string;
}

// 빠른 정보 (시차, 전압, 통화, 비행시간)
export interface QuickInfo {
  timeDiff: string;
  voltage: string;
  currency: string;
  flight: string;
}

// 타임라인 항목
export interface TimelineItem {
  dDay: string;
  title: string;
  description: string;
  actionUrl?: string;
  actionLabel?: string;
}

// 여권 유효기간 요건
export interface PassportValidity {
  months: number;
}

// 비자 종류 상세 정보
export interface VisaTypeInfo {
  name: string;
  duration: string;
  description: string;
  fee?: string;
  applicationUrl?: string;
}

// 국가 데이터 인터페이스
export interface Country {
  id: string;
  nameKo: string;
  nameEn: string;
  continent: Continent;
  flagEmoji: string;
  flagImageUrl?: string;
  visaStatus: VisaStatus;
  visaFreeStayDays?: number;
  visaNote?: string;
  entryRegistration?: EntryRegistration;
  importantNotes: string[];
  updatedAt: string;
  source: string;
  quickInfo?: QuickInfo;
  passportValidity?: PassportValidity;
  visaTypes?: VisaTypeInfo[];
  timeline?: TimelineItem[];
  alerts?: string[];
  checklist?: string[];
}

// 비자 상태 라벨 및 색상 매핑
export const VISA_STATUS_MAP: Record<VisaStatus, { label: string; color: string }> = {
  visa_free: { label: "무비자", color: "green" },
  visa_required: { label: "비자 필요", color: "red" },
  visa_on_arrival: { label: "도착비자", color: "blue" },
  e_visa: { label: "전자비자", color: "yellow" },
};

// 대륙 목록
export const CONTINENTS: Continent[] = ["아시아", "유럽", "북미", "남미", "오세아니아", "아프리카", "중동"];
