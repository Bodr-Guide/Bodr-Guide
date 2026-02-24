"use client";

import { useEffect, useState, useCallback } from "react";
import { getCurrencyInfo, SUPPORTED_CURRENCIES } from "@/lib/countryCurrency";
import { fetchExchangeRate, type ExchangeData } from "@/lib/exchange";

interface ExchangeCalculatorTabProps {
  countryId: string;
  compact?: boolean; // true면 타이틀과 환율 요약 숨김 (Disclosure 내부 사용 시)
}

// 숫자 포맷 (천 단위 콤마)
function formatNumber(n: number): string {
  if (n >= 1) return n.toLocaleString("ko-KR", { maximumFractionDigits: 0 });
  if (n >= 0.01) return n.toLocaleString("ko-KR", { maximumFractionDigits: 2 });
  return n.toLocaleString("ko-KR", { maximumFractionDigits: 4 });
}

// 입력값에서 숫자만 추출
function parseInput(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}

export default function ExchangeCalculatorTab({ countryId, compact = false }: ExchangeCalculatorTabProps) {
  const [exchange, setExchange] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);

  // isSwapped: false = KRW(위) → Foreign(아래), true = Foreign(위) → KRW(아래)
  const [isSwapped, setIsSwapped] = useState(false);
  const [topInput, setTopInput] = useState("1,000");
  const [bottomInput, setBottomInput] = useState("");
  const [lastEdited, setLastEdited] = useState<"top" | "bottom">("top");

  const currencyInfo = getCurrencyInfo(countryId);

  useEffect(() => {
    if (!currencyInfo || currencyInfo.code === "KRW") {
      setLoading(false);
      return;
    }
    if (!SUPPORTED_CURRENCIES.has(currencyInfo.code)) {
      setLoading(false);
      return;
    }
    fetchExchangeRate(currencyInfo.code)
      .then((data) => {
        setExchange(data);
        // 초기 환산: 1,000 KRW → Foreign
        const converted = 1000 * data.rate;
        setBottomInput(formatNumber(converted));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [countryId, currencyInfo]);

  // 환율 계산 (top → bottom)
  const calculateFromTop = useCallback(
    (value: string) => {
      if (!exchange) return;
      const num = parseInput(value);
      if (num === 0) {
        setBottomInput("");
        return;
      }
      if (isSwapped) {
        // Foreign(위) → KRW(아래): krw = foreign / rate
        const result = num / exchange.rate;
        setBottomInput(formatNumber(result));
      } else {
        // KRW(위) → Foreign(아래): foreign = krw * rate
        const result = num * exchange.rate;
        setBottomInput(formatNumber(result));
      }
    },
    [exchange, isSwapped]
  );

  // 환율 계산 (bottom → top)
  const calculateFromBottom = useCallback(
    (value: string) => {
      if (!exchange) return;
      const num = parseInput(value);
      if (num === 0) {
        setTopInput("");
        return;
      }
      if (isSwapped) {
        // KRW(아래) → Foreign(위): foreign = krw * rate
        const result = num * exchange.rate;
        setTopInput(formatNumber(result));
      } else {
        // Foreign(아래) → KRW(위): krw = foreign / rate
        const result = num / exchange.rate;
        setTopInput(formatNumber(result));
      }
    },
    [exchange, isSwapped]
  );

  const handleTopChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9]/g, "");
      const num = parseInt(raw, 10) || 0;
      const formatted = num > 0 ? num.toLocaleString("ko-KR") : "";
      setTopInput(formatted);
      setLastEdited("top");
      calculateFromTop(formatted);
    },
    [calculateFromTop]
  );

  const handleBottomChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9]/g, "");
      const num = parseInt(raw, 10) || 0;
      const formatted = num > 0 ? num.toLocaleString("ko-KR") : "";
      setBottomInput(formatted);
      setLastEdited("bottom");
      calculateFromBottom(formatted);
    },
    [calculateFromBottom]
  );

  // 통화 스왑
  const handleSwap = useCallback(() => {
    setIsSwapped((prev) => !prev);
    // 값 교환
    setTopInput(bottomInput);
    setBottomInput(topInput);
    setLastEdited((prev) => (prev === "top" ? "bottom" : "top"));
  }, [topInput, bottomInput]);

  // 로딩 중
  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="animate-spin w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full" />
        <span className="ml-3 text-sm text-slate-500">환율 정보를 불러오는 중...</span>
      </div>
    );
  }

  // 환율 데이터 없음
  if (!exchange || !currencyInfo) {
    return (
      <div className="text-center py-16">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-slate-300 dark:text-slate-600 mb-3">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        <p className="text-slate-500 dark:text-slate-400">이 국가의 환율 데이터를 제공하지 않습니다.</p>
      </div>
    );
  }

  const topCurrency = isSwapped ? currencyInfo.code : "KRW";
  const bottomCurrency = isSwapped ? "KRW" : currencyInfo.code;
  const topSymbol = isSwapped ? currencyInfo.symbol : "₩";
  const bottomSymbol = isSwapped ? "₩" : currencyInfo.symbol;
  const topLabel = isSwapped ? currencyInfo.code : "대한민국 원";
  const bottomLabel = isSwapped ? "대한민국 원" : currencyInfo.code;

  // 1 외화 = X KRW
  const krwPerUnit = 1 / exchange.rate;

  return (
    <div className={compact ? "" : "max-w-md mx-auto"}>
      {!compact && (
        <>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">환율 계산기</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
            1 {currencyInfo.code} ≈ {formatNumber(krwPerUnit)} KRW
          </p>
        </>
      )}

      <div className="space-y-0">
        {/* 상단 입력 */}
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-t-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{topLabel}</span>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{topCurrency}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg text-slate-400 dark:text-slate-500 font-medium">{topSymbol}</span>
            <input
              type="text"
              inputMode="numeric"
              value={topInput}
              onChange={handleTopChange}
              placeholder="0"
              className="flex-1 text-right text-2xl font-bold text-slate-900 dark:text-white bg-transparent outline-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* 스왑 버튼 */}
        <div className="relative h-0 flex items-center justify-center z-10">
          <button
            onClick={handleSwap}
            className="absolute -top-5 bg-sky-500 hover:bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all active:scale-95"
            aria-label="통화 스왑"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 16V4m0 12l-3-3m3 3l3-3" />
              <path d="M17 8v12m0-12l3 3m-3-3l-3 3" />
            </svg>
          </button>
        </div>

        {/* 하단 입력 */}
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{bottomLabel}</span>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{bottomCurrency}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg text-slate-400 dark:text-slate-500 font-medium">{bottomSymbol}</span>
            <input
              type="text"
              inputMode="numeric"
              value={bottomInput}
              onChange={handleBottomChange}
              placeholder="0"
              className="flex-1 text-right text-2xl font-bold text-slate-900 dark:text-white bg-transparent outline-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
            />
          </div>
        </div>
      </div>

      {/* 기준일 */}
      <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-3">
        기준: {exchange.date} · ECB 제공
      </p>
    </div>
  );
}
