import { Country } from "./types";

// 모든 국가 JSON을 정적 import (Vercel 빌드 호환)
import AE from "@/data/countries/AE.json";
import AR from "@/data/countries/AR.json";
import AT from "@/data/countries/AT.json";
import AU from "@/data/countries/AU.json";
import BR from "@/data/countries/BR.json";
import CA from "@/data/countries/CA.json";
import CH from "@/data/countries/CH.json";
import CL from "@/data/countries/CL.json";
import CN from "@/data/countries/CN.json";
import CO from "@/data/countries/CO.json";
import CZ from "@/data/countries/CZ.json";
import DE from "@/data/countries/DE.json";
import EG from "@/data/countries/EG.json";
import ES from "@/data/countries/ES.json";
import FJ from "@/data/countries/FJ.json";
import FR from "@/data/countries/FR.json";
import GB from "@/data/countries/GB.json";
import GR from "@/data/countries/GR.json";
import HK from "@/data/countries/HK.json";
import HR from "@/data/countries/HR.json";
import ID from "@/data/countries/ID.json";
import IL from "@/data/countries/IL.json";
import IN from "@/data/countries/IN.json";
import IT from "@/data/countries/IT.json";
import JO from "@/data/countries/JO.json";
import JP from "@/data/countries/JP.json";
import KE from "@/data/countries/KE.json";
import KH from "@/data/countries/KH.json";
import LA from "@/data/countries/LA.json";
import MA from "@/data/countries/MA.json";
import MM from "@/data/countries/MM.json";
import MO from "@/data/countries/MO.json";
import MX from "@/data/countries/MX.json";
import MY from "@/data/countries/MY.json";
import NL from "@/data/countries/NL.json";
import NZ from "@/data/countries/NZ.json";
import OM from "@/data/countries/OM.json";
import PE from "@/data/countries/PE.json";
import PH from "@/data/countries/PH.json";
import PT from "@/data/countries/PT.json";
import QA from "@/data/countries/QA.json";
import SA from "@/data/countries/SA.json";
import SG from "@/data/countries/SG.json";
import TH from "@/data/countries/TH.json";
import TR from "@/data/countries/TR.json";
import TW from "@/data/countries/TW.json";
import TZ from "@/data/countries/TZ.json";
import US from "@/data/countries/US.json";
import VN from "@/data/countries/VN.json";
import ZA from "@/data/countries/ZA.json";

// 전체 국가 데이터 배열
const ALL_COUNTRIES: Country[] = [
  AE, AR, AT, AU, BR, CA, CH, CL, CN, CO, CZ, DE, EG, ES, FJ, FR, GB, GR,
  HK, HR, ID, IL, IN, IT, JO, JP, KE, KH, LA, MA, MM, MO, MX, MY, NL, NZ,
  OM, PE, PH, PT, QA, SA, SG, TH, TR, TW, TZ, US, VN, ZA,
] as Country[];

// 모든 국가 데이터를 가져옴 (한국어 이름순 정렬)
export function getAllCountries(): Country[] {
  return [...ALL_COUNTRIES].sort((a, b) =>
    a.nameKo.localeCompare(b.nameKo, "ko")
  );
}

// ID로 특정 국가 데이터를 가져옴
export function getCountryById(id: string): Country | null {
  return ALL_COUNTRIES.find((c) => c.id === id) ?? null;
}

// 대륙별 국가 목록 필터링
export function getCountriesByContinent(continent: string): Country[] {
  return getAllCountries().filter((c) => c.continent === continent);
}

// 국가 이름(한국어/영어) 검색
export function searchCountries(query: string): Country[] {
  const q = query.toLowerCase();
  return getAllCountries().filter(
    (c) => c.nameKo.includes(q) || c.nameEn.toLowerCase().includes(q)
  );
}
