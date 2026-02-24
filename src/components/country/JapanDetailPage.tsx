"use client";

import { useState } from "react";
import { Country } from "@/lib/types";
import { getCountryImage, getFlagUrl } from "@/lib/countryImages";
import { getAllCountries } from "@/lib/data";
import TabNavigation from "./TabNavigation";
import { Accordion, AccordionItem } from "./Accordion";
import WeatherBadge from "./WeatherBadge";
import ExchangeCalculator from "./ExchangeCalculator";

interface JapanDetailPageProps {
  country: Country;
}

export default function JapanDetailPage({ country }: JapanDetailPageProps) {
  const [activeTab, setActiveTab] = useState("preparation");
  const [travelPurpose, setTravelPurpose] = useState<string | null>("tourism");
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
    ...(country.visaTypes && country.visaTypes.length > 0
      ? [
          {
            id: "visaTypes",
            label: "비자 종류",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M7 15h0M2 9.5h20" />
              </svg>
            ),
          },
        ]
      : []),
    {
      id: "cities",
      label: "도시 정보",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[44vh] sm:h-[40vh] lg:h-[36vh] overflow-hidden">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-4xl mx-auto px-5 sm:px-8 pb-5 lg:pb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 flex items-center gap-3">
            <img src={getFlagUrl(country.id, 80)} alt="" className="w-16 h-auto rounded shadow-lg" />
            {country.nameKo}
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-base sm:text-lg text-white/80 uppercase tracking-wider">
              {country.nameEn}
            </p>
            <WeatherBadge countryId={country.id} />
          </div>

          {/* 퀵 인포 스트립 */}
          {quickInfo && (
            <div className="bg-black/30 backdrop-blur-md border border-white/25 rounded-xl max-w-3xl overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x divide-white/25">
                <div className="p-3 sm:p-4 border-r border-b sm:border-b-0 border-white/25">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/80">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-[11px] text-white/80 font-medium uppercase tracking-wider">시차</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.timeDiff}</p>
                </div>
                <div className="p-3 sm:p-4 border-b sm:border-b-0 border-white/25">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/80">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="text-[11px] text-white/80 font-medium uppercase tracking-wider">통화</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.currency}</p>
                </div>
                <div className="p-3 sm:p-4 border-r sm:border-r-0 border-white/25">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/80">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    <span className="text-[11px] text-white/80 font-medium uppercase tracking-wider">전압</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.voltage}</p>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/80">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                    <span className="text-[11px] text-white/80 font-medium uppercase tracking-wider">비행시간</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-tight">{quickInfo.flight}</p>
                </div>
              </div>
            </div>
          )}

          {/* 환율 계산기 */}
          <ExchangeCalculator countryId={country.id} />
        </div>
      </section>

      {/* Tab Navigation */}
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-6 pb-16">
        {activeTab === "preparation" && (
          <PreparationContent
            country={country}
            travelPurpose={travelPurpose}
            onPurposeChange={setTravelPurpose}
          />
        )}
        {activeTab === "safety" && <SafetyContent />}
        {activeTab === "visaTypes" && country.visaTypes && <VisaTypesContent visaTypes={country.visaTypes} />}
        {activeTab === "cities" && country.cities && <CitiesContent cities={country.cities} />}
      </section>
    </div>
  );
}

// 여행 목적에 따라 각 절차의 우선순위 계산 (일본 기준)
function calculateRequirementLevel(
  country: Country,
  travelPurpose: string | null,
  sectionType: "visa" | "entry_registration" | "insurance" | "license"
): "required" | "recommended" | "optional" | null {
  if (!travelPurpose) return null;

  // 여행/관광 목적
  if (travelPurpose === "tourism") {
    if (sectionType === "visa") {
      return null; // 90일 무비자이므로 비자 불필요
    }
    if (sectionType === "entry_registration") {
      if (!country.entryRegistration) return null;
      return "recommended"; // Visit Japan Web 권장
    }
    if (sectionType === "insurance") {
      return "recommended";
    }
    if (sectionType === "license") {
      return "optional";
    }
  }

  // 출장/비즈니스 목적
  if (travelPurpose === "business") {
    if (sectionType === "visa") {
      return null; // 단기 출장은 무비자 가능
    }
    if (sectionType === "entry_registration") {
      return "recommended";
    }
    if (sectionType === "insurance") {
      return "required"; // 비즈니스는 보험 필수
    }
    if (sectionType === "license") {
      return "optional";
    }
  }

  // 유학/어학연수 목적
  if (travelPurpose === "study") {
    if (sectionType === "visa") {
      return "required"; // 유학 비자 필수
    }
    if (sectionType === "entry_registration") {
      return null;
    }
    if (sectionType === "insurance") {
      return "required";
    }
    if (sectionType === "license") {
      return "optional";
    }
  }

  // 취업/일 목적
  if (travelPurpose === "work") {
    if (sectionType === "visa") {
      return "required"; // 취업 비자 필수
    }
    if (sectionType === "entry_registration") {
      return null;
    }
    if (sectionType === "insurance") {
      return "required";
    }
    if (sectionType === "license") {
      return "optional";
    }
  }

  // 워킹홀리데이 목적
  if (travelPurpose === "working_holiday") {
    if (sectionType === "visa") {
      return "required"; // 워킹홀리데이 비자 필수
    }
    if (sectionType === "entry_registration") {
      return null;
    }
    if (sectionType === "insurance") {
      return "required";
    }
    if (sectionType === "license") {
      return "optional";
    }
  }

  return null;
}

// 배지 스타일 반환
function getBadgeStyle(level: "required" | "recommended" | "optional" | null) {
  if (!level) return null;
  const styles = {
    required: { text: "필수", color: "bg-rose-500/20 text-rose-700 dark:text-rose-400" },
    recommended: { text: "권장", color: "bg-amber-500/20 text-amber-700 dark:text-amber-400" },
    optional: { text: "선택", color: "bg-slate-500/20 text-slate-700 dark:text-slate-400" },
  };
  return styles[level];
}


// 여행 준비 탭 컨텐츠 — 카드 그리드 레이아웃 (A)
function PreparationContent({
  country,
  travelPurpose,
  onPurposeChange,
}: {
  country: Country;
  travelPurpose: string | null;
  onPurposeChange: (purpose: string | null) => void;
}) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // 우선순위 계산
  const visaLevel = calculateRequirementLevel(country, travelPurpose, "visa");
  const entryRegLevel = calculateRequirementLevel(country, travelPurpose, "entry_registration");
  const licenseBadge = getBadgeStyle(calculateRequirementLevel(country, travelPurpose, "license"));
  const entryBadge = getBadgeStyle(entryRegLevel);

  const toggleCard = (id: string) => setExpandedCard(expandedCard === id ? null : id);

  // 카드 정의
  interface PrepCard {
    id: string;
    icon: React.ReactNode;
    title: string;
    summary: string;
    badge?: { text: string; color: string };
    detail: React.ReactNode;
  }

  const cards: PrepCard[] = [
    {
      id: "visa",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-sky-500"><path d="M9 12l2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>,
      title: "비자",
      summary: visaLevel === "required"
        ? (travelPurpose === "work" ? "취업비자 필요" : travelPurpose === "study" ? "유학비자 필요" : "워홀비자 필요")
        : "90일 무비자 체류",
      badge: visaLevel === "required"
        ? { text: "필수", color: "bg-rose-500/20 text-rose-700 dark:text-rose-400" }
        : { text: "불필요", color: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400" },
      detail: visaLevel === "required" ? (
        <div className="space-y-3">
          <p className="text-sm">
            {travelPurpose === "work" && "취업 목적 입국 시 취업 비자가 필요합니다."}
            {travelPurpose === "study" && "유학 목적 입국 시 유학 비자가 필요합니다."}
            {travelPurpose === "working_holiday" && "워킹홀리데이 비자가 필요합니다."}
          </p>
          <a href="https://www.kr.emb-japan.go.jp/itpr_ko/visa.html" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-rose-600 text-white rounded-lg text-sm font-medium">
            주한일본대사관 비자 정보 →
          </a>
          {country.passportValidity && (
            <p className="text-sm">여권 유효기간: 최소 <strong className="text-sky-600 dark:text-sky-400">{country.passportValidity.months}개월</strong> 이상</p>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm">한국 여권 소지자는 관광/출장 목적으로 최대 90일간 무비자 체류가 가능합니다.</p>
          {country.passportValidity && (
            <p className="text-sm">여권 유효기간: 최소 <strong className="text-sky-600 dark:text-sky-400">{country.passportValidity.months}개월</strong> 이상</p>
          )}
        </div>
      ),
    },
    ...(country.entryRegistration ? [{
      id: "vjw",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-violet-500"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
      title: country.entryRegistration.type,
      summary: country.entryRegistration.required ? "사전 등록 필수" : "등록 시 입국 간소화",
      badge: entryBadge || undefined,
      detail: (
        <div className="space-y-3">
          <p className="text-sm">{country.entryRegistration.description}</p>
          <a href={country.entryRegistration.applicationUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium">
            {country.entryRegistration.type} 신청하기 →
          </a>
        </div>
      ),
    }] as PrepCard[] : []),
    {
      id: "insurance",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
      title: "보험",
      summary: "여행자 보험 가입 추천",
      badge: { text: "권장", color: "bg-amber-500/20 text-amber-700 dark:text-amber-400" },
      detail: (
        <div className="space-y-2 text-sm">
          <p>일본은 의료비가 비싸므로 여행자 보험 가입을 강력히 권장합니다.</p>
          <ul className="space-y-1">
            <li className="flex gap-2"><span className="text-emerald-500">✓</span> 의료비 보장 (최소 3천만원)</li>
            <li className="flex gap-2"><span className="text-emerald-500">✓</span> 휴대품 손해 (분실/도난)</li>
            <li className="flex gap-2"><span className="text-emerald-500">✓</span> 항공기 지연 보상</li>
          </ul>
        </div>
      ),
    },
    {
      id: "comm",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-blue-500"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1"/></svg>,
      title: "통신",
      summary: "eSIM 추천 (15,000원~)",
      detail: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center p-2 bg-sky-50 dark:bg-sky-950/30 rounded-lg">
            <span className="font-medium">eSIM (추천)</span><span className="text-xs text-slate-500">~15,000원</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <span className="font-medium">현지 유심</span><span className="text-xs text-slate-500">~25,000원</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <span className="font-medium">국제 로밍</span><span className="text-xs text-slate-500">9,900원~/일</span>
          </div>
        </div>
      ),
    },
    {
      id: "license",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-slate-500"><rect x="1" y="6" width="22" height="12" rx="2"/><circle cx="7" cy="15" r="1.5"/><circle cx="17" cy="15" r="1.5"/><path d="M5 6V4a1 1 0 011-1h4l2 3"/></svg>,
      title: "운전면허",
      summary: "국제운전면허증 또는 JAF 번역본",
      badge: licenseBadge || undefined,
      detail: (
        <div className="space-y-2 text-sm">
          <p>한국 면허로 운전하려면 <strong>국제운전면허증(IDP)</strong> 또는 <strong>JAF 번역본</strong>이 필요합니다.</p>
          <ul className="space-y-1">
            <li>• IDP: 경찰서/면허시험장 발급 (8,500원)</li>
            <li>• JAF 번역본: 한국 대사관 또는 JAF 발급</li>
          </ul>
        </div>
      ),
    },
    {
      id: "entry",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-teal-500"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
      title: "입국카드",
      summary: "Visit Japan Web 사용 시 불필요",
      detail: (
        <div className="text-sm space-y-2">
          <p>Visit Japan Web 사용 시 자동 입력되어 별도 작성이 불필요합니다.</p>
          <p className="text-amber-700 dark:text-amber-300 text-xs">💡 기내 배포 종이 입국카드는 사용하지 않아도 됩니다.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {/* 여행 목적 선택기 */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3">
        <div className="flex items-center gap-2 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-sky-600 dark:text-sky-400">
            <path d="M6 20h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            <line x1="12" y1="11" x2="12" y2="15"/>
            <line x1="10" y1="13" x2="14" y2="13"/>
          </svg>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">여행 목적</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">방문 목적에 따라 필요한 절차가 달라집니다</p>
        <select
          value={travelPurpose || ""}
          onChange={(e) => onPurposeChange(e.target.value || null)}
          className="sm:ml-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="여행 목적 선택"
        >
          <option value="tourism">여행 / 관광</option>
          <option value="business">출장 / 비즈니스</option>
          <option value="study">유학 / 어학연수</option>
          <option value="work">취업 / 일</option>
          <option value="working_holiday">워킹홀리데이</option>
        </select>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-3 gap-2.5">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => toggleCard(card.id)}
            className={`text-left p-3 rounded-xl border transition-all ${
              expandedCard === card.id
                ? "border-sky-300 dark:border-sky-600 bg-sky-50/50 dark:bg-sky-950/20 ring-1 ring-sky-200 dark:ring-sky-800"
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-sky-200 hover:bg-sky-50/30 hover:shadow-sm dark:hover:border-sky-800 dark:hover:bg-sky-950/10"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="leading-none">{card.icon}</span>
              {card.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${card.badge.color}`}>
                  {card.badge.text}
                </span>
              )}
            </div>
            <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{card.title}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{card.summary}</p>
          </button>
        ))}
      </div>

      {/* 확장된 카드 상세 */}
      {expandedCard && (
        <div className="animate-[slideDown_0.3s_ease-out] bg-gradient-to-br from-sky-50 via-white to-sky-50/50 dark:from-sky-950/40 dark:via-slate-900/80 dark:to-sky-950/20 border-2 border-sky-300 dark:border-sky-700 rounded-xl p-4 shadow-lg shadow-sky-100/50 dark:shadow-sky-900/30 ring-1 ring-sky-200/50 dark:ring-sky-800/30">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-sky-900 dark:text-sky-100 flex items-center gap-2">
              <span>{cards.find(c => c.id === expandedCard)?.icon}</span>
              {cards.find(c => c.id === expandedCard)?.title}
              {cards.find(c => c.id === expandedCard)?.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${cards.find(c => c.id === expandedCard)?.badge?.color}`}>
                  {cards.find(c => c.id === expandedCard)?.badge?.text}
                </span>
              )}
            </h3>
            <button onClick={() => setExpandedCard(null)} className="text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 p-1 rounded-lg hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="border-t border-sky-200/60 dark:border-sky-800/40 pt-3">
            {cards.find(c => c.id === expandedCard)?.detail}
          </div>
        </div>
      )}

      {/* 출국 체크리스트 (항상 표시) */}
      <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-500"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          출국 체크리스트
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {["여권 (유효기간 6개월↑)", "항공권 예약 확인서", "숙소 바우처", "여행자 보험", "신용카드 (해외결제)", "엔화 현금", "변환 어댑터", "상비약"].map((item, idx) => (
            <label key={idx} className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span className="text-xs text-slate-700 dark:text-slate-300">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

// 안전·긴급 탭 컨텐츠
function SafetyContent() {
  return (
    <Accordion>
      <AccordionItem
        title="안전 정보"
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
        defaultOpen={true}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">치안</h4>
            <p className="text-sm mb-2">일본은 전반적으로 치안이 매우 좋은 편이나, 관광지에서는 소매치기 주의가 필요합니다.</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
            <h4 className="font-semibold text-rose-900 dark:text-rose-200 mb-2">⚠️ 주의사항</h4>
            <ul className="space-y-1 text-sm text-rose-800 dark:text-rose-300">
              <li>• 신주쿠/시부야 번화가에서 호객행위 주의</li>
              <li>• 지진 발생 시 건물 밖으로 대피 금지 (낙하물 위험)</li>
              <li>• 여름철 폭염, 겨울철 폭설 주의</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title="긴급 연락처"
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>}
      >
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <span className="font-semibold">경찰</span>
            <a href="tel:110" className="text-sky-600 dark:text-sky-400 font-mono text-lg">110</a>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <span className="font-semibold">소방/구급</span>
            <a href="tel:119" className="text-rose-600 dark:text-rose-400 font-mono text-lg">119</a>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <span className="font-semibold">주일 한국대사관</span>
            <a href="tel:+81-3-3452-7611" className="text-slate-600 dark:text-slate-400 font-mono">+81-3-3452-7611</a>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title="분실 시 대처법"
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">여권 분실</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>가까운 경찰서에서 분실 신고서 발급</li>
              <li>한국 대사관 방문 (여권 사진 2매, 신분증 지참)</li>
              <li>여행증명서 또는 신규 여권 발급</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">카드 분실</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>즉시 카드사에 분실 신고 (24시간 콜센터)</li>
              <li>경찰서 방문하여 분실 신고서 발급</li>
              <li>보험 가입 시 휴대품 손해 청구</li>
            </ol>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

// 비자 종류 탭 컨텐츠
function VisaTypesContent({ visaTypes }: { visaTypes: NonNullable<Country["visaTypes"]> }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">비자 종류</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">장기 체류 및 특수 목적에 필요한 비자 정보입니다.</p>
      <div className="flex flex-col gap-3">
        {visaTypes.map((visa, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{visa.name}</h4>
              {visa.fee && (
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full">{visa.fee}</span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">{visa.duration}</p>
              {visa.processingTime && <p className="text-xs text-slate-500">심사 {visa.processingTime}</p>}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{visa.description}</p>
            {visa.applicationUrl && (
              <a href={visa.applicationUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-3 py-1.5 bg-violet-500/15 hover:bg-violet-500/25 text-xs font-medium text-violet-600 dark:text-violet-300 rounded-lg transition-colors">
                신청하기 →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 도시 정보 탭 컨텐츠
function CitiesContent({ cities }: { cities: { name: string; nameEn: string; image: string }[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">인기 도시</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cities.map((city, idx) => (
          <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
            <img src={city.image} alt={city.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110 group-hover:saturate-[1.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-all duration-500 group-hover:from-sky-900/80 group-hover:via-sky-900/20 group-hover:to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-inset ring-white/40 rounded-xl" />
            <div className="relative z-10 flex flex-col justify-end h-full p-5">
              <p className="text-sm text-white/50 uppercase tracking-wider mb-1 transition-all duration-400 group-hover:text-sky-200 group-hover:tracking-[0.2em]">{city.nameEn}</p>
              <h4 className="text-2xl font-bold text-white transition-all duration-400 group-hover:translate-y-[-4px] group-hover:text-3xl group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{city.name}</h4>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 text-center">
        도시별 상세 정보는 곧 업데이트됩니다.
      </p>
    </div>
  );
}
