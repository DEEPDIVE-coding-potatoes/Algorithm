/*
  181928
  num_list가 주어졌을 때
  홀수만 순서대로 이어 붙인 수와
  짝수만 순서대로 붙인 수의 합을 반환하라.
*/

function solution(num_list) {
  let com1 = Number(num_list.reduce((acc, cur) => {
    if (cur % 2 === 0) return String(acc) + String(cur);
    else return acc;
  }, 0))

  let com2 = Number(num_list.reduce((acc, cur) => {
    if (cur % 2 !== 0) return String(acc) + String(cur);
    else return acc;
  }, 0))

  return com1 + com2;
}