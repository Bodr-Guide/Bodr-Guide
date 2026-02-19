"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Country, VISA_STATUS_MAP } from "@/lib/types";
import { getCountryImage, getFlagUrl } from "@/lib/countryImages";
import TabNavigation from "./TabNavigation";
import { Accordion, AccordionItem } from "./Accordion";

interface CountryDetailPageProps {
  country: Country;
}

// 비자 상태 영어 라벨
const VISA_LABEL_EN: Record<string, string> = {
  visa_free: "VISA FREE",
  visa_required: "VISA REQUIRED",
  visa_on_arrival: "VISA ON ARRIVAL",
  e_visa: "E-VISA",
};

export default function CountryDetailPage({ country }: CountryDetailPageProps) {
  const [activeTab, setActiveTab] = useState("preparation");
  const heroImage = getCountryImage(country.id);
  const quickInfo = country.quickInfo;

  const tabs = [
    {
      id: "preparation",
      label: "여행 준비",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
    },
    {
      id: "safety",
      label: "안전·긴급",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* 히어로 섹션 */}
      <section className="relative h-[55vh] sm:h-[50vh] lg:h-[45vh] overflow-hidden">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* 히어로 콘텐츠 */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-4xl mx-auto px-5 sm:px-8 pb-8 lg:pb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 flex items-center gap-3">
            <img src={getFlagUrl(country.id, 80)} alt="" className="w-16 h-auto rounded shadow-lg" />
            {country.nameKo}
          </h1>
          <p className="text-base sm:text-lg text-white/80 uppercase tracking-wider mb-4">
            {country.nameEn}
          </p>

          {/* 퀵 인포 스트립 */}
          {quickInfo && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl max-w-3xl overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x divide-white/15">
                <div className="p-3 sm:p-4 border-r border-b sm:border-b-0 border-white/15">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-[11px] text-white/60 font-medium uppercase tracking-wider">시차</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.timeDiff}</p>
                </div>
                <div className="p-3 sm:p-4 border-b sm:border-b-0 border-white/15">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="text-[11px] text-white/60 font-medium uppercase tracking-wider">통화</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.currency}</p>
                </div>
                <div className="p-3 sm:p-4 border-r sm:border-r-0 border-white/15">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    <span className="text-[11px] text-white/60 font-medium uppercase tracking-wider">전압</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.voltage}</p>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                    <span className="text-[11px] text-white/60 font-medium uppercase tracking-wider">비행시간</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.flight}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 탭 콘텐츠 */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-6 pb-16">
        {activeTab === "preparation" && <PreparationTab country={country} />}
        {activeTab === "safety" && <SafetyTab country={country} />}
      </section>
    </div>
  );
}

// ──────────────────────────────────────
// 여행 준비 탭
// ──────────────────────────────────────
function PreparationTab({ country }: { country: Country }) {
  const visaInfo = VISA_STATUS_MAP[country.visaStatus];
  const visaLabelEn = VISA_LABEL_EN[country.visaStatus] || visaInfo.label;

  return (
    <div className="space-y-4">
      {/* 여행 목적 선택기 (컴팩트) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3">
        <div className="flex items-center gap-2 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 dark:text-sky-400">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">여행 목적</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">방문 목적에 따라 필요한 절차가 달라집니다</p>
        <select
          className="sm:ml-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-transparent"
          aria-label="여행 목적 선택"
          defaultValue="tourism"
        >
          <option value="tourism">🏖️ 여행/관광</option>
          <option value="business">💼 출장/비즈니스</option>
          <option value="study">📚 유학/어학연수</option>
          <option value="work">💻 취업/일</option>
        </select>
      </div>

      {/* 입출국 섹션 */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">입출국</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      <Accordion>
        {/* 비자 요건 */}
        <AccordionItem
          title="비자 요건"
          badge={visaInfo.label}
          badgeColor={
            country.visaStatus === "visa_free"
              ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
              : country.visaStatus === "visa_required"
              ? "bg-rose-500/20 text-rose-700 dark:text-rose-400"
              : "bg-amber-500/20 text-amber-700 dark:text-amber-400"
          }
          defaultOpen={true}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
            </svg>
          }
        >
          <div className="space-y-4">
            {/* 비자 상태 표시 */}
            <div
              className={`rounded-lg p-4 ${
                country.visaStatus === "visa_free"
                  ? "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                  : country.visaStatus === "visa_required"
                  ? "bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800"
                  : "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800"
              }`}
            >
              <h4
                className={`font-semibold mb-2 ${
                  country.visaStatus === "visa_free"
                    ? "text-emerald-900 dark:text-emerald-200"
                    : country.visaStatus === "visa_required"
                    ? "text-rose-900 dark:text-rose-200"
                    : "text-amber-900 dark:text-amber-200"
                }`}
              >
                {country.visaStatus === "visa_free" && "✅ "}
                {country.visaStatus === "visa_required" && "⚠️ "}
                {country.visaStatus === "visa_on_arrival" && "🛬 "}
                {country.visaStatus === "e_visa" && "💻 "}
                {visaLabelEn}
              </h4>
              {country.visaNote && (
                <p
                  className={`text-sm ${
                    country.visaStatus === "visa_free"
                      ? "text-emerald-800 dark:text-emerald-300"
                      : country.visaStatus === "visa_required"
                      ? "text-rose-800 dark:text-rose-300"
                      : "text-amber-800 dark:text-amber-300"
                  }`}
                >
                  {country.visaNote}
                </p>
              )}
            </div>

            {/* 여권 유효기간 */}
            {country.passportValidity && (
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">여권 유효기간 요건</h4>
                <p>
                  입국일 기준 최소{" "}
                  <span className="font-semibold text-sky-600 dark:text-sky-400">
                    {country.passportValidity.months}개월
                  </span>{" "}
                  이상
                </p>
              </div>
            )}

            {/* 무비자 체류일 */}
            {country.visaFreeStayDays && (
              <div className="bg-slate-100/60 dark:bg-slate-800/60 rounded-lg px-4 py-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">최대 체류 기간</span>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {country.visaFreeStayDays}일
                </p>
              </div>
            )}
          </div>
        </AccordionItem>

        {/* 입국 등록 (ESTA, ETA 등) */}
        {country.entryRegistration && (
          <AccordionItem
            title={`전자여행허가 (${country.entryRegistration.type})`}
            badge={country.entryRegistration.required ? "필수" : "권장"}
            badgeColor={
              country.entryRegistration.required
                ? "bg-rose-500/20 text-rose-700 dark:text-rose-400"
                : "bg-amber-500/20 text-amber-700 dark:text-amber-400"
            }
            defaultOpen={false}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            }
          >
            <div className="space-y-4">
              <p>{country.entryRegistration.description}</p>
              <a
                href={country.entryRegistration.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white rounded-lg font-medium transition-colors shadow-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {country.entryRegistration.type} 신청하기
              </a>
            </div>
          </AccordionItem>
        )}

        {/* 비자 종류 */}
        {country.visaTypes && country.visaTypes.length > 0 && (
          <AccordionItem
            title="비자 종류"
            defaultOpen={false}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M7 15h0M2 9.5h20" />
              </svg>
            }
          >
            <div className="flex flex-col gap-3">
              {country.visaTypes.map((visa, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/60 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{visa.name}</h4>
                    <div className="flex items-center gap-2">
                      {visa.fee && (
                        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                          {visa.fee}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">{visa.duration}</p>
                    {visa.processingTime && (
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        심사 {visa.processingTime}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{visa.description}</p>
                  {visa.applicationUrl && (
                    <a
                      href={visa.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2.5 px-3 py-1.5 bg-violet-500/15 hover:bg-violet-500/25 text-xs font-medium text-violet-600 dark:text-violet-300 rounded-lg transition-colors"
                    >
                      신청하기 →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </AccordionItem>
        )}

      </Accordion>

      {/* 여행 준비 섹션 */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">여행 준비</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      <Accordion>
        {/* 준비 타임라인 */}
        {country.timeline && country.timeline.length > 0 && (
          <AccordionItem
            title="준비 타임라인"
            defaultOpen={true}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            }
          >
            <div className="relative pl-5">
              {/* 세로 라인 */}
              <div className="absolute left-[6px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />

              <div className="flex flex-col gap-6">
                {country.timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
                    <div>
                      <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">{item.dDay}</span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                      {item.actionUrl && item.actionLabel && (
                        <a
                          href={item.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-3 py-1.5 bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-700/80 dark:hover:bg-slate-600/80 text-xs font-medium text-slate-900 dark:text-white rounded-lg transition-colors"
                        >
                          {item.actionLabel}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionItem>
        )}

        {/* 보험 */}
        <AccordionItem
          title="보험"
          badge="권장"
          defaultOpen={false}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          }
        >
          <div className="space-y-4">
            <p>해외 의료비는 높은 편이므로 여행자 보험 가입을 권장합니다.</p>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">추천 보장 항목</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span>의료비 보장 (최소 3천만원 이상)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span>휴대품 손해 (분실/도난)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span>항공기 지연 보상</span>
                </li>
              </ul>
            </div>
          </div>
        </AccordionItem>

        {/* 통신 */}
        <AccordionItem
          title="통신 (유심/eSIM/로밍)"
          defaultOpen={false}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M12 18h.01" />
            </svg>
          }
        >
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">추천 옵션</h4>
            <div className="grid gap-3">
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">eSIM (추천)</p>
                <p className="text-sm">출국 전 구매 후 현지 도착 즉시 활성화. 유심 교체 불필요.</p>
              </div>
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">현지 유심</p>
                <p className="text-sm">공항 또는 현지 매장에서 구매 가능. 데이터 전용 유심 다수.</p>
              </div>
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">국제 로밍</p>
                <p className="text-sm">별도 설정 필요 없이 즉시 사용 가능. 통신사 앱에서 신청.</p>
              </div>
            </div>
          </div>
        </AccordionItem>

        {/* 환전 */}
        {country.quickInfo && (
          <AccordionItem
            title="돈 준비 (환전)"
            defaultOpen={false}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
          >
            <div className="space-y-4">
              <div className="bg-slate-100/60 dark:bg-slate-800/60 rounded-lg px-4 py-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">현지 통화</span>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{country.quickInfo.currency}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">환전 팁</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>한국 시내 은행에서 미리 환전하면 환율 우대</li>
                  <li>현지 ATM에서 직접 인출도 가능 (수수료 확인)</li>
                  <li>신용카드 해외결제 가능 여부 출국 전 확인</li>
                </ul>
              </div>
            </div>
          </AccordionItem>
        )}

        {/* 운전면허 */}
        {country.drivingLicense && (
          <AccordionItem
            title="운전면허 정보"
            defaultOpen={false}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            }
          >
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {country.drivingLicense.idpAccepted && (
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                    국제운전면허증(IDP) 인정
                  </span>
                )}
                {country.drivingLicense.directRecognition && (
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-400">
                    한국 면허 직접 인정
                  </span>
                )}
                {country.drivingLicense.minimumAge && (
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-500/20 text-slate-700 dark:text-slate-400">
                    최소 {country.drivingLicense.minimumAge}세
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed">{country.drivingLicense.note}</p>
            </div>
          </AccordionItem>
        )}

        {/* 체크리스트 */}
        {country.checklist && country.checklist.length > 0 && (
          <AccordionItem
            title="출국 체크리스트"
            defaultOpen={true}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            }
          >
            <div className="space-y-2">
              {country.checklist.map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
}

// ──────────────────────────────────────
// 안전·긴급 탭
// ──────────────────────────────────────
function SafetyTab({ country }: { country: Country }) {
  const hasAlerts = country.alerts && country.alerts.length > 0;
  const hasNotes = country.importantNotes && country.importantNotes.length > 0;

  if (!hasAlerts && !hasNotes) {
    return (
      <div className="text-center py-12 text-slate-500">
        등록된 안전 정보가 없습니다.
      </div>
    );
  }

  return (
    <Accordion>
      {/* 주의사항 */}
      {hasAlerts && (
        <AccordionItem
          title="주의사항"
          badge={`${country.alerts!.length}건`}
          badgeColor="bg-rose-500/20 text-rose-700 dark:text-rose-400"
          defaultOpen={true}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          }
        >
          <div className="space-y-2">
            {country.alerts!.map((alert, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 bg-rose-50 dark:bg-rose-950/30 rounded-lg">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span className="text-sm text-rose-800 dark:text-rose-300 leading-relaxed">{alert}</span>
              </div>
            ))}
          </div>
        </AccordionItem>
      )}

      {/* 중요 안내 */}
      {hasNotes && (
        <AccordionItem
          title="중요 안내"
          defaultOpen={true}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          }
        >
          <div className="space-y-2">
            {country.importantNotes.map((note, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 bg-sky-50 dark:bg-sky-950/30 rounded-lg">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                <span className="text-sm text-sky-800 dark:text-sky-300 leading-relaxed">{note}</span>
              </div>
            ))}
          </div>
        </AccordionItem>
      )}
    </Accordion>
  );
}
