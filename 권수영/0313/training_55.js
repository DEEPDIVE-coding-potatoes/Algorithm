/* 배열 만들기 1 */

function solution(n, k) {
  let result = [];
  for (let i = k; i <= n; i += k) result.push(i);
  return result;
}