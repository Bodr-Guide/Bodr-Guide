# BodrGuide

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
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 루트 레이아웃
│   ├── page.tsx                  # 메인 페이지
│   ├── countries/[slug]/         # 국가 상세 (패럴랙스 갤러리)
│   └── country/[id]/             # 국가 상세 (정보)
├── components/
│   ├── ui/                       # 범용 UI (VisaBadge 등)
│   ├── layout/                   # Header 등 레이아웃
│   └── features/                 # 피처별 컴포넌트
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

- 50개국 비자 정보 제공 (무비자, 비자필요, 도착비자, 전자비자)
- 국가 검색 (한글/영문)
- 4장씩 가로 캐러셀로 국가 카드 탐색
- 국가 클릭 시 패럴랙스 스크롤 갤러리
- 다크 테마 UI

## Deployment

Vercel에 연결하여 자동 배포:

```bash
vercel
```

환경 변수는 Vercel Dashboard > Settings > Environment Variables 에서 설정합니다.
