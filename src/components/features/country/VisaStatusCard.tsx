import { Country, VISA_STATUS_MAP } from "@/lib/types";

// 비자 상태별 스타일 설정
const VISA_STYLE_MAP = {
  visa_free: {
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/20",
    badgeText: "text-emerald-300",
    label: "무비자 입국 가능",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-400"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
  visa_required: {
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
    badgeBg: "bg-red-500/20",
    badgeText: "text-red-300",
    label: "비자 필요",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-400"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
  },
  visa_on_arrival: {
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    badgeBg: "bg-blue-500/20",
    badgeText: "text-blue-300",
    label: "도착비자",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-400"
      >
        <path d="M2 12h10" />
        <path d="m9 4 3 3-3 3" />
        <path d="M22 12A10 10 0 0 0 12 2" />
        <path d="M22 12A10 10 0 0 1 12 22" />
      </svg>
    ),
  },
  e_visa: {
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    badgeBg: "bg-amber-500/20",
    badgeText: "text-amber-300",
    label: "전자비자 필요",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-amber-400"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 15h0M2 9.5h20" />
      </svg>
    ),
  },
} as const;

interface VisaStatusCardProps {
  country: Country;
}

// 비자 상태 메인 카드 컴포넌트
export default function VisaStatusCard({ country }: VisaStatusCardProps) {
  const style = VISA_STYLE_MAP[country.visaStatus];
  const statusInfo = VISA_STATUS_MAP[country.visaStatus];

  return (
    <div
      className={`${style.bgColor} border ${style.borderColor} rounded-2xl p-8`}
    >
      {/* 상태 아이콘 + 텍스트 */}
      <div className="flex items-center gap-4 mb-4">
        {style.icon}
        <h2 className={`text-2xl font-bold ${style.textColor}`}>
          {style.label}
        </h2>
      </div>

      {/* 상태 배지 */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${style.badgeBg} ${style.badgeText}`}
        >
          {statusInfo.label}
        </span>
      </div>

      {/* 체류 기간 */}
      {country.visaFreeStayDays && (
        <p className="text-lg text-slate-300">
          체류 가능 기간:{" "}
          <span className={`font-semibold ${style.textColor}`}>
            {country.visaFreeStayDays}일
          </span>
        </p>
      )}

      {/* 비자 참고사항 */}
      {country.visaNote && (
        <p className="mt-3 text-slate-400 text-sm leading-relaxed">
          {country.visaNote}
        </p>
      )}
    </div>
  );
}
