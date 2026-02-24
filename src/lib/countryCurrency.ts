// 국가 ID → ISO 4217 통화 코드 매핑
// frankfurter.app 지원 통화: AUD, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD,
// HUF, IDR, ILS, INR, ISK, JPY, KRW, MXN, MYR, NOK, NZD, PHP, PLN, RON, SEK, SGD, THB, TRY, USD, ZAR

interface CurrencyInfo {
  code: string;   // ISO 4217 통화 코드
  symbol: string; // 통화 기호
}

const COUNTRY_CURRENCY: Record<string, CurrencyInfo> = {
  // 아시아
  JP: { code: "JPY", symbol: "¥" },
  CN: { code: "CNY", symbol: "¥" },
  HK: { code: "HKD", symbol: "HK$" },
  TW: { code: "USD", symbol: "$" }, // frankfurter에서 TWD 미지원, USD 대체
  TH: { code: "THB", symbol: "฿" },
  SG: { code: "SGD", symbol: "S$" },
  MY: { code: "MYR", symbol: "RM" },
  ID: { code: "IDR", symbol: "Rp" },
  PH: { code: "PHP", symbol: "₱" },
  IN: { code: "INR", symbol: "₹" },
  VN: { code: "USD", symbol: "$" }, // VND 미지원
  KH: { code: "USD", symbol: "$" }, // KHR 미지원, 달러 통용
  LA: { code: "USD", symbol: "$" }, // LAK 미지원
  MM: { code: "USD", symbol: "$" }, // MMK 미지원
  MN: { code: "USD", symbol: "$" }, // MNT 미지원
  NP: { code: "INR", symbol: "₹" }, // NPR ≈ INR
  LK: { code: "USD", symbol: "$" }, // LKR 미지원
  BD: { code: "USD", symbol: "$" }, // BDT 미지원
  PK: { code: "USD", symbol: "$" }, // PKR 미지원
  UZ: { code: "USD", symbol: "$" }, // UZS 미지원
  KZ: { code: "USD", symbol: "$" }, // KZT 미지원
  KG: { code: "USD", symbol: "$" }, // KGS 미지원
  TJ: { code: "USD", symbol: "$" }, // TJS 미지원
  TM: { code: "USD", symbol: "$" }, // TMT 미지원
  BN: { code: "SGD", symbol: "S$" }, // BND = SGD 페그
  MO: { code: "HKD", symbol: "HK$" }, // MOP ≈ HKD
  BT: { code: "INR", symbol: "₹" }, // BTN = INR 페그
  MV: { code: "USD", symbol: "$" }, // MVR 미지원

  // 중동
  AE: { code: "USD", symbol: "$" }, // AED 미지원, USD 페그
  SA: { code: "USD", symbol: "$" }, // SAR 미지원, USD 페그
  QA: { code: "USD", symbol: "$" }, // QAR 미지원
  KW: { code: "USD", symbol: "$" }, // KWD 미지원
  BH: { code: "USD", symbol: "$" }, // BHD 미지원
  OM: { code: "USD", symbol: "$" }, // OMR 미지원
  JO: { code: "USD", symbol: "$" }, // JOD 미지원
  LB: { code: "USD", symbol: "$" }, // LBP 미지원
  IL: { code: "ILS", symbol: "₪" },
  TR: { code: "TRY", symbol: "₺" },
  IQ: { code: "USD", symbol: "$" }, // IQD 미지원
  IR: { code: "USD", symbol: "$" }, // IRR 미지원
  YE: { code: "USD", symbol: "$" }, // YER 미지원
  SY: { code: "USD", symbol: "$" }, // SYP 미지원
  PS: { code: "ILS", symbol: "₪" }, // 이스라엘 셰켈 통용

  // 유럽 — 유로존
  AT: { code: "EUR", symbol: "€" },
  BE: { code: "EUR", symbol: "€" },
  CY: { code: "EUR", symbol: "€" },
  DE: { code: "EUR", symbol: "€" },
  EE: { code: "EUR", symbol: "€" },
  ES: { code: "EUR", symbol: "€" },
  FI: { code: "EUR", symbol: "€" },
  FR: { code: "EUR", symbol: "€" },
  GR: { code: "EUR", symbol: "€" },
  HR: { code: "EUR", symbol: "€" },
  IE: { code: "EUR", symbol: "€" },
  IT: { code: "EUR", symbol: "€" },
  LT: { code: "EUR", symbol: "€" },
  LU: { code: "EUR", symbol: "€" },
  LV: { code: "EUR", symbol: "€" },
  MT: { code: "EUR", symbol: "€" },
  NL: { code: "EUR", symbol: "€" },
  PT: { code: "EUR", symbol: "€" },
  SI: { code: "EUR", symbol: "€" },
  SK: { code: "EUR", symbol: "€" },
  // 유로존 외 소국
  AD: { code: "EUR", symbol: "€" },
  MC: { code: "EUR", symbol: "€" },
  SM: { code: "EUR", symbol: "€" },
  VA: { code: "EUR", symbol: "€" },
  XK: { code: "EUR", symbol: "€" },
  ME: { code: "EUR", symbol: "€" },

  // 유럽 — 비유로존
  GB: { code: "GBP", symbol: "£" },
  CH: { code: "CHF", symbol: "CHF" },
  LI: { code: "CHF", symbol: "CHF" },
  NO: { code: "NOK", symbol: "kr" },
  SE: { code: "SEK", symbol: "kr" },
  DK: { code: "DKK", symbol: "kr" },
  IS: { code: "ISK", symbol: "kr" },
  CZ: { code: "CZK", symbol: "Kč" },
  PL: { code: "PLN", symbol: "zł" },
  HU: { code: "HUF", symbol: "Ft" },
  RO: { code: "RON", symbol: "lei" },
  BG: { code: "EUR", symbol: "€" }, // BGN 미지원, 유로 페그
  RS: { code: "EUR", symbol: "€" }, // RSD 미지원
  BA: { code: "EUR", symbol: "€" }, // BAM 유로 페그
  AL: { code: "EUR", symbol: "€" }, // ALL 미지원
  MK: { code: "EUR", symbol: "€" }, // MKD 미지원
  MD: { code: "EUR", symbol: "€" }, // MDL 미지원
  UA: { code: "USD", symbol: "$" }, // UAH 미지원
  BY: { code: "USD", symbol: "$" }, // BYN 미지원
  RU: { code: "USD", symbol: "$" }, // RUB 미지원 (제재)
  GE: { code: "USD", symbol: "$" }, // GEL 미지원
  AM: { code: "USD", symbol: "$" }, // AMD 미지원
  AZ: { code: "USD", symbol: "$" }, // AZN 미지원

  // 북미
  US: { code: "USD", symbol: "$" },
  CA: { code: "CAD", symbol: "C$" },
  MX: { code: "MXN", symbol: "MX$" },
  PA: { code: "USD", symbol: "$" }, // 달러 통용
  CR: { code: "USD", symbol: "$" }, // CRC 미지원
  GT: { code: "USD", symbol: "$" }, // GTQ 미지원
  HN: { code: "USD", symbol: "$" }, // HNL 미지원
  SV: { code: "USD", symbol: "$" }, // 달러 법정통화
  NI: { code: "USD", symbol: "$" }, // NIO 미지원
  BZ: { code: "USD", symbol: "$" }, // BZD 미지원
  CU: { code: "USD", symbol: "$" }, // CUP 미지원

  // 카리브해
  JM: { code: "USD", symbol: "$" }, // JMD 미지원
  DO: { code: "USD", symbol: "$" }, // DOP 미지원
  TT: { code: "USD", symbol: "$" }, // TTD 미지원
  BS: { code: "USD", symbol: "$" }, // BSD = USD
  BB: { code: "USD", symbol: "$" }, // BBD 미지원
  HT: { code: "USD", symbol: "$" }, // HTG 미지원

  // 남미
  BR: { code: "BRL", symbol: "R$" },
  AR: { code: "USD", symbol: "$" }, // ARS 미지원
  CL: { code: "USD", symbol: "$" }, // CLP 미지원
  CO: { code: "USD", symbol: "$" }, // COP 미지원
  PE: { code: "USD", symbol: "$" }, // PEN 미지원
  EC: { code: "USD", symbol: "$" }, // 달러 법정통화
  VE: { code: "USD", symbol: "$" }, // VES 미지원
  UY: { code: "USD", symbol: "$" }, // UYU 미지원
  PY: { code: "USD", symbol: "$" }, // PYG 미지원
  BO: { code: "USD", symbol: "$" }, // BOB 미지원
  GY: { code: "USD", symbol: "$" }, // GYD 미지원
  SR: { code: "USD", symbol: "$" }, // SRD 미지원

  // 오세아니아
  AU: { code: "AUD", symbol: "A$" },
  NZ: { code: "NZD", symbol: "NZ$" },
  FJ: { code: "NZD", symbol: "NZ$" }, // FJD 미지원
  PG: { code: "AUD", symbol: "A$" }, // PGK 미지원
  WS: { code: "NZD", symbol: "NZ$" }, // WST 미지원
  TO: { code: "NZD", symbol: "NZ$" }, // TOP 미지원
  VU: { code: "AUD", symbol: "A$" }, // VUV 미지원
  SB: { code: "AUD", symbol: "A$" }, // SBD 미지원
  PW: { code: "USD", symbol: "$" }, // 달러 통용
  FM: { code: "USD", symbol: "$" }, // 달러 통용
  MH: { code: "USD", symbol: "$" }, // 달러 통용
  KI: { code: "AUD", symbol: "A$" }, // 호주달러 통용
  NR: { code: "AUD", symbol: "A$" }, // 호주달러 통용
  TV: { code: "AUD", symbol: "A$" }, // 호주달러 통용

  // 아프리카
  ZA: { code: "ZAR", symbol: "R" },
  EG: { code: "USD", symbol: "$" }, // EGP 미지원
  MA: { code: "USD", symbol: "$" }, // MAD 미지원
  TN: { code: "USD", symbol: "$" }, // TND 미지원
  KE: { code: "USD", symbol: "$" }, // KES 미지원
  TZ: { code: "USD", symbol: "$" }, // TZS 미지원
  NG: { code: "USD", symbol: "$" }, // NGN 미지원
  GH: { code: "USD", symbol: "$" }, // GHS 미지원
  ET: { code: "USD", symbol: "$" }, // ETB 미지원
  SN: { code: "USD", symbol: "$" }, // XOF 미지원
  CI: { code: "USD", symbol: "$" }, // XOF 미지원
  CM: { code: "USD", symbol: "$" }, // XAF 미지원
  MG: { code: "USD", symbol: "$" }, // MGA 미지원
  MU: { code: "USD", symbol: "$" }, // MUR 미지원
  SC: { code: "USD", symbol: "$" }, // SCR 미지원
  RW: { code: "USD", symbol: "$" }, // RWF 미지원
  UG: { code: "USD", symbol: "$" }, // UGX 미지원
  MZ: { code: "USD", symbol: "$" }, // MZN 미지원
  ZM: { code: "USD", symbol: "$" }, // ZMW 미지원
  ZW: { code: "USD", symbol: "$" }, // ZWL 미지원
  BW: { code: "USD", symbol: "$" }, // BWP 미지원
  NA: { code: "ZAR", symbol: "R" }, // NAD = ZAR 페그
  SZ: { code: "ZAR", symbol: "R" }, // SZL = ZAR 페그
  LS: { code: "ZAR", symbol: "R" }, // LSL = ZAR 페그
  DZ: { code: "USD", symbol: "$" }, // DZD 미지원
  LY: { code: "USD", symbol: "$" }, // LYD 미지원
  AO: { code: "USD", symbol: "$" }, // AOA 미지원
  CD: { code: "USD", symbol: "$" }, // CDF 미지원
  CG: { code: "USD", symbol: "$" }, // XAF 미지원
  GA: { code: "USD", symbol: "$" }, // XAF 미지원
  TD: { code: "USD", symbol: "$" }, // XAF 미지원
  CF: { code: "USD", symbol: "$" }, // XAF 미지원
  GQ: { code: "USD", symbol: "$" }, // XAF 미지원
  BF: { code: "USD", symbol: "$" }, // XOF 미지원
  ML: { code: "USD", symbol: "$" }, // XOF 미지원
  NE: { code: "USD", symbol: "$" }, // XOF 미지원
  TG: { code: "USD", symbol: "$" }, // XOF 미지원
  BJ: { code: "USD", symbol: "$" }, // XOF 미지원
  GN: { code: "USD", symbol: "$" }, // GNF 미지원
  SL: { code: "USD", symbol: "$" }, // SLL 미지원
  LR: { code: "USD", symbol: "$" }, // LRD 미지원
  GM: { code: "USD", symbol: "$" }, // GMD 미지원
  GW: { code: "USD", symbol: "$" }, // XOF 미지원
  CV: { code: "EUR", symbol: "€" }, // CVE 유로 페그
  ST: { code: "EUR", symbol: "€" }, // STN 유로 페그
  KM: { code: "USD", symbol: "$" }, // KMF 미지원
  DJ: { code: "USD", symbol: "$" }, // DJF 미지원
  ER: { code: "USD", symbol: "$" }, // ERN 미지원
  SO: { code: "USD", symbol: "$" }, // SOS 미지원
  SS: { code: "USD", symbol: "$" }, // SSP 미지원
  SD: { code: "USD", symbol: "$" }, // SDG 미지원
  MW: { code: "USD", symbol: "$" }, // MWK 미지원
  BI: { code: "USD", symbol: "$" }, // BIF 미지원
  MR: { code: "USD", symbol: "$" }, // MRU 미지원
};

// 국가 ID로 통화 정보 조회
export function getCurrencyInfo(countryId: string): CurrencyInfo | null {
  return COUNTRY_CURRENCY[countryId] ?? null;
}

// frankfurter.app 지원 통화 목록
export const SUPPORTED_CURRENCIES = new Set([
  "AUD", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD",
  "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK",
  "NZD", "PHP", "PLN", "RON", "SEK", "SGD", "THB", "TRY", "USD", "ZAR",
]);
