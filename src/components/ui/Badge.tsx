import { VisaStatus, VISA_STATUS_MAP } from "@/types/country";

interface BadgeProps {
  visaStatus: VisaStatus;
  stayDays?: number | null;
}

export default function Badge({ visaStatus, stayDays }: BadgeProps) {
  const { label, color } = VISA_STATUS_MAP[visaStatus];
  const text = stayDays ? `${label} ${stayDays}일` : label;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
      style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}40` }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      {text}
    </span>
  );
}
