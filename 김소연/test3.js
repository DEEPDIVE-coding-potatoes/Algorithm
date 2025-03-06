// 문제
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = num_list.length > 10 ? num_list.reduce((a,b) => a+b) : num_list.reduce((a,b) =>  a * b);
  return answer;
}

//다른사람 풀이 (가독성도 좋아보이고, 실행 시간도 훨씬 짧게 나왔다.)
function solution(num_list) {
  const mult = (acc, v) => acc * v;
  const add = (acc, v) => acc + v;

  return num_list.length > 10
    ? num_list.reduce(add)
    : num_list.reduce(mult);
}
