---
name: commit
description: 현재 변경사항을 분석하고 프로젝트 컨벤션에 맞는 커밋을 생성합니다.
disable-model-invocation: true
---

## 커밋 생성

1. `git status`와 `git diff`로 변경사항 확인
2. `git log --oneline -10`으로 최근 커밋 스타일 확인
3. 변경사항을 분석하여 커밋 메시지 작성

### 커밋 메시지 형식

```
<type>: <issue-id> <제목 (50자 이내)>

<본문 (선택, 변경 이유/방법 간결하게)>
```

### 타입
- `feature`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (로직 영향 없음)
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/리팩토링
- `chore`: 빌드, 패키지 매니저 등 보조 작업

### 규칙
- 명령형 어조 사용
- 관련 GitHub 이슈 ID 포함
- `.env`, 인증 정보 파일은 커밋하지 않음
