// 문제 설명
// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000
// 0 ≤ arr의 원소 ≤ 1,000,000
// 1 ≤ queries의 길이 ≤ 1,000
// 0 ≤ s ≤ e < arr의 길이
// 0 ≤ k ≤ 5


function solution(arr, queries) {
  // queries 배열을 순회하면서 각 쿼리 처리
  queries.forEach(([s, e, k]) => {
      // 범위 [s, e]를 순회하면서 i가 k의 배수이면 값을 증가
      for (let i = s; i <= e; i++) {
          if (i % k === 0) {
              arr[i] += 1;  // i가 k의 배수이면 해당 인덱스 값을 1 증가
          }
      }
  });
  return arr;  // 모든 쿼리가 처리된 후 결과 배열 반환
}