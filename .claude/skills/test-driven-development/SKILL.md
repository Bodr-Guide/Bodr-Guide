---
name: test-driven-development
description: TDD 방식으로 개발합니다. 실패하는 테스트를 먼저 작성한 뒤 구현합니다.
argument-hint: "[구현할 기능 설명]"
---

## TDD 개발

$ARGUMENTS 기능을 TDD 방식으로 구현하세요.

### 프로세스

1. **Red** — 실패하는 테스트를 먼저 작성
   - 기능의 기대 동작을 테스트로 표현
   - `pytest <테스트파일>` 실행하여 실패 확인
2. **Green** — 테스트를 통과하는 최소한의 코드 작성
   - 과도한 구현 금지, 테스트가 통과할 만큼만 작성
3. **Refactor** — 코드 정리 및 리팩토링
   - 중복 제거, 네이밍 개선
   - 리팩토링 후 테스트 재실행하여 통과 확인

### 규칙

- 테스트 없이 프로덕션 코드를 작성하지 않음
- 한 번에 하나의 테스트만 추가
- 각 단계(Red → Green → Refactor)를 명확히 구분하여 진행
- pytest 사용, `tests/unit/` 또는 `tests/integration/`에 배치
