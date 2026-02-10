---
name: pr
description: 현재 브랜치의 변경사항을 기반으로 GitHub Pull Request를 생성합니다.
disable-model-invocation: true
---

## PR 생성

1. `git status`, `git diff`, `git log`로 변경사항 분석
2. 베이스 브랜치 대비 모든 커밋 확인 (`git diff <base>...HEAD`)
3. PR 제목 (70자 이내)과 본문 작성

### PR 본문 형식

```markdown
## Summary
<1-3 bullet points>

## Test plan
- [ ] 테스트 체크리스트
```

### 브랜치 규칙
- `feature/*` → `develop`
- `hotfix/*` → `production` + `develop`
- `release/*` → `production`
