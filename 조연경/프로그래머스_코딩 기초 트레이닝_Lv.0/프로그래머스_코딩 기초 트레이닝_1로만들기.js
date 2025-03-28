// 문제 설명
// 정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.

// 10 / 2 = 5
// (5 - 1) / 2 = 2
// 2 / 2 = 1
// 위와 같이 3번의 나누기 연산으로 1이 되었습니다.

// 정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ num_list의 길이 ≤ 15
// 1 ≤ num_list의 원소 ≤ 30


function solution(num_list) {
  let res = 0;

  num_list.forEach(num => {
    let count = 0;

    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = (num - 1) / 2;
      }
      count++;
    }
    res += count;
  });

  return res;
}




// [다른 풀이]
function solution(num_list) {
  return num_list
    .map((v) => v.toString(2).length - 1)  // 각 숫자의 2진수 길이에서 1을 빼기
    .reduce((ac, c) => ac + c);  // 배열의 모든 연산 횟수 합산
}
