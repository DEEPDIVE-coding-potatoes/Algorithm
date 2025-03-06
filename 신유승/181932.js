/*
  181932
  mode가 0(false)일 때 짝수번째 문자를, mode가 1(true)일 때 홀수번째 문자를 합친 문자열을 반환하라.
*/

function solution(code) {
  let mode = false;
  let ret = "";
  code.split('').forEach((c, idx) => {
    if (c === "1") mode = !mode;
    else {
      if (mode === false && idx % 2 === 0) {
        ret += c;
      }
      if (mode === true && idx % 2 === 1) {
        ret += c;
      }
    }
  });

  return ret === "" ? "EMPTY" : ret;

  // 신기한 풀이
  // function solution(code) {
  //   var answer = code.replaceAll("1", "").split("").filter((val, idx) => idx % 2 === 0).join("");
  //   return answer.length > 0 ? answer : "EMPTY";
  // }
}