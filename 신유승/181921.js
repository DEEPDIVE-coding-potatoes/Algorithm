/**
 * 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 * 
 * 제한사항
 * 1 ≤ l ≤ r ≤ 1,000,000
 */

function solution(l, r) {
  const answer = [];

  for (let i = l; i <= r; i++) {
    if ([...String(i)].every(digit => digit === '0' || digit === '5')) {
      answer.push(i);
    }
  }

  return answer.length ? answer : [-1];
}

// 신기한 이진수 풀이
// function* gen50() {
//   let i = 1;

//   while(true) {
//       yield Number(Number(i).toString(2)) * 5;
//       i++;
//   }
// }
// function solution(l, r) {
//   const n = gen50();
//   let a = 0;
//   const arr = [];

//   while(a < l) { a = n.next().value; }
//   while(a <= r) { arr.push(a); a = n.next().value; }

//   return arr.length ? arr : [-1];
// }