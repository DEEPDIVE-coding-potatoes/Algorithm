/**
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 1,000
 * 0 ≤ arr의 원소 ≤ 1,000,000
 * 1 ≤ queries의 길이 ≤ 1,000
 * 0 ≤ s ≤ e < arr의 길이
 */

function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (i = s; i <= e; i++)
      arr[i]++;
  })
  return arr;
}

// while문을 사용한 풀이
// function solution(arr, queries) {
//   queries.forEach(([s, e]) => {
//     while (s <= e) arr[s++]++;
//   });
//   return arr;
// }