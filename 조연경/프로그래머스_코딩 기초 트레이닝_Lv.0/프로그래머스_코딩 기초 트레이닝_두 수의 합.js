// 문제 설명
// 0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ a의 길이 ≤ 100,000
// 1 ≤ b의 길이 ≤ 100,000
// a와 b는 숫자로만 이루어져 있습니다.
// a와 b는 정수 0이 아니라면 0으로 시작하지 않습니다.



function solution(a, b) {
  var answer = (BigInt(a) + BigInt(b)).toString();
  return answer;
}


// 처음에는 이렇게 풀었는데, 크기가 너무 큰 수의 테스트는 통과하지 못했음
// function solution(a, b) {
//     const sum = parseInt(a) + parseInt(b);
//     return sum.toString(); 
// }

// 검색 후 BigInt() 사용해서 풀이 완료함.