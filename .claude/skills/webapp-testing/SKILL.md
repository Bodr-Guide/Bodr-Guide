---
name: webapp-testing
description: Playwright를 사용하여 웹 애플리케이션을 테스트합니다.
argument-hint: "[테스트 대상 URL 또는 시나리오]"
---

## 웹 앱 테스팅

$ARGUMENTS 에 대한 웹 앱 테스트를 수행하세요.

### 지원 작업

- **E2E 테스트 작성** — Playwright 기반 End-to-End 테스트
- **UI 검증** — 스크린샷 캡처 및 시각적 검증
- **API 테스트** — HTTP 요청/응답 검증

### 도구

- Playwright (`pip install playwright && playwright install`)
- pytest-playwright (`pip install pytest-playwright`)

### 테스트 구조

```python
from playwright.sync_api import Page

def test_example(page: Page):
    page.goto("http://localhost:8000")
    page.click("button#submit")
    assert page.locator("h1").text_content() == "결과"
```

### 규칙

1. 테스트는 독립적으로 실행 가능해야 함
2. 선택자는 `data-testid` 우선 사용
3. 적절한 대기(wait) 처리로 플레이키 테스트 방지
4. 스크린샷은 실패 시 자동 캡처
