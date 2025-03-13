/* 카운트 다운 */

function solution(start_num, end_num) {
  let result = [];
  for(i = start_num; i >= end_num; i--) result.push(i);
  return result;
}