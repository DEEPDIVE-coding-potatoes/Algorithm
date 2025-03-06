/* 홀짝에 따라 다른 값 반환하기 */
function solution(n) {
  let sum = 0;
  if(n % 2 === 0) {
      for(let i = 2; i <= n; i+=2) {
          sum += i * i
      }
  } else {
      for(let i = 1; i <= n; i+=2) {
          sum += i
      }
  }
  return sum;
}