"use client";

import { useState } from "react";
import { Country } from "@/lib/types";
import { getCountryImage, getFlagUrl } from "@/lib/countryImages";
import { getAllCountries } from "@/lib/data";
import TabNavigation from "./TabNavigation";
import { Accordion, AccordionItem } from "./Accordion";

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
      <section className="relative h-[55vh] sm:h-[50vh] lg:h-[45vh] overflow-hidden">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Hero Content */}
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
        {activeTab === "cities" && <CitiesContent />}
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
    emoji: string;
    title: string;
    summary: string;
    badge?: { text: string; color: string };
    detail: React.ReactNode;
  }

  const cards: PrepCard[] = [
    {
      id: "visa",
      emoji: "📋",
      title: visaLevel === "required" ? "비자" : "무비자",
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
      emoji: "🌐",
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
      emoji: "🛡",
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
      emoji: "📱",
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
      id: "money",
      emoji: "💰",
      title: "환전",
      summary: "JPY (엔) · 현금 40%",
      detail: (
        <div className="space-y-2 text-sm">
          <p>일본은 현금 사용이 많은 편. 소액 식당은 카드 불가 가능.</p>
          <div className="bg-sky-50 dark:bg-sky-950/30 rounded-lg p-2.5">
            <p className="font-medium text-sky-900 dark:text-sky-200">추천: 현금 40% + 카드 60%</p>
          </div>
          <p>한국 시내 은행 환전이 유리. 현지 세븐일레븐 ATM도 가능.</p>
        </div>
      ),
    },
    {
      id: "license",
      emoji: "🚗",
      title: "운전면허",
      summary: "IDP 또는 JAF 번역본",
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
      emoji: "📄",
      title: "입국카드",
      summary: "VJW 사용 시 불필요",
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 dark:text-sky-400">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
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
          <option value="tourism">🏖️ 여행/관광</option>
          <option value="business">💼 출장/비즈니스</option>
          <option value="study">📚 유학/어학연수</option>
          <option value="work">💻 취업/일</option>
          <option value="working_holiday">🌏 워킹홀리데이</option>
        </select>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-2 gap-2.5">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => toggleCard(card.id)}
            className={`text-left p-3 rounded-xl border transition-all ${
              expandedCard === card.id
                ? "border-sky-300 dark:border-sky-600 bg-sky-50/50 dark:bg-sky-950/20 ring-1 ring-sky-200 dark:ring-sky-800"
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-lg leading-none">{card.emoji}</span>
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
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{cards.find(c => c.id === expandedCard)?.emoji}</span>
              {cards.find(c => c.id === expandedCard)?.title}
            </h3>
            <button onClick={() => setExpandedCard(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          {cards.find(c => c.id === expandedCard)?.detail}
        </div>
      )}

      {/* 출국 체크리스트 (항상 표시) */}
      <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <span>✅</span> 출국 체크리스트
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

// 도시 정보 탭 컨텐츠
function CitiesContent() {
  const cities = [
    { name: "도쿄", nameEn: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop" },
    { name: "오사카", nameEn: "Osaka", image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=600&fit=crop" },
    { name: "교토", nameEn: "Kyoto", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop" },
    { name: "후쿠오카", nameEn: "Fukuoka", image: "https://images.unsplash.com/photo-1578469645742-27e177a732f6?w=800&h=600&fit=crop" },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">인기 도시</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cities.map((city, idx) => (
          <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
            <img src={city.image} alt={city.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-5">
              <p className="text-sm text-white/70 uppercase tracking-wider mb-1">{city.nameEn}</p>
              <h4 className="text-2xl font-bold text-white">{city.name}</h4>
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
