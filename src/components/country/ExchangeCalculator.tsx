"use client";

import { useEffect, useState, useCallback } from "react";
import { getCurrencyInfo, SUPPORTED_CURRENCIES } from "@/lib/countryCurrency";
import { fetchExchangeRate, type ExchangeData } from "@/lib/exchange";

interface ExchangeCalculatorProps {
  countryId: string;
}

// 숫자 포맷 (천 단위 콤마)
function formatNumber(n: number): string {
  if (n >= 1) return n.toLocaleString("ko-KR", { maximumFractionDigits: 0 });
  if (n >= 0.01) return n.toLocaleString("ko-KR", { maximumFractionDigits: 2 });
  return n.toLocaleString("ko-KR", { maximumFractionDigits: 4 });
}

// 합산 프리셋 금액
const PRESETS = [
  { label: "+1만", value: 10000 },
  { label: "+5만", value: 50000 },
  { label: "+10만", value: 100000 },
  { label: "+50만", value: 500000 },
];

const DEFAULT_AMOUNT = 1000;

// 히어로 퀵인포 아래에 표시되는 실시간 환율 계산기
export default function ExchangeCalculator({ countryId }: ExchangeCalculatorProps) {
  const [exchange, setExchange] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [krwAmount, setKrwAmount] = useState(DEFAULT_AMOUNT);
  const [inputValue, setInputValue] = useState(DEFAULT_AMOUNT.toLocaleString("ko-KR"));

  const currencyInfo = getCurrencyInfo(countryId);

  useEffect(() => {
    // 통화 정보 없거나 KRW이면 표시 안 함
    if (!currencyInfo || currencyInfo.code === "KRW") {
      setLoading(false);
      return;
    }

    // frankfurter.app 미지원 통화면 표시 안 함
    if (!SUPPORTED_CURRENCIES.has(currencyInfo.code)) {
      setLoading(false);
      return;
    }

    fetchExchangeRate(currencyInfo.code)
      .then(setExchange)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [countryId, currencyInfo]);

  // 입력값 처리
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const num = parseInt(raw, 10) || 0;
    setKrwAmount(num);
    setInputValue(num > 0 ? num.toLocaleString("ko-KR") : "");
  }, []);

  // 프리셋 클릭 — 현재 금액에 합산
  const handlePreset = useCallback((value: number) => {
    setKrwAmount((prev) => {
      const next = prev + value;
      setInputValue(next.toLocaleString("ko-KR"));
      return next;
    });
  }, []);

  // 리셋
  const handleReset = useCallback(() => {
    setKrwAmount(DEFAULT_AMOUNT);
    setInputValue(DEFAULT_AMOUNT.toLocaleString("ko-KR"));
  }, []);

  // 로딩 중: 스켈레톤
  if (loading) {
    return (
      <div className="bg-black/30 backdrop-blur-md border border-white/25 rounded-xl max-w-3xl mt-2 p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="w-20 h-5 bg-white/15 rounded animate-pulse" />
          <div className="w-32 h-5 bg-white/15 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  // 통화 미지원 또는 API 실패
  if (!exchange || !currencyInfo) return null;

  const convertedAmount = krwAmount * exchange.rate;

  return (
    <div className="bg-black/30 backdrop-blur-md border border-white/25 rounded-xl max-w-3xl mt-2 overflow-hidden">
      <div className="p-3 sm:p-4">
        {/* 환율 계산기 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          {/* 원화 입력 */}
          <div className="flex items-center gap-1.5">
            <span className="text-white/60 text-xs font-medium">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={handleInputChange}
              className="w-24 sm:w-28 bg-white/10 border border-white/20 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white text-right outline-none focus:border-white/40 transition-colors"
            />
          </div>

          {/* 등호 */}
          <span className="text-white/50 text-sm hidden sm:block">=</span>

          {/* 변환 결과 */}
          <div className="flex items-center gap-1.5">
            <span className="text-white/60 text-xs font-medium sm:hidden">=</span>
            <span className="text-white/60 text-xs font-medium">{currencyInfo.symbol}</span>
            <span className="text-lg sm:text-xl font-bold text-white">
              {formatNumber(convertedAmount)}
            </span>
            <span className="text-[10px] text-white/50 ml-1">{currencyInfo.code}</span>
          </div>

          {/* 기준일 */}
          <span className="text-[10px] text-white/70 sm:ml-auto">{exchange.date} 기준</span>
        </div>

        {/* 프리셋 버튼 + 리셋 */}
        <div className="flex items-center gap-1.5 mt-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.value}
              onClick={() => handlePreset(preset.value)}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors bg-white/10 text-white/60 hover:bg-white/20 hover:text-white active:bg-white/25"
            >
              {preset.label}
            </button>
          ))}
          <button
            onClick={handleReset}
            className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors bg-white/15 text-white/70 hover:bg-red-500/30 hover:text-red-200 ml-auto"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}
