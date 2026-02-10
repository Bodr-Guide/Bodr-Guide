---
name: docx
description: Word 문서(.docx)를 생성, 편집, 분석합니다.
argument-hint: "[작업 설명 또는 파일 경로]"
---

## Word 문서 처리

$ARGUMENTS 작업을 수행하세요.

### 지원 작업

- **생성** — 새 .docx 문서 생성 (제목, 본문, 표, 목록 등)
- **편집** — 기존 .docx 문서 내용 수정
- **분석** — .docx 문서 내용 읽기 및 요약

### 규칙

1. `python-docx` 라이브러리 사용
2. 설치 필요 시: `pip install python-docx`
3. 한글 폰트 지원 확인 (맑은 고딕 등)
4. 생성 파일은 프로젝트 루트 또는 사용자가 지정한 경로에 저장
