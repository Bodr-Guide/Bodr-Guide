// Open-Meteo API를 사용한 실시간 날씨 조회 유틸리티
// 무료 API, 키 불필요 — https://open-meteo.com/

export interface WeatherData {
  temperature: number;   // 현재 기온 (°C)
  weatherCode: number;   // WMO 날씨 코드
  description: string;   // 날씨 설명 (한국어)
  icon: string;          // 날씨 아이콘 이모지
}

// WMO 날씨 코드 → 한국어 설명 + 아이콘
function getWeatherInfo(code: number): { description: string; icon: string } {
  if (code === 0) return { description: "맑음", icon: "☀️" };
  if (code <= 3) return { description: "구름 조금", icon: "⛅" };
  if (code <= 48) return { description: "안개", icon: "🌫️" };
  if (code <= 55) return { description: "이슬비", icon: "🌦️" };
  if (code <= 65) return { description: "비", icon: "🌧️" };
  if (code <= 75) return { description: "눈", icon: "🌨️" };
  if (code <= 82) return { description: "소나기", icon: "🌧️" };
  if (code <= 99) return { description: "뇌우", icon: "⛈️" };
  return { description: "알 수 없음", icon: "🌡️" };
}

// Open-Meteo API로 현재 날씨 조회
export async function fetchWeather(lat: number, lng: number): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code&timezone=auto`;

  const res = await fetch(url, { next: { revalidate: 1800 } }); // 30분 캐시
  if (!res.ok) throw new Error("날씨 데이터를 불러올 수 없습니다");

  const data = await res.json();
  const temperature = Math.round(data.current.temperature_2m);
  const weatherCode = data.current.weather_code;
  const { description, icon } = getWeatherInfo(weatherCode);

  return { temperature, weatherCode, description, icon };
}
