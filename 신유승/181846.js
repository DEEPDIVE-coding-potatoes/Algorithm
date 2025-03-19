/**
 * 0 이상의 두 정수가 문자열 a, b로 주어질 때, 
 * a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * 1 ≤ a의 길이 ≤ 100,000
 * 1 ≤ b의 길이 ≤ 100,000
 * a와 b는 숫자로만 이루어져 있습니다.
 * a와 b는 정수 0이 아니라면 0으로 시작하지 않습니다.
 */

const solution = (a, b) => String(BigInt(a) + BigInt(b));

// 정성이 담긴 풀이
// function solution(a, b) {
//   a = [...a];
//   b = [...b];
//   let answer = [];

//   let next = 0;
//   while (a.length && b.length) {
//     let _a = +a.pop();
//     let _b = +b.pop();
//     let sum = _a + _b + next;

//     if (sum >= 10) {
//       sum -= 10;
//       next = 1;
//     } else
//       next = 0;

//     answer.push(sum);
//   }

//   let rest = a.length ? a : b;
//   while (rest.length) {
//     let sum = +rest.pop() + next;
//     if (sum >= 10) {
//       sum -= 10;
//       next = 1;
//     } else
//       next = 0;

//     answer.push(sum);
//   }

//   if (next)
//     answer.push(next);

//   return answer.reverse().join("");
// }