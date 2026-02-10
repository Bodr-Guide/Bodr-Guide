import { EntryRegistration } from "@/lib/types";

interface EntryRegistrationCardProps {
  registration: EntryRegistration;
}

// 사전 등록(ETA/ESTA 등) 정보 카드 컴포넌트
export default function EntryRegistrationCard({
  registration,
}: EntryRegistrationCardProps) {
  return (
    <section>
      {/* 섹션 제목 */}
      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-sky-400"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        사전 등록 정보
      </h3>

      {/* 카드 본문 */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
        {/* 등록 타입 */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-medium text-white">
            {registration.type}
          </h4>
          {/* 필수 여부 배지 */}
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              registration.required
                ? "bg-red-500/20 text-red-300"
                : "bg-sky-500/20 text-sky-300"
            }`}
          >
            {registration.required ? "필수" : "선택 (권장)"}
          </span>
        </div>

        {/* 설명 */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {registration.description}
        </p>

        {/* 공식 사이트 링크 */}
        <a
          href={registration.applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
        >
          공식 사이트 바로가기
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
