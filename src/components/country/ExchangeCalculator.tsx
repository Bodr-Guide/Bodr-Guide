"use client";

import { useEffect, useState, useCallback } from "react";
import { getCurrencyInfo, SUPPORTED_CURRENCIES } from "@/lib/countryCurrency";
import { fetchExchangeRate, type ExchangeData } from "@/lib/exchange";

interface ExchangeCalculatorProps {
  countryId: string;
  fallbackText: string; // quickInfo.currency — 환율 데이터 없을 때 표시
}

// 숫자 포맷 (천 단위 콤마)
function formatNumber(n: number): string {
  if (n >= 1) return n.toLocaleString("ko-KR", { maximumFractionDigits: 0 });
  if (n >= 0.01) return n.toLocaleString("ko-KR", { maximumFractionDigits: 2 });
  return n.toLocaleString("ko-KR", { maximumFractionDigits: 4 });
}

const DEFAULT_AMOUNT = 1000;

// 퀵인포 스트립의 통화 칸 내부에 임베드되는 환율 계산기
export default function ExchangeCalculator({ countryId, fallbackText }: ExchangeCalculatorProps) {
  const [exchange, setExchange] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [krwAmount, setKrwAmount] = useState(DEFAULT_AMOUNT);
  const [inputValue, setInputValue] = useState(DEFAULT_AMOUNT.toLocaleString("ko-KR"));

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
      .then(setExchange)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [countryId, currencyInfo]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const num = parseInt(raw, 10) || 0;
    setKrwAmount(num);
    setInputValue(num > 0 ? num.toLocaleString("ko-KR") : "");
  }, []);

  const handleReset = useCallback(() => {
    setKrwAmount(DEFAULT_AMOUNT);
    setInputValue(DEFAULT_AMOUNT.toLocaleString("ko-KR"));
  }, []);

  // 로딩 중 또는 환율 데이터 없으면 기본 텍스트만 표시
  if (loading || !exchange || !currencyInfo) {
    return (
      <p className="text-base sm:text-lg font-bold text-white leading-tight">{fallbackText}</p>
    );
  }

  const convertedAmount = krwAmount * exchange.rate;

  return (
    <div>
      {/* 통화 기본 정보 */}
      <p className="text-base sm:text-lg font-bold text-white leading-tight">{fallbackText}</p>

      {/* 환율 변환 — 컴팩트 */}
      <div className="mt-1.5 space-y-1">
        <div className="flex items-center gap-1">
          <span className="text-white/50 text-[10px]">₩</span>
          <input
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={handleInputChange}
            className="w-16 bg-white/10 border border-white/20 rounded px-1.5 py-0.5 text-[11px] font-bold text-white text-right outline-none focus:border-white/40 transition-colors"
          />
          <span className="text-white/40 text-[10px]">=</span>
          <span className="text-white/40 text-[10px]">{currencyInfo.symbol}</span>
          <span className="text-xs font-bold text-white">{formatNumber(convertedAmount)}</span>
          <button
            onClick={handleReset}
            className="px-1 py-0.5 rounded text-sm font-medium transition-colors text-white/70 hover:text-red-300"
          >
            ↺
          </button>
        </div>
        <p className="text-[9px] text-white/40">{exchange.date} 기준</p>
      </div>
    </div>
  );
}
