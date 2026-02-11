import Link from "next/link";
import { Metadata } from "next";
import { getAllCountries } from "@/lib/countries";
import { Country, VisaStatus, VISA_STATUS_MAP } from "@/lib/types";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "비자 가이드 — BodrGuide",
  description:
    "대한민국 여권 기준 전 세계 비자 종류별 가이드. 무비자, 도착비자, 전자비자, 비자 필요 국가를 한눈에 확인하세요.",
};

// 비자 상태별 스타일
const STATUS_STYLE: Record<
  VisaStatus,
  { bg: string; border: string; text: string; accent: string; icon: string }
> = {
  visa_free: {
    bg: "from-emerald-950/40 via-slate-900/80 to-slate-900/80",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    accent: "bg-emerald-500/15 text-emerald-300",
    icon: "M20 6 9 17l-5-5",
  },
  visa_on_arrival: {
    bg: "from-sky-950/40 via-slate-900/80 to-slate-900/80",
    border: "border-sky-500/30",
    text: "text-sky-400",
    accent: "bg-sky-500/15 text-sky-300",
    icon: "M2 12h10M9 4l3 3-3 3",
  },
  e_visa: {
    bg: "from-amber-950/40 via-slate-900/80 to-slate-900/80",
    border: "border-amber-500/30",
    text: "text-amber-400",
    accent: "bg-amber-500/15 text-amber-300",
    icon: "M2 4h20v16H2zM2 9.5h20",
  },
  visa_required: {
    bg: "from-red-950/40 via-slate-900/80 to-slate-900/80",
    border: "border-red-500/30",
    text: "text-red-400",
    accent: "bg-red-500/15 text-red-300",
    icon: "M18 6 6 18M6 6l12 12",
  },
};

// 비자 종류 카테고리 설명
const VISA_CATEGORIES = [
  {
    name: "워킹홀리데이비자",
    emoji: "🎒",
    desc: "만 18~30세 청년 대상. 최대 1년간 체류하며 취업과 여행을 병행할 수 있는 비자. 한국은 약 26개국과 협정 체결.",
    tip: "연간 쿼터가 있으므로 조기 마감 가능. 여권 유효기간 확인 필수.",
  },
  {
    name: "취업비자",
    emoji: "💼",
    desc: "해외 취업 시 필요한 비자. 대부분 현지 고용주의 스폰서십(고용 증명)이 필요하며, 국가별로 직종 제한이 있을 수 있음.",
    tip: "고용계약서, 학력/경력 증명, 범죄경력조회서 등 준비 서류가 많으므로 최소 3개월 전 준비.",
  },
  {
    name: "유학비자",
    emoji: "🎓",
    desc: "해외 교육기관에 정규 과정으로 입학할 때 필요한 비자. 입학허가서(Offer Letter)와 재정증명이 기본 요건.",
    tip: "일부 국가는 유학비자로도 주당 일정 시간의 아르바이트가 가능.",
  },
  {
    name: "디지털노마드비자",
    emoji: "💻",
    desc: "해외에서 원격근무를 하며 체류할 수 있는 비자. 일정 수준의 소득 증명이 필요하며, 주로 1년 단위 발급.",
    tip: "포르투갈(D8), 스페인, 크로아티아, 그리스, 에스토니아, 태국(DTV) 등 30개국 이상에서 운영.",
  },
  {
    name: "은퇴비자",
    emoji: "🏖️",
    desc: "일정 나이 이상의 은퇴자가 해외에서 장기 체류할 수 있는 비자. 연금 또는 일정 금액의 예치금 필요.",
    tip: "말레이시아(MM2H), 필리핀(SRRV), 파나마(Pensionado), 태국(Non-O) 등이 대표적.",
  },
  {
    name: "투자비자/이민",
    emoji: "🏦",
    desc: "해당 국가에 일정 금액을 투자하면 영주권 또는 장기 체류 자격을 부여하는 비자.",
    tip: "미국 EB-5($800K~), 포르투갈 골든비자(€500K~) 등. 투자금 규모와 조건을 꼼꼼히 비교.",
  },
];

// 비자 상태별 국가 그룹핑
function groupByVisaStatus(countries: Country[]) {
  const groups: Record<VisaStatus, Country[]> = {
    visa_free: [],
    visa_on_arrival: [],
    e_visa: [],
    visa_required: [],
  };
  for (const c of countries) {
    groups[c.visaStatus].push(c);
  }
  // 각 그룹 내 한국어 이름순 정렬
  for (const key of Object.keys(groups) as VisaStatus[]) {
    groups[key].sort((a, b) => a.nameKo.localeCompare(b.nameKo, "ko"));
  }
  return groups;
}

export default function VisaGuidePage() {
  const countries = getAllCountries();
  const groups = groupByVisaStatus(countries);

  const statusOrder: VisaStatus[] = [
    "visa_free",
    "visa_on_arrival",
    "e_visa",
    "visa_required",
  ];

  // 워킹홀리데이 보유 국가
  const whCountries = countries.filter((c) =>
    c.visaTypes?.some((v) => v.name.includes("워킹홀리데이"))
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />

      {/* 히어로 */}
      <section className="relative overflow-hidden pt-16 pb-10 px-5 sm:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-[11px] sm:text-xs font-medium text-violet-400 uppercase tracking-widest mb-2">
            Visa Guide
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-3">
            비자 가이드
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            대한민국 여권 기준, 전 세계 {countries.length}개국의 비자 요건을
            한눈에 확인하세요. 무비자부터 워킹홀리데이, 디지털노마드비자까지
            필요한 모든 정보를 제공합니다.
          </p>

          {/* 요약 통계 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {statusOrder.map((status) => {
              const style = STATUS_STYLE[status];
              const info = VISA_STATUS_MAP[status];
              return (
                <div
                  key={status}
                  className={`rounded-xl border ${style.border} bg-gradient-to-br ${style.bg} p-4`}
                >
                  <p className={`text-2xl sm:text-3xl font-extrabold ${style.text}`}>
                    {groups[status].length}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                    {info.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 비자 종류별 가이드 */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          비자 종류별 가이드
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VISA_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-5 hover:border-slate-600/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {cat.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
                {cat.desc}
              </p>
              <div className="bg-slate-800/50 rounded-lg px-3 py-2">
                <p className="text-[11px] sm:text-xs text-violet-300 leading-relaxed">
                  <span className="font-semibold text-violet-400">TIP</span>{" "}
                  {cat.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 워킹홀리데이 협정국 */}
      {whCountries.length > 0 && (
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-8 sm:pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            워킹홀리데이 협정국
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-5">
            한국과 워킹홀리데이 협정을 체결한 {whCountries.length}개국
          </p>
          <div className="flex flex-wrap gap-2">
            {whCountries.map((c) => (
              <Link
                key={c.id}
                href={`/country/${c.id}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/50 bg-slate-800/40 px-3 py-1.5 text-xs sm:text-sm text-slate-300 hover:border-violet-500/40 hover:text-white transition-colors"
              >
                <span>{c.flagEmoji}</span>
                <span>{c.nameKo}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 비자 상태별 국가 목록 */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          비자 상태별 국가 목록
        </h2>
        <div className="flex flex-col gap-6">
          {statusOrder.map((status) => {
            const style = STATUS_STYLE[status];
            const info = VISA_STATUS_MAP[status];
            const list = groups[status];

            return (
              <div
                key={status}
                className={`rounded-2xl border ${style.border} bg-gradient-to-br ${style.bg} p-5 sm:p-6`}
              >
                {/* 헤더 */}
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={style.text}
                  >
                    <path d={style.icon} />
                  </svg>
                  <h3
                    className={`text-base sm:text-lg font-bold ${style.text}`}
                  >
                    {info.label}
                  </h3>
                  <span
                    className={`ml-auto text-xs sm:text-sm font-semibold ${style.accent} px-2.5 py-0.5 rounded-full`}
                  >
                    {list.length}개국
                  </span>
                </div>

                {/* 국가 그리드 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {list.map((c) => (
                    <Link
                      key={c.id}
                      href={`/country/${c.id}`}
                      className="flex items-center gap-2 rounded-lg bg-slate-800/40 px-3 py-2 hover:bg-slate-700/40 transition-colors group"
                    >
                      <span className="text-base">{c.flagEmoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white truncate">
                          {c.nameKo}
                        </p>
                        {c.visaFreeStayDays && (
                          <p className="text-[10px] text-slate-500">
                            {c.visaFreeStayDays}일
                          </p>
                        )}
                      </div>
                      {c.entryRegistration?.required && (
                        <span className="text-[9px] sm:text-[10px] font-medium text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded flex-shrink-0">
                          {c.entryRegistration.type}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
