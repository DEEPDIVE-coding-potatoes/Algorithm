# [프로그래머스 코딩 기초 트레이닝] 이차원 배열 대각선 순회하기

### 성능 요약

- py
  메모리 | 9.03MB  
  시간 | 0.01ms

- js
  메모리 | 33.4MB  
  시간 | 0.04ms

### 분류

이차원 리스트(배열)

### 제출 일자

ㅁㄴㅇㄹ

### 문제 설명

2차원 정수 배열 board와 정수 k가 주어집니다.

i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

### 제한 사항

- 1 ≤ board의 길이 ≤ 100
- 1 ≤ board[i]의 길이 ≤ 100
  - 1 ≤ board[i][j] ≤ 10,000
  - 모든 board[i]의 길이는 같습니다.
- 0 ≤ k < board의 길이 + board[i]의 길이

### 입출력 예

| board                                     | k   | result |
| ----------------------------------------- | --- | ------ |
| [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]] | 2   | 8      |
