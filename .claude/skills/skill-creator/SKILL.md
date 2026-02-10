---
name: skill-creator
description: 새로운 Claude Code 커스텀 스킬을 생성합니다.
argument-hint: "[스킬 이름과 용도]"
---

## 커스텀 스킬 생성

$ARGUMENTS 스킬을 생성하세요.

### SKILL.md 형식

```markdown
---
name: <스킬명>
description: <스킬 설명>
argument-hint: "[인자 힌트]"
---

## <스킬 제목>

$ARGUMENTS에 대한 작업을 수행하세요.

### 규칙
1. ...
```

### 생성 절차

1. **용도 정의** — 스킬이 해결할 문제와 범위 결정
2. **SKILL.md 작성** — `.claude/skills/<스킬명>/SKILL.md` 경로에 생성
3. **메타데이터 설정**
   - `name`: 슬래시 커맨드로 사용할 이름 (kebab-case)
   - `description`: 스킬 목록에 표시될 설명
   - `argument-hint`: 사용자에게 보여줄 인자 힌트
4. **테스트** — `/스킬명 테스트 인자`로 호출하여 동작 확인

### 규칙

- 스킬은 하나의 명확한 목적을 가져야 함
- 프로젝트 컨벤션(한국어 설명, 영어 코드)을 따름
- `$ARGUMENTS`로 사용자 입력을 참조
