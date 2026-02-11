/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCountryById, getAllCountries } from "@/lib/data";
import { getCountryImage } from "@/lib/countryImages";
import { VISA_STATUS_MAP } from "@/lib/types";
import Header from "@/components/layout/Header";

// SSG: 빌드 시 모든 국가 경로를 사전 생성
export async function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    id: country.id,
  }));
}

// SEO: 동적 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    return { title: "국가를 찾을 수 없습니다" };
  }

  return {
    title: `${country.nameKo} 입국 가이드 — BodrGuide`,
    description: `한국인 여행자를 위한 ${country.nameKo}(${country.nameEn}) 입국 요건, 비자 정보, 주의사항`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    notFound();
  }

  const visaInfo = VISA_STATUS_MAP[country.visaStatus];
  const heroImage = getCountryImage(id);
  const quickInfo = country.quickInfo;
  const passportMonths = country.passportValidity?.months;

  // 비자 상태별 영어 라벨
  const visaLabelEn: Record<string, string> = {
    visa_free: "VISA FREE",
    visa_required: "VISA REQUIRED",
    visa_on_arrival: "VISA ON ARRIVAL",
    e_visa: "E-VISA",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />

      {/* 히어로 섹션 */}
      <section className="relative h-[320px] sm:h-[420px] overflow-hidden">
        {/* 배경 이미지 */}
        {heroImage && (
          <img
            src={heroImage}
            alt={country.nameKo}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]" />

        {/* 국가 정보 */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 pb-6 sm:pb-8">
          <p className="text-3xl sm:text-5xl font-light text-white/60 mb-1">{country.id}</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-1">
            {country.nameKo}
          </h1>
          <p className="text-sm sm:text-lg text-white/50 uppercase tracking-widest">
            {country.nameEn}
          </p>
        </div>
      </section>

      {/* 퀵 인포 바 */}
      {quickInfo && (
        <section className="max-w-6xl mx-auto px-5 sm:px-8 -mt-1">
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/60 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center py-4 sm:py-5 border-r border-b sm:border-b-0 border-slate-700/50">
              <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 sm:w-3.5 sm:h-3.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Time
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white text-center px-1">{quickInfo.timeDiff}</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 sm:py-5 sm:border-r border-b sm:border-b-0 border-slate-700/50">
              <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 sm:w-3.5 sm:h-3.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                Voltage
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white text-center px-1">{quickInfo.voltage}</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 sm:py-5 border-r border-slate-700/50">
              <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 sm:w-3.5 sm:h-3.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Currency
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white text-center px-1">{quickInfo.currency}</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 sm:py-5">
              <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 sm:w-3.5 sm:h-3.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                Flight
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white text-center px-1">{quickInfo.flight}</span>
            </div>
          </div>
        </section>
      )}

      {/* 탭 네비게이션 */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-6 sm:mt-8">
        <div className="flex gap-5 sm:gap-8 border-b border-slate-800">
          <button className="pb-3 text-xs sm:text-sm font-semibold text-white uppercase tracking-wider border-b-2 border-white">
            Entry Guide
          </button>
          <button className="pb-3 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors">
            City Tips
          </button>
          <button className="pb-3 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors">
            Hotels
          </button>
        </div>
      </section>

      {/* 메인 콘텐츠: 2컬럼 레이아웃 */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-6 sm:mt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 sm:gap-6">
          {/* 좌측 컬럼 */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Visa Requirement 카드 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-gradient-to-br from-emerald-950/40 via-slate-900/80 to-slate-900/80 p-5 sm:p-8">
              {/* 제목 */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 sm:w-[18px] sm:h-[18px]"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-200">Visa Requirement</h2>
              </div>

              {/* 비자 상태 */}
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-2 sm:mb-3 tracking-wide">
                {visaLabelEn[country.visaStatus] || visaInfo.label}
              </p>

              {/* 설명 */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 sm:mb-6">
                {country.visaNote}
              </p>

              {/* 여권 유효기간 바 */}
              {passportMonths && (
                <div className="bg-slate-800/60 rounded-xl px-4 sm:px-5 py-3 sm:py-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                    <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">Passport Validity</span>
                    <span className="text-[10px] sm:text-xs font-bold text-white">{passportMonths} Months+</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Timeline 카드 */}
            {country.timeline && country.timeline.length > 0 && (
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-gradient-to-br from-indigo-950/30 via-slate-900/80 to-slate-900/80 p-5 sm:p-8">
                {/* 제목 */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 sm:w-4 sm:h-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <h2 className="text-sm sm:text-base font-semibold text-slate-200">Timeline</h2>
                </div>

                {/* 타임라인 항목 */}
                <div className="relative pl-5 sm:pl-6">
                  {/* 세로 라인 */}
                  <div className="absolute left-[6px] sm:left-[7px] top-2 bottom-2 w-px bg-slate-700" />

                  <div className="flex flex-col gap-6 sm:gap-8">
                    {country.timeline.map((item, idx) => (
                      <div key={idx} className="relative">
                        {/* 동그라미 */}
                        <div className="absolute -left-5 sm:-left-6 top-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-slate-600 bg-slate-900" />

                        <div>
                          <span className="text-[10px] sm:text-xs font-bold text-sky-400 uppercase tracking-wider">{item.dDay}</span>
                          <h3 className="text-sm sm:text-base font-bold text-white mt-0.5 sm:mt-1">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                          {item.actionUrl && item.actionLabel && (
                            <a
                              href={item.actionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 px-3 sm:px-4 py-1.5 bg-slate-700/80 hover:bg-slate-600/80 text-[11px] sm:text-xs font-medium text-white rounded-lg transition-colors"
                            >
                              {item.actionLabel}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 우측 컬럼 */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Alerts 카드 */}
            {country.alerts && country.alerts.length > 0 && (
              <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-950/30 via-slate-900/80 to-slate-900/80 p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400 sm:w-[18px] sm:h-[18px]"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                  <h2 className="text-xs sm:text-sm font-semibold text-rose-300">Alerts</h2>
                </div>
                <ul className="space-y-2 sm:space-y-2.5">
                  {country.alerts.map((alert, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{alert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Checklist 카드 */}
            {country.checklist && country.checklist.length > 0 && (
              <div className="rounded-2xl border border-slate-700/40 bg-gradient-to-br from-sky-950/20 via-slate-900/80 to-slate-900/80 p-5 sm:p-6">
                <h2 className="text-xs sm:text-sm font-bold text-white mb-3 sm:mb-4">Checklist</h2>
                <ul className="space-y-2.5 sm:space-y-3">
                  {country.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-slate-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
