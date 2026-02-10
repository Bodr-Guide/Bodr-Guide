---
name: add-endpoint
description: FastAPI 엔드포인트를 추가합니다.
disable-model-invocation: true
argument-hint: "[엔드포인트 설명]"
---

## FastAPI 엔드포인트 추가

$ARGUMENTS 엔드포인트를 생성하세요.

### 규칙
1. `src/text2sql/api/routes/`에 라우터 파일 생성 또는 기존 파일에 추가
2. URL은 RESTful, `kebab-case`, 복수형 명사 사용
3. 요청/응답 모델은 `src/text2sql/models/`에 정의

### API 응답 형식
```python
# 성공
{"data": {}}

# 에러
{"error": {"code": 501, "name": "ERROR_NAME", "message": "설명"}}
```

### 공통 헤더
- `X-Transaction-ID`, `X-Service-Name`, `Authorization`

### 체크리스트
- [ ] Pydantic 요청/응답 모델 정의
- [ ] 엔드포인트 함수 구현
- [ ] 라우터를 `main.py`에 등록
- [ ] 에러 핸들링 추가
- [ ] 테스트 작성
