/**
 * 자연수 n이 매개변수로 주어집니다. 
 * n을 3진법 상에서 앞뒤로 뒤집은 후, 
 * 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * n은 1 이상 100,000,000 이하인 자연수입니다.
 */

// function getTernary(n){
//   return n === 0 ? '' : getTernary(parseInt(n / 3)) + (n % 3);
// }

function solution(n) {
  const getTernary = n => n ? getTernary(parseInt(n / 3)) + (n % 3) : '';
  const getDecimal = n => Array.from({ length: n.length }, (v, i) => i).reverse().reduce((a, c, i) => a + 3 ** c * n.at(i), 0);
  return getDecimal(getTernary(n).split('').reverse().join(''));
}

// 헛웃음 나오는 풀이
// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(""), 3);
// }