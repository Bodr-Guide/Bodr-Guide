export type VisaStatus = "visa_free" | "visa_required" | "visa_on_arrival" | "e_visa";
export type Continent = "아시아" | "유럽" | "북미" | "남미" | "오세아니아" | "아프리카" | "중동";

export const VISA_STATUS_MAP: Record<VisaStatus, { label: string; color: string }> = {
  visa_free: { label: "무비자", color: "#22c55e" },
  visa_required: { label: "비자 필요", color: "#ef4444" },
  visa_on_arrival: { label: "도착비자", color: "#3b82f6" },
  e_visa: { label: "전자비자", color: "#eab308" },
};

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Country {
  slug: string;
  nameKo: string;
  nameEn: string;
  continent: Continent;
  flagEmoji: string;
  visaStatus: VisaStatus;
  visaFreeStayDays: number | null;
  visaNote: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  galleryImages: GalleryImage[];
  importantNotes: string[];
  updatedAt: string;
}
