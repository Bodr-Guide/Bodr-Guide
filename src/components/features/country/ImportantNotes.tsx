interface ImportantNotesProps {
  notes: string[];
}

// 주의사항 목록 컴포넌트
export default function ImportantNotes({ notes }: ImportantNotesProps) {
  if (notes.length === 0) return null;

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
          className="text-amber-400"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        주의사항
      </h3>

      {/* 주의사항 목록 */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
        <ul className="space-y-3">
          {notes.map((note, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* 경고 bullet */}
              <span className="mt-0.5 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-400/70"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </span>
              <span className="text-slate-300 text-sm leading-relaxed">
                {note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
