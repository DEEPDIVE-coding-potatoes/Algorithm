/* 9로 나눈 나머지 */

function solution(number) {
  return number.split('').map(Number).reduce((a, b) => a + b) % 9
}