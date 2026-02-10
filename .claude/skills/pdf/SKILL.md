---
name: pdf
description: PDF 파일에서 텍스트/테이블을 추출하거나 PDF를 생성합니다.
argument-hint: "[작업 설명 또는 파일 경로]"
---

## PDF 처리

$ARGUMENTS 작업을 수행하세요.

### 지원 작업

- **추출** — PDF에서 텍스트, 테이블 데이터 추출
- **생성** — 텍스트, 표, 차트를 포함한 PDF 생성
- **병합/분할** — 여러 PDF 합치기 또는 페이지 분할

### 도구

- 텍스트 추출: `PyPDF2` 또는 `pdfplumber`
- 테이블 추출: `pdfplumber`, `camelot`
- PDF 생성: `reportlab`, `fpdf2`
- 설치: `pip install pdfplumber reportlab`

### 규칙

1. 추출 시 원본 구조(표, 단락)를 최대한 보존
2. 한글 PDF 처리 시 인코딩 확인
3. 대용량 PDF는 페이지 범위를 지정하여 처리
