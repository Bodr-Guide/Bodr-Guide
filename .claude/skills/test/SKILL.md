---
name: test
description: 지정된 파일/모듈에 대한 테스트를 작성합니다.
argument-hint: "[파일경로 또는 모듈명]"
---

## 테스트 작성

$ARGUMENTS에 대한 테스트를 작성하세요.

### 규칙
1. 대상 코드를 먼저 읽고 동작 파악
2. pytest 사용, `tests/unit/` 또는 `tests/integration/`에 배치
3. 테스트 파일명: `test_<모듈명>.py`
4. 정상 케이스, 엣지 케이스, 에러 케이스 포함
5. mock/fixture 활용하여 외부 의존성 격리
6. 작성 후 `pytest <테스트파일>` 실행하여 통과 확인

### 네이밍
- 테스트 함수명: `test_<기능>_<시나리오>_<기대결과>`
- 예: `test_generate_sql_with_invalid_table_raises_error`
