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


// 여행 준비 탭 컨텐츠 (출입국 + 여행준비 통합)
function PreparationContent({
  country,
  travelPurpose,
  onPurposeChange,
}: {
  country: Country;
  travelPurpose: string | null;
  onPurposeChange: (purpose: string | null) => void;
}) {
  // 우선순위 계산
  const visaLevel = calculateRequirementLevel(country, travelPurpose, "visa");
  const entryRegLevel = calculateRequirementLevel(country, travelPurpose, "entry_registration");
  const licenseLevel = calculateRequirementLevel(country, travelPurpose, "license");

  const visaBadge = getBadgeStyle(visaLevel);
  const entryBadge = getBadgeStyle(entryRegLevel);
  const licenseBadge = getBadgeStyle(licenseLevel);

  return (
    <div className="space-y-6">
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
          value={travelPurpose || ""}
          onChange={(e) => onPurposeChange(e.target.value || null)}
          className="sm:ml-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-transparent"
          aria-label="여행 목적 선택"
        >
          <option value="tourism">🏖️ 여행/관광</option>
          <option value="business">💼 출장/비즈니스</option>
          <option value="study">📚 유학/어학연수</option>
          <option value="work">💻 취업/일</option>
          <option value="working_holiday">🌏 워킹홀리데이</option>
        </select>
      </div>

      {/* 입출국 섹션 */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">입출국</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      <Accordion>
      {/* 비자 요건 - 비자가 필요한 목적일 때만 표시 */}
      {visaLevel === "required" && (
        <AccordionItem
          title="비자 요건"
          badge={visaBadge?.text}
          badgeColor={visaBadge?.color}
          defaultOpen={true}
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/></svg>}
        >
          <div className="space-y-4">
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
              <h4 className="font-semibold text-rose-900 dark:text-rose-200 mb-2">⚠️ 비자 필수</h4>
              <p className="text-sm text-rose-800 dark:text-rose-300">
                {travelPurpose === "work" && "취업 목적으로 입국하려면 취업 비자가 필요합니다."}
                {travelPurpose === "study" && "유학 목적으로 입국하려면 유학 비자가 필요합니다."}
                {travelPurpose === "working_holiday" && "워킹홀리데이 비자가 필요합니다."}
              </p>
            </div>

            {/* 비자 신청 링크 버튼 */}
            <a
              href="https://www.kr.emb-japan.go.jp/itpr_ko/visa.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              주한일본대사관 비자 정보
            </a>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">비자 신청 절차</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>주한 일본 대사관/영사관 방문 또는 온라인 사전 신청</li>
                <li>필요 서류 제출 (재직증명서, 입학허가서 등)</li>
                <li>심사 대기 (약 5-10일)</li>
                <li>비자 발급 및 수령</li>
              </ol>
            </div>
            {country.passportValidity && (
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">여권 유효기간 요건</h4>
                <p>입국일 기준 최소 <span className="font-semibold text-sky-600 dark:text-sky-400">{country.passportValidity.months}개월</span> 이상</p>
              </div>
            )}
          </div>
        </AccordionItem>
      )}

      {/* 무비자 안내 - 여행/출장 목적일 때만 표시 */}
      {(travelPurpose === "tourism" || travelPurpose === "business") && (
        <AccordionItem
          title="무비자 입국"
          badge="무비자"
          badgeColor="bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
          defaultOpen={true}
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/></svg>}
        >
          <div className="space-y-4">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">✅ 비자 불필요</h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                한국 여권 소지자는 관광/출장 목적으로 최대 90일간 무비자 체류가 가능합니다.
              </p>
            </div>
            {country.passportValidity && (
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">여권 유효기간 요건</h4>
                <p>입국일 기준 최소 <span className="font-semibold text-sky-600 dark:text-sky-400">{country.passportValidity.months}개월</span> 이상</p>
              </div>
            )}
          </div>
        </AccordionItem>
      )}

      {country.entryRegistration && (
        <AccordionItem
          title={`전자여행허가 (${country.entryRegistration.type})`}
          badge={entryBadge?.text || (country.entryRegistration.required ? "필수" : "권장")}
          badgeColor={entryBadge?.color}
          defaultOpen={false}
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/></svg>}
        >
          <div className="space-y-4">
            <p>{country.entryRegistration.description || `일본 방문 전 온라인 사전 등록이 ${country.entryRegistration.required ? "필수" : "권장"}됩니다.`}</p>

            {/* 신청 링크 버튼 */}
            <a
              href={country.entryRegistration.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              {country.entryRegistration.type} 신청하기
            </a>

            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">신청 방법</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Visit Japan Web 접속</li>
                <li>계정 생성 및 로그인</li>
                <li>여행 정보 입력</li>
                <li>입국 심사 QR코드 발급</li>
              </ol>
            </div>
          </div>
        </AccordionItem>
      )}

      <AccordionItem
        title="입국카드 작성법"
        defaultOpen={false}
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>}
      >
        <div className="space-y-3">
          <p>Visit Japan Web 사용시 자동으로 입력되어 별도 작성 불필요합니다.</p>
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm font-medium text-amber-900 dark:text-amber-200">💡 팁: 기내에서 배포되는 종이 입국카드는 사용하지 않아도 됩니다.</p>
          </div>
        </div>
      </AccordionItem>
    </Accordion>

      {/* 여행 준비 섹션 */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">여행 준비</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

    <Accordion>
      <AccordionItem
        title="운전면허 상호인정"
        badge={licenseBadge?.text}
        badgeColor={licenseBadge?.color}
        defaultOpen={false}
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>}
      >
        <p>한국 운전면허증으로 일본에서 운전하려면 <strong>국제운전면허증(IDP)</strong> 또는 <strong>일본어 번역본</strong>이 필요합니다.</p>
        <div className="mt-3 space-y-2">
          <p className="font-semibold text-slate-900 dark:text-white">발급 방법:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>국제운전면허증: 경찰서 또는 운전면허시험장에서 발급 (수수료 8,500원)</li>
            <li>일본어 번역본: 한국 대사관 또는 JAF(일본자동차연맹)에서 발급</li>
          </ul>
        </div>
      </AccordionItem>

      <AccordionItem
        title="보험"
        badge="권장"
        defaultOpen={false}
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
      >
        <div className="space-y-4">
          <p>일본은 의료비가 비싸므로 여행자 보험 가입을 강력히 권장합니다.</p>
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

      <AccordionItem
        title="통신 (유심/eSIM/로밍)"
        defaultOpen={false}
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>}
      >
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">추천 옵션</h4>
          <div className="grid gap-3">
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">eSIM (추천)</p>
              <p className="text-sm mb-2">즉시 활성화, 유심 교체 불필요</p>
              <p className="text-xs text-slate-500">가격: 5일 5GB 기준 약 15,000원</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">현지 유심</p>
              <p className="text-sm mb-2">공항 또는 편의점에서 구매 가능</p>
              <p className="text-xs text-slate-500">가격: 7일 무제한 기준 약 25,000원</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">국제 로밍</p>
              <p className="text-sm mb-2">별도 설정 필요 없이 즉시 사용 가능</p>
              <p className="text-xs text-slate-500">가격: 통신사별 상이 (1일 9,900원~)</p>
              <div className="mt-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                <p className="text-xs text-amber-900 dark:text-amber-200">💡 주요 통신사: SKT, KT, LG U+ 앱에서 신청</p>
              </div>
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title="돈 준비 (환율/환전)"
        defaultOpen={false}
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">현금 vs 카드</h4>
            <p className="text-sm mb-3">일본은 여전히 현금 사용이 많은 편입니다. 소액 식당이나 전통 상점에서는 카드를 받지 않는 곳도 있습니다.</p>
            <div className="bg-sky-50 dark:bg-sky-950/30 rounded-lg p-3 text-sm">
              <p className="font-semibold text-sky-900 dark:text-sky-200 mb-1">💡 추천 비율</p>
              <p>현금 40% + 카드 60%</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">환전 팁</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>한국에서 미리 환전이 유리 (공항보다 시내 은행 환율 좋음)</li>
              <li>현지 세븐일레븐 ATM에서 원화 직접 인출 가능</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title="출국 체크리스트"
        defaultOpen={true}
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>}
      >
        <div className="space-y-2">
          {["여권 (유효기간 6개월 이상)", "항공권 예약 확인서", "숙소 예약 바우처", "여행자 보험 증권", "신용카드 (해외결제 가능)", "일본 엔화 현금", "충전기 및 변환 어댑터", "상비약"].map((item, idx) => (
            <label key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
      </AccordionItem>
    </Accordion>

    {/* 보험 광고 섹션 */}
    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            추천 여행자 보험 (광고)
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            일본 여행에 최적화된 보험 상품을 비교하고 가입하세요
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <a
              href="#"
              className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <span className="text-sm font-medium text-slate-900 dark:text-white">삼성화재 해외여행보험</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 group-hover:text-blue-500">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <span className="text-sm font-medium text-slate-900 dark:text-white">현대해상 해외여행보험</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 group-hover:text-blue-500">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-600 dark:text-slate-300">단서 조항:</strong> 본 서비스는 보험 상품을 직접 판매하지 않으며, 제휴 플랫폼의 광고를 제공합니다. 보험 가입 및 보장과 관련한 모든 책임은 해당 보험사에 있습니다.
          </p>
        </div>
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
