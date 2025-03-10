/* 원소들의 곱과 합 */

function solution(num_list) {
  return Math.pow(num_list.reduce((a, b) => a + b), 2) > num_list.reduce((a, b) => a * b) ? 1 : 0;
}