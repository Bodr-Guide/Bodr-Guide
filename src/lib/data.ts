import fs from "fs";
import path from "path";
import { Country } from "./types";

// 국가 JSON 데이터 디렉토리 경로
const DATA_DIR = path.join(process.cwd(), "src/data/countries");

// 모든 국가 데이터를 가져옴 (한국어 이름순 정렬)
// 데이터 디렉토리가 없거나 빈 경우 빈 배열 반환
export function getAllCountries(): Country[] {
  try {
    if (!fs.existsSync(DATA_DIR)) return [];

    const files = fs
      .readdirSync(DATA_DIR)
      .filter((f) => f.endsWith(".json") && f !== "index.json");

    return files
      .map((file) => {
        const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
        return JSON.parse(content) as Country;
      })
      .sort((a, b) => a.nameKo.localeCompare(b.nameKo, "ko"));
  } catch {
    return [];
  }
}

// ID로 특정 국가 데이터를 가져옴
export function getCountryById(id: string): Country | null {
  const filePath = path.join(DATA_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content) as Country;
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
