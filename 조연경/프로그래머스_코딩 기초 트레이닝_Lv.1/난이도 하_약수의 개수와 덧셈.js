// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52



function solution(left, right) {
  let res = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count++;
        if (j !== i / j) {
          count++;
        }
      }
    }
    if (count % 2 === 0) { res += i; }
    else { res -= i; }
  }
  return res;
}


// [좋아요 많은 풀이]
// 약수의 갯수가 홀수인 수 -> 제곱수 ㄷㅂ;; 

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }