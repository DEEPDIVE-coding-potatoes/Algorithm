// 문제 설명
// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 100
// 1 ≤ numbers의 원소 ≤ 100
// 0 ≤ n < numbers의 모든 원소의 합


const solution = (numbers, n) => 
  numbers.reduce((sum, num) => sum > n ? sum : sum + num, 0);



// [다른 풀이 - for문 활용]
// reduce() -> 모든 요소를 순회 해서 중간에 멈출수x
// for문 -> 원하는 순간 루프 중단 가능

// const solution = (numbers, n) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//     if (sum > n) return sum;
//   }
//   return sum;
// };
