---
name: frontend-design
description: React/Tailwind 기반 프론트엔드 UI를 설계하고 생성합니다.
argument-hint: "[UI 컴포넌트 또는 페이지 설명]"
---

## 프론트엔드 UI 생성

$ARGUMENTS UI를 설계하고 구현하세요.

### 지원 작업

- **컴포넌트 생성** — React 컴포넌트 설계 및 구현
- **페이지 레이아웃** — 전체 페이지 구조 설계
- **스타일링** — Tailwind CSS 기반 반응형 디자인

### 기술 스택

- React (함수형 컴포넌트 + Hooks)
- Tailwind CSS
- TypeScript (선택)

### 규칙

1. 컴포넌트는 재사용 가능하게 설계
2. 반응형 디자인 적용 (모바일 → 데스크톱)
3. 접근성(a11y) 고려 — 적절한 ARIA 속성, 시맨틱 태그
4. 상태 관리는 최소 범위에서 처리 (Props → Context → 전역 상태 순)
5. 컴포넌트 파일 구조: `components/<ComponentName>/index.tsx`
