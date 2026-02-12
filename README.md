# BorderWiki

> Travel Without Borders. — 대한민국 여권으로 떠나는 가장 자유로운 여행.

전 세계 국가별 입국 요건(비자, 무비자, 도착비자, 전자비자)을 한눈에 확인할 수 있는 여행 정보 서비스입니다.

## Tech Stack

| 영역 | 기술 |
|------|------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Database | Supabase (PostgreSQL) |
| Auth | Google OAuth (Supabase Auth) |
| Hosting | Vercel |

## Getting Started

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

```bash
cp .env.example .env.local
```

`.env.local` 파일을 열어 Supabase, Google OAuth 등의 값을 입력합니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000` 에서 확인

### 4. 빌드

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                # 루트 레이아웃 (ThemeProvider 포함)
│   ├── page.tsx                  # 메인 페이지
│   ├── globals.css               # Tailwind v4 + 다크모드 변수
│   ├── countries/[slug]/         # 국가 상세 (패럴랙스 갤러리)
│   └── country/[id]/             # 국가 상세 (정보, JP는 특수 레이아웃)
├── components/
│   ├── ui/                       # 범용 UI (VisaBadge 등)
│   ├── layout/
│   │   └── Header.tsx            # 헤더 (스위치 스타일 테마 토글)
│   ├── providers/
│   │   └── ThemeProvider.tsx     # 다크모드 Context (기본값: dark)
│   ├── country/
│   │   ├── JapanDetailPage.tsx   # 일본 전용 상세 페이지
│   │   ├── TabNavigation.tsx     # 탭 네비게이션 (스크롤 유지)
│   │   └── Accordion.tsx         # 아코디언 UI 컴포넌트
│   └── features/
│       ├── home/                 # HeroSection, PopularCountries
│       └── country/              # ParallaxGallery
├── data/
│   ├── countries.ts              # 갤러리용 국가 데이터
│   └── countries/                # 국가별 JSON (50개국)
└── lib/
    ├── types.ts                  # 타입 정의
    ├── data.ts                   # JSON 데이터 로더
    ├── countries.ts              # 데이터 접근 유틸리티
    └── countryImages.ts          # Unsplash 이미지 매핑
```

## Features

### 🌍 국가 정보
- 50개국 비자 정보 제공 (무비자, 비자필요, 도착비자, 전자비자)
- 국가 검색 (한글/영문)
- 4장씩 가로 캐러셀로 국가 카드 탐색
- 국가 클릭 시 패럴랙스 스크롤 갤러리

### 🇯🇵 일본 상세 페이지 (Beta)
- **여행 목적별 맞춤 정보**: 여행/관광, 출장/비즈니스, 유학, 취업, 워킹홀리데이
- **출입국 정보**
  - 비자 요건 (목적별 필수/권장/불필요 자동 표시)
  - 전자여행허가 (Visit Japan Web) 신청 링크
  - 무비자 입국 안내
  - 입국카드 작성법
  - 국제운전면허증 정보
- **여행 준비 정보**
  - 여행자 보험 (추천 보장 항목)
  - 통신 옵션 (eSIM, 현지 유심, 국제 로밍)
  - 환전 정보 및 팁
  - 출국 체크리스트
- **탭 네비게이션**: 출입국, 여행준비, 안전·긴급, 주요도시
- **스크롤 위치 유지**: 탭 전환 시 사용자 편의성 개선

### 🎨 UI/UX
- **다크모드 우선**: 첫 방문 시 다크모드로 시작
- **직관적인 테마 토글**: 해/달 아이콘이 동시에 보이는 스위치 스타일
- **반응형 디자인**: 모바일/태블릿/데스크톱 최적화
- **아코디언 인터페이스**: 정보 섹션별 접기/펼치기

## Deployment

Vercel에 연결하여 자동 배포:

```bash
vercel
```

환경 변수는 Vercel Dashboard > Settings > Environment Variables 에서 설정합니다.

## Roadmap

### 현재 개발 완료
- ✅ 일본 상세 페이지 (여행 목적별 맞춤 정보)
- ✅ 다크모드 기본 설정
- ✅ 탭 전환 시 스크롤 위치 유지
- ✅ 비자/전자여행허가 신청 링크

### 다음 단계
- 🔄 다른 주요 국가에 일본 페이지 레이아웃 적용 (미국, 영국, 프랑스 등)
- 📍 주요 도시별 상세 정보 추가
- 🔍 고급 필터링 (비자 유형, 지역별)
- 📱 PWA 지원
- 🌐 다국어 지원 (영문)

## Contributing

프로젝트 개선 아이디어나 버그 리포트는 Issue로 등록해주세요.

## License

MIT
