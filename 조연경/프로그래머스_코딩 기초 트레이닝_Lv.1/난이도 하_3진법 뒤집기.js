// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.



function solution(n) {
  const base3 = n.toString(3);   
  const reversedBase3 = base3.split('').reverse().join('');  
  return parseInt(reversedBase3, 3);  
}



// [코드 길이 줄이기 + 좋아요 높은 풀이]
// const solution = (n) => {
//     return parseInt([...n.toString(3)].reverse().join(""), 3);
// }