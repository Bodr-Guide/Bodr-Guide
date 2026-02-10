---
name: debug-query
description: Text2SQL 워크플로우에서 특정 자연어 질의가 어떻게 처리되는지 디버깅합니다.
argument-hint: "[자연어 질의]"
---

## Text2SQL 질의 디버깅

"$ARGUMENTS" 질의의 처리 과정을 단계별로 추적하세요.

### 디버깅 단계
1. **Query Cache 확인** — Qdrant 캐시 히트 여부 (유사도 임계값: 0.95)
2. **Schema Linking** — 어떤 테이블/컬럼이 선택되었는지 확인
   - Qdrant 벡터 검색 결과
   - Neo4j 그래프 검색 결과 (FK 관계, 온톨로지)
3. **SQL 생성** — LLM이 생성한 SQL 확인
4. **SQL 검증** — Guardrail 통과 여부 (SELECT만 허용)
5. **SQL 실행** — 실행 결과 또는 에러

### 출력
- 각 단계별 입력/출력 데이터
- 실패 지점과 원인 분석
- 개선 제안
