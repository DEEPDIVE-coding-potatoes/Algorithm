# [프로그래머스 코딩 기초 트레이닝] 배열의 원소 삭제하기

### 성능 요약

- py
  메모리 | 9.21MB  
  시간 | 0.01ms

- js
  메모리 | 33.5MB  
  시간 | 0.04ms

### 분류

조건문 활용

### 제출 일자

2025-03-12 15:38:27

### 문제 설명

정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

### 제한 사항

- 1 ≤ arr의 길이 ≤ 100
- 1 ≤ arr의 원소 ≤ 1,000
- arr의 원소는 모두 서로 다릅니다.
- 1 ≤ delete_list의 길이 ≤ 100
- 1 ≤ delete_list의 원소 ≤ 1,000
- delete_list의 원소는 모두 서로 다릅니다.

### 입출력 예

| arr                       | delete_list                 | result                 |
| ------------------------- | --------------------------- | ---------------------- |
| [293, 1000, 395, 678, 94] | [94, 777, 104, 1000, 1, 12] | [293, 395, 678]        |
| [110, 66, 439, 785, 1]    | [377, 823, 119, 43]         | [110, 66, 439, 785, 1] |
