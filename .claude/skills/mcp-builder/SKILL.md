---
name: mcp-builder
description: MCP(Model Context Protocol) 서버를 생성하고 설정합니다.
argument-hint: "[MCP 서버 설명 또는 연동 대상]"
---

## MCP 서버 생성

$ARGUMENTS 를 위한 MCP 서버를 생성하세요.

### 생성 절차

1. **요구사항 정의** — 어떤 도구(tools)와 리소스(resources)를 제공할지 결정
2. **서버 구현** — MCP SDK를 사용하여 서버 코드 작성
3. **도구 정의** — JSON Schema 기반 입출력 정의
4. **테스트** — `mcp-cli`로 도구 호출 테스트
5. **등록** — Claude Code 설정에 MCP 서버 추가

### 구조

```
mcp-server-<name>/
├── server.py          # 메인 서버 코드
├── tools/             # 도구 핸들러
├── requirements.txt   # 의존성
└── README.md          # 사용법
```

### 규칙

1. `mcp` Python SDK 사용 (`pip install mcp`)
2. 각 도구에 명확한 description과 JSON Schema 정의
3. 에러 핸들링 포함
4. 민감 정보(API 키 등)는 환경 변수로 관리
