import { VisaStatus, VISA_STATUS_MAP } from "@/lib/types";

// 비자 상태별 스타일 매핑
const VISA_BADGE_STYLES: Record<
  VisaStatus,
  { bg: string; text: string; border: string; dot: string }
> = {
  visa_free: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  visa_required: {
    bg: "bg-red-500/20",
    text: "text-red-400",
    border: "border-red-500/30",
    dot: "bg-red-400",
  },
  visa_on_arrival: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
    dot: "bg-blue-400",
  },
  e_visa: {
    bg: "bg-amber-500/20",
    text: "text-amber-400",
    border: "border-amber-500/30",
    dot: "bg-amber-400",
  },
};

interface VisaBadgeProps {
  status: VisaStatus;
  className?: string;
}

// 비자 상태 표시 배지 컴포넌트
export default function VisaBadge({ status, className = "" }: VisaBadgeProps) {
  const style = VISA_BADGE_STYLES[status];
  const label = VISA_STATUS_MAP[status].label;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${style.bg} ${style.text} ${style.border} ${className}`}
    >
      {/* 상태 표시 점 */}
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {label}
    </span>
  );
}
