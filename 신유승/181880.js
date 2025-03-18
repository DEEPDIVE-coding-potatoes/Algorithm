/**
 * 정수가 있을 때, 
 * 짝수라면 반으로 나누고, 
 * 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 
 * 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.
 * 
 * 10 / 2 = 5
 * (5 - 1) / 2 = 2
 * 2 / 2 = 1
 * 
 * 위와 같이 3번의 나누기 연산으로 1이 되었습니다.
 * 정수들이 담긴 리스트 num_list가 주어질 때, 
 * num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 3 ≤ num_list의 길이 ≤ 15
 * 1 ≤ num_list의 원소 ≤ 30
 */

function solution(num_list) {
  let count = 0;
  for (let num of num_list) {
    while (num > 1) {
      num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
      count++;
    }
  }
  return count;
}

// 좋아요 많은 코드
// function solution(num_list) {
//   return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
// }

// 숫자를 2진수로 바꾼 후 각 숫자의 비트 수 - 1이 필요한 나누기 횟수가 된다.
// 그 이유는 숫자를 2진수로 변환하면 v가 1이 될 때까지 나누는 과정을 그대로 보여주고,
// 2^n이면 n번의 나누기가 필요한 것인데,
// 비트의 개수는 (log2(v)+1)이므로, length - 1을 하면 나누기 횟수와 일치한다.