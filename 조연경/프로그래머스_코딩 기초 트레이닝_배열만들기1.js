// 문제 설명
// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000
// 1 ≤ k ≤ min(1,000, n)


function solution(n, k) {
  let arr = []; 

  for (let i = k; i <= n; i += k) {
    arr.push(i); 
  }

  return arr;
}

// [다른 풀이]
// function solution(n, k) {
//   return Array.from({ length: Math.floor(n / k) }, (_, i) => (i + 1) * k);
// }

// [사용 메서드]
// 1. Array.from({ length: X }, (_, i) => ...) : X 길이의 배열을 생성하고, 두 번째 인자로 받은 콜백 함수로 요소를 채움
// 2. Math.floor(n / k) : n을 k로 나눈 몫을 계산해서 배열 길이 결정