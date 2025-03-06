/*
  181929
  정수 배열이 주어졌을 때
  모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1, 크면 0을 반환하라.
*/

function solution(num_list) {
  let com1 = num_list.reduce((acc, cur) => acc * cur, 1);
  let com2 = Math.pow(num_list.reduce((acc, cur) => acc + cur, 0), 2);

  return com1 < com2 ? 1 : 0;
}