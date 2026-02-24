"use client";

import { useEffect, useState } from "react";
import { getCurrencyInfo, SUPPORTED_CURRENCIES } from "@/lib/countryCurrency";
import { fetchExchangeRate, type ExchangeData } from "@/lib/exchange";

interface ExchangeCalculatorProps {
  countryId: string;
  fallbackText: string; // quickInfo.currency — 환율 데이터 없을 때 표시
}

// KRW 포맷 (천 단위 콤마, 정수)
function formatKRW(n: number): string {
  return Math.round(n).toLocaleString("ko-KR");
}

// 퀵인포 스트립의 통화 칸 — 정적 환율 정보 표시
export default function ExchangeCalculator({ countryId, fallbackText }: ExchangeCalculatorProps) {
  const [exchange, setExchange] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);

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

  // 로딩 중 또는 환율 데이터 없으면 기본 텍스트만 표시
  if (loading || !exchange || !currencyInfo) {
    return (
      <p className="text-base sm:text-lg font-bold text-white leading-tight">{fallbackText}</p>
    );
  }

  // 1 외화 = X KRW (역환율)
  const krwPerUnit = 1 / exchange.rate;

  return (
    <div>
      <p className="text-base sm:text-lg font-bold text-white leading-tight">{fallbackText}</p>
      <div className="mt-1 space-y-0.5">
        <p className="text-[11px] text-white/70 font-medium">
          1 {currencyInfo.code} ≈ {formatKRW(krwPerUnit)} KRW
        </p>
        <p className="text-[9px] text-white/40">기준: {exchange.date}</p>
      </div>
    </div>
  );
}
