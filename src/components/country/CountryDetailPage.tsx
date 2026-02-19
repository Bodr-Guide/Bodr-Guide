"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect, useCallback } from "react";
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
// 여행 준비 탭 — 국가별 레이아웃 분기
// ──────────────────────────────────────
function PreparationTab({ country }: { country: Country }) {
  if (country.id === "TH") return <ChecklistLayout country={country} />;
  if (country.id === "VN") return <SwipeLayout country={country} />;
  return <AccordionLayout country={country} />;
}

// ──────────────────────────────────────
// B. 한 줄 체크리스트 레이아웃 (태국)
// ──────────────────────────────────────
function ChecklistLayout({ country }: { country: Country }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const visaInfo = VISA_STATUS_MAP[country.visaStatus];

  const toggle = (id: string) => setExpandedItem(expandedItem === id ? null : id);

  // 체크리스트 항목 정의
  interface CheckItem {
    id: string;
    emoji: string;
    title: string;
    status: string;
    statusColor: string;
    section: "entry" | "prep";
    detail: React.ReactNode;
  }

  const items: CheckItem[] = [
    {
      id: "visa", emoji: "📋", title: "비자", section: "entry",
      status: visaInfo.label,
      statusColor: country.visaStatus === "visa_free" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400",
      detail: (
        <div className="space-y-2 text-sm">
          {country.visaNote && <p>{country.visaNote}</p>}
          {country.passportValidity && <p>여권 유효기간: 최소 <strong>{country.passportValidity.months}개월</strong> 이상</p>}
          {country.visaFreeStayDays && <p>최대 체류: <strong>{country.visaFreeStayDays}일</strong></p>}
        </div>
      ),
    },
    ...(country.entryRegistration ? [{
      id: "entry_reg", emoji: "🌐", title: `전자여행허가 (${country.entryRegistration.type})`, section: "entry" as const,
      status: country.entryRegistration.required ? "필수" : "권장",
      statusColor: country.entryRegistration.required ? "text-rose-600 dark:text-rose-400" : "text-amber-600 dark:text-amber-400",
      detail: (
        <div className="space-y-2 text-sm">
          <p>{country.entryRegistration.description}</p>
          <a href={country.entryRegistration.applicationUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-medium">
            신청하기 →
          </a>
        </div>
      ),
    }] as CheckItem[] : []),
    ...(country.visaTypes && country.visaTypes.length > 0 ? [{
      id: "visa_types", emoji: "📄", title: "비자 종류", section: "entry" as const,
      status: `${country.visaTypes.length}개 종류`,
      statusColor: "text-slate-500 dark:text-slate-400",
      detail: (
        <div className="space-y-2">
          {country.visaTypes.map((v, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
              <span className="font-medium text-slate-900 dark:text-white">{v.name}</span>
              <span className="text-xs text-slate-500">{v.duration}</span>
            </div>
          ))}
        </div>
      ),
    }] as CheckItem[] : []),
    ...(country.timeline && country.timeline.length > 0 ? [{
      id: "timeline", emoji: "📅", title: "준비 타임라인", section: "prep" as const,
      status: `${country.timeline.length}단계`,
      statusColor: "text-sky-600 dark:text-sky-400",
      detail: (
        <div className="space-y-2">
          {country.timeline.map((t, i) => (
            <div key={i} className="flex gap-3 text-sm">
              <span className="text-xs font-bold text-sky-500 whitespace-nowrap mt-0.5">{t.dDay}</span>
              <div><p className="font-medium text-slate-900 dark:text-white">{t.title}</p><p className="text-xs text-slate-500">{t.description}</p></div>
            </div>
          ))}
        </div>
      ),
    }] as CheckItem[] : []),
    {
      id: "insurance", emoji: "🛡", title: "보험", section: "prep",
      status: "권장", statusColor: "text-amber-600 dark:text-amber-400",
      detail: (
        <div className="text-sm space-y-1">
          <p>해외 의료비는 높은 편이므로 여행자 보험 가입을 권장합니다.</p>
          <ul className="space-y-0.5"><li>✓ 의료비 보장 (최소 3천만원)</li><li>✓ 휴대품 손해</li><li>✓ 항공기 지연 보상</li></ul>
        </div>
      ),
    },
    {
      id: "comm", emoji: "📱", title: "통신", section: "prep",
      status: "eSIM 추천", statusColor: "text-slate-500 dark:text-slate-400",
      detail: (
        <div className="text-sm space-y-1">
          <p><strong>eSIM</strong> — 출국 전 구매, 현지 즉시 활성화</p>
          <p><strong>현지 유심</strong> — 공항/매장에서 구매</p>
          <p><strong>국제 로밍</strong> — 통신사 앱에서 신청</p>
        </div>
      ),
    },
    ...(country.quickInfo ? [{
      id: "money", emoji: "💰", title: "환전", section: "prep" as const,
      status: country.quickInfo.currency,
      statusColor: "text-slate-500 dark:text-slate-400",
      detail: (
        <div className="text-sm space-y-1">
          <p>한국 시내 은행에서 미리 환전하면 환율 우대</p>
          <p>현지 ATM 인출 가능 (수수료 확인)</p>
          <p>신용카드 해외결제 가능 여부 확인</p>
        </div>
      ),
    }] as CheckItem[] : []),
    ...(country.drivingLicense ? [{
      id: "license", emoji: "🚗", title: "운전면허", section: "prep" as const,
      status: country.drivingLicense.idpAccepted ? "IDP 인정" : "IDP 불인정",
      statusColor: country.drivingLicense.idpAccepted ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400",
      detail: <p className="text-sm">{country.drivingLicense.note}</p>,
    }] as CheckItem[] : []),
    ...(country.checklist && country.checklist.length > 0 ? [{
      id: "checklist", emoji: "✅", title: "출국 체크리스트", section: "prep" as const,
      status: `${country.checklist.length}항목`,
      statusColor: "text-slate-500 dark:text-slate-400",
      detail: (
        <div className="space-y-1">
          {country.checklist.map((c, i) => (
            <label key={i} className="flex items-center gap-2 py-1 cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span className="text-sm">{c}</span>
            </label>
          ))}
        </div>
      ),
    }] as CheckItem[] : []),
  ];

  const entryItems = items.filter(i => i.section === "entry");
  const prepItems = items.filter(i => i.section === "prep");

  const renderItem = (item: CheckItem) => (
    <div key={item.id}>
      <button
        onClick={() => toggle(item.id)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
          expandedItem === item.id
            ? "bg-sky-50 dark:bg-sky-950/20"
            : "hover:bg-slate-50 dark:hover:bg-slate-900/40"
        }`}
      >
        <span className="text-base leading-none">{item.emoji}</span>
        <span className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</span>
        <span className="flex-1 border-b border-dotted border-slate-300 dark:border-slate-700 mx-1" />
        <span className={`text-xs font-semibold whitespace-nowrap ${item.statusColor}`}>{item.status}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`text-slate-400 transition-transform flex-shrink-0 ${expandedItem === item.id ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {expandedItem === item.id && (
        <div className="px-3 pb-3 pt-1 ml-8">
          {item.detail}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-3">
      {/* 입출국 섹션 */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">입출국</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>
      <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl divide-y divide-slate-100 dark:divide-slate-800/50 overflow-hidden">
        {entryItems.map(renderItem)}
      </div>

      {/* 여행 준비 섹션 */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">여행 준비</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>
      <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl divide-y divide-slate-100 dark:divide-slate-800/50 overflow-hidden">
        {prepItems.map(renderItem)}
      </div>
    </div>
  );
}

// ──────────────────────────────────────
// C. 가로 스와이프 카드 레이아웃 (베트남)
// ──────────────────────────────────────
function SwipeLayout({ country }: { country: Country }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const visaInfo = VISA_STATUS_MAP[country.visaStatus];

  // 슬라이드 정의
  interface Slide {
    id: string;
    emoji: string;
    title: string;
    badge?: string;
    badgeColor?: string;
    content: React.ReactNode;
  }

  const slides: Slide[] = [
    {
      id: "visa", emoji: "📋", title: "비자 요건",
      badge: visaInfo.label,
      badgeColor: country.visaStatus === "visa_free" ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400" : "bg-rose-500/20 text-rose-700 dark:text-rose-400",
      content: (
        <div className="space-y-3 text-sm">
          {country.visaNote && <p>{country.visaNote}</p>}
          {country.passportValidity && <p>여권 유효기간: 최소 <strong className="text-sky-600">{country.passportValidity.months}개월</strong> 이상</p>}
          {country.visaFreeStayDays && (
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2">
              <span className="text-xs text-slate-500">최대 체류</span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">{country.visaFreeStayDays}일</p>
            </div>
          )}
        </div>
      ),
    },
    ...(country.visaTypes && country.visaTypes.length > 0 ? [{
      id: "visa_types", emoji: "📄", title: "비자 종류",
      badge: `${country.visaTypes.length}종`,
      badgeColor: "bg-violet-500/20 text-violet-700 dark:text-violet-400",
      content: (
        <div className="space-y-2.5">
          {country.visaTypes.map((v, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-slate-900 dark:text-white">{v.name}</span>
                {v.fee && <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">{v.fee}</span>}
              </div>
              <p className="text-xs text-sky-600 dark:text-sky-400 mb-1">{v.duration}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      ),
    }] as Slide[] : []),
    ...(country.timeline && country.timeline.length > 0 ? [{
      id: "timeline", emoji: "📅", title: "준비 타임라인",
      badge: `${country.timeline.length}단계`,
      badgeColor: "bg-sky-500/20 text-sky-700 dark:text-sky-400",
      content: (
        <div className="space-y-3">
          {country.timeline.map((t, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex-shrink-0 w-14 text-center">
                <span className="text-xs font-bold text-sky-500 bg-sky-50 dark:bg-sky-950/30 px-2 py-1 rounded">{t.dDay}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{t.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    }] as Slide[] : []),
    {
      id: "essentials", emoji: "🎒", title: "여행 필수 준비",
      content: (
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5">🛡 보험</h4>
            <p className="text-slate-600 dark:text-slate-400">여행자 보험 가입 권장 (의료비, 휴대품 손해, 항공기 지연)</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5">📱 통신</h4>
            <p className="text-slate-600 dark:text-slate-400">eSIM 추천 — 출국 전 구매, 현지 도착 즉시 활성화</p>
          </div>
          {country.quickInfo && (
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5">💰 환전</h4>
              <p className="text-slate-600 dark:text-slate-400">현지 통화: {country.quickInfo.currency}. 한국 은행 사전 환전 추천</p>
            </div>
          )}
          {country.drivingLicense && (
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5">🚗 운전면허</h4>
              <p className="text-slate-600 dark:text-slate-400">{country.drivingLicense.note}</p>
            </div>
          )}
        </div>
      ),
    },
    ...(country.checklist && country.checklist.length > 0 ? [{
      id: "checklist", emoji: "✅", title: "출국 체크리스트",
      badge: `${country.checklist.length}항목`,
      badgeColor: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      content: (
        <div className="space-y-1.5">
          {country.checklist.map((c, i) => (
            <label key={i} className="flex items-center gap-2.5 p-2 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-sm">{c}</span>
            </label>
          ))}
        </div>
      ),
    }] as Slide[] : []),
  ];

  // 스크롤 이벤트로 활성 슬라이드 추적
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.offsetWidth * 0.82;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(idx, slides.length - 1));
  }, [slides.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 인디케이터 클릭으로 이동
  const goToSlide = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.82;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      {/* 스와이프 카드 컨테이너 */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-5 px-5 sm:-mx-8 sm:px-8"
        style={{ scrollPaddingLeft: "1.25rem" }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-[82%] sm:w-[70%] snap-start bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm"
          >
            {/* 카드 헤더 */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{slide.emoji}</span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{slide.title}</h3>
              {slide.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-auto ${slide.badgeColor}`}>
                  {slide.badge}
                </span>
              )}
            </div>
            {/* 카드 콘텐츠 */}
            {slide.content}
          </div>
        ))}
      </div>

      {/* 인디케이터 점 */}
      <div className="flex justify-center gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full transition-all ${
              activeSlide === idx
                ? "w-5 h-2 bg-sky-500"
                : "w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
            }`}
            aria-label={`슬라이드 ${idx + 1}`}
          />
        ))}
      </div>

      {/* 스와이프 힌트 */}
      <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
        ← 좌우로 스와이프하여 항목을 확인하세요 →
      </p>
    </div>
  );
}

// ──────────────────────────────────────
// 기본 아코디언 레이아웃 (기타 국가)
// ──────────────────────────────────────
function AccordionLayout({ country }: { country: Country }) {
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
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /></svg>}
        >
          <div className="space-y-4">
            <div className={`rounded-lg p-4 ${
              country.visaStatus === "visa_free" ? "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                : country.visaStatus === "visa_required" ? "bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800"
                : "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800"
            }`}>
              <h4 className={`font-semibold mb-2 ${
                country.visaStatus === "visa_free" ? "text-emerald-900 dark:text-emerald-200"
                  : country.visaStatus === "visa_required" ? "text-rose-900 dark:text-rose-200"
                  : "text-amber-900 dark:text-amber-200"
              }`}>
                {country.visaStatus === "visa_free" && "✅ "}{country.visaStatus === "visa_required" && "⚠️ "}{country.visaStatus === "visa_on_arrival" && "🛬 "}{country.visaStatus === "e_visa" && "💻 "}{visaLabelEn}
              </h4>
              {country.visaNote && <p className={`text-sm ${country.visaStatus === "visa_free" ? "text-emerald-800 dark:text-emerald-300" : country.visaStatus === "visa_required" ? "text-rose-800 dark:text-rose-300" : "text-amber-800 dark:text-amber-300"}`}>{country.visaNote}</p>}
            </div>
            {country.passportValidity && (
              <div><h4 className="font-semibold text-slate-900 dark:text-white mb-2">여권 유효기간 요건</h4><p>입국일 기준 최소 <span className="font-semibold text-sky-600 dark:text-sky-400">{country.passportValidity.months}개월</span> 이상</p></div>
            )}
            {country.visaFreeStayDays && (
              <div className="bg-slate-100/60 dark:bg-slate-800/60 rounded-lg px-4 py-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">최대 체류 기간</span>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{country.visaFreeStayDays}일</p>
              </div>
            )}
          </div>
        </AccordionItem>

        {country.entryRegistration && (
          <AccordionItem
            title={`전자여행허가 (${country.entryRegistration.type})`}
            badge={country.entryRegistration.required ? "필수" : "권장"}
            badgeColor={country.entryRegistration.required ? "bg-rose-500/20 text-rose-700 dark:text-rose-400" : "bg-amber-500/20 text-amber-700 dark:text-amber-400"}
            defaultOpen={false}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /></svg>}
          >
            <div className="space-y-4">
              <p>{country.entryRegistration.description}</p>
              <a href={country.entryRegistration.applicationUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors shadow-sm">
                {country.entryRegistration.type} 신청하기
              </a>
            </div>
          </AccordionItem>
        )}

        {country.visaTypes && country.visaTypes.length > 0 && (
          <AccordionItem title="비자 종류" defaultOpen={false}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M7 15h0M2 9.5h20" /></svg>}>
            <div className="flex flex-col gap-3">
              {country.visaTypes.map((visa, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/60 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{visa.name}</h4>
                    {visa.fee && <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">{visa.fee}</span>}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">{visa.duration}</p>
                    {visa.processingTime && <p className="text-xs text-slate-500">심사 {visa.processingTime}</p>}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{visa.description}</p>
                  {visa.applicationUrl && (
                    <a href={visa.applicationUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-2.5 px-3 py-1.5 bg-violet-500/15 hover:bg-violet-500/25 text-xs font-medium text-violet-600 dark:text-violet-300 rounded-lg transition-colors">
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
        {country.timeline && country.timeline.length > 0 && (
          <AccordionItem title="준비 타임라인" defaultOpen={true}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}>
            <div className="relative pl-5">
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
                        <a href={item.actionUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-block mt-2 px-3 py-1.5 bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-700/80 text-xs font-medium text-slate-900 dark:text-white rounded-lg transition-colors">
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

        <AccordionItem title="보험" badge="권장" defaultOpen={false}
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}>
          <div className="space-y-4">
            <p>해외 의료비는 높은 편이므로 여행자 보험 가입을 권장합니다.</p>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">추천 보장 항목</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span>의료비 보장 (최소 3천만원 이상)</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span>휴대품 손해 (분실/도난)</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span>항공기 지연 보상</span></li>
              </ul>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="통신 (유심/eSIM/로밍)" defaultOpen={false}
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>}>
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">추천 옵션</h4>
            <div className="grid gap-3">
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4"><p className="font-semibold text-slate-900 dark:text-white mb-1">eSIM (추천)</p><p className="text-sm">출국 전 구매 후 현지 도착 즉시 활성화. 유심 교체 불필요.</p></div>
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4"><p className="font-semibold text-slate-900 dark:text-white mb-1">현지 유심</p><p className="text-sm">공항 또는 현지 매장에서 구매 가능. 데이터 전용 유심 다수.</p></div>
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4"><p className="font-semibold text-slate-900 dark:text-white mb-1">국제 로밍</p><p className="text-sm">별도 설정 필요 없이 즉시 사용 가능. 통신사 앱에서 신청.</p></div>
            </div>
          </div>
        </AccordionItem>

        {country.quickInfo && (
          <AccordionItem title="돈 준비 (환전)" defaultOpen={false}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}>
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

        {country.drivingLicense && (
          <AccordionItem title="운전면허 정보" defaultOpen={false}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>}>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {country.drivingLicense.idpAccepted && <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">국제운전면허증(IDP) 인정</span>}
                {country.drivingLicense.directRecognition && <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-400">한국 면허 직접 인정</span>}
                {country.drivingLicense.minimumAge && <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-500/20 text-slate-700 dark:text-slate-400">최소 {country.drivingLicense.minimumAge}세</span>}
              </div>
              <p className="text-sm leading-relaxed">{country.drivingLicense.note}</p>
            </div>
          </AccordionItem>
        )}

        {country.checklist && country.checklist.length > 0 && (
          <AccordionItem title="출국 체크리스트" defaultOpen={true}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>}>
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
