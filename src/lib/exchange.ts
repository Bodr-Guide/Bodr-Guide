// frankfurter.app API를 사용한 실시간 환율 조회 유틸리티
// 무료 API, 키 불필요 — https://frankfurter.app/

export interface ExchangeData {
  rate: number;      // KRW → 대상 통화 환율 (1 KRW = rate 대상통화)
  targetCurrency: string; // 대상 통화 코드
  date: string;      // 환율 기준일
}

// frankfurter.app API로 KRW 기준 환율 조회
export async function fetchExchangeRate(targetCurrency: string): Promise<ExchangeData> {
  // KRW → KRW 변환은 의미 없음
  if (targetCurrency === "KRW") {
    throw new Error("동일 통화 변환");
  }

  const url = `https://api.frankfurter.app/latest?from=KRW&to=${targetCurrency}`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("환율 데이터를 불러올 수 없습니다");

  const data = await res.json();
  const rate = data.rates[targetCurrency];

  return {
    rate,
    targetCurrency,
    date: data.date,
  };
}
