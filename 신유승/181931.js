/*
  181931
  included에는 boolean 형태의 배열
  a는 첫 항, d는 공차
  included의 true항일 때의 등차수열의 항을 모두 더하라.
*/

function solution(a, d, included) {
  return included.reduce((answer, v, idx) => {
    return answer + (v ? a + d * idx : 0)
  }, 0)
}