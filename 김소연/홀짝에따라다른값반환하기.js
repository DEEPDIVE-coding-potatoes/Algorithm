//홀짝에 따라 다른 값 반환하기

// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
  let numArray = Array.from({ length: n + 1 }, (v, i) => i);
  let odd = numArray.filter(v => v % 2 !== 0).reduce((a,c) => a + c);
  let even = numArray.filter(v => v % 2 === 0).reduce((a,c) => a + c **2);

  return n % 2 !== 0 ? odd : even;
}