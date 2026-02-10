---
name: fix-issue
description: GitHub 이슈를 분석하고 수정합니다.
disable-model-invocation: true
argument-hint: "[이슈번호]"
---

## GitHub 이슈 수정

이슈 #$ARGUMENTS를 수정하세요.

### 절차
1. `gh issue view $ARGUMENTS`로 이슈 내용 확인
2. 관련 코드 탐색 및 원인 분석
3. 수정 구현
4. 테스트 작성/실행하여 수정 검증
5. 커밋 메시지에 이슈 번호 포함
