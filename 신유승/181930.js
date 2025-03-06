/*
  181930
  3개의 수를 입력받아,
  3개의 수가 모두 같으면 3개의 수의 합 * 3개의 수의 제곱의 합 * 3개의 수의 세제곱의 합을 반환하고,
  3개의 수 중 2개의 수가 같으면 3개의 수의 합 * 3개의 수의 제곱의 합을 반환하고,
  3개의 수가 모두 다르면 3개의 수의 합을 반환하라.
*/

function solution(a, b, c) {
  if (a === b && b === c) {
    return (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
  } else if (a === b || b === c || a === c) {
    return (a + b + c) * (a * a + b * b + c * c);
  } else {
    return a + b + c;
  }
}