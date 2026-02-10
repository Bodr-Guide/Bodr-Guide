---
name: evaluate
description: Text2SQL 평가를 실행하고 결과를 분석합니다.
disable-model-invocation: true
---

## Text2SQL 평가 실행

### 절차
1. `python scripts/run_evaluation.py`로 평가 실행
2. 결과 분석:
   - 전체 정확도 (Execution Accuracy)
   - Easy/Medium/Hard 난이도별 정확도
   - 실패 쿼리 패턴 분석
3. 이전 결과 대비 변화 요약
4. 개선 필요 영역 제안

### Hard Query 기준
- 3개 이상 테이블 JOIN
- Nested Subquery
- GROUP BY + HAVING
- Window Function
- Conditional Aggregation
- 파생 날짜 컬럼 표현식
