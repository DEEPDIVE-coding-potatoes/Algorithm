/**
 * 두 정수 left와 right가 매개변수로 주어집니다. 
 * left부터 right까지의 모든 수들 중에서, 
 * 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ left ≤ right ≤ 1,000
 */

function divCount(num) {
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    divCount(i) % 2 ? answer += i : answer -= i;
  }
  return answer;
}

// 제곱근이 정수면 약수의 갯수가 홀수
// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }