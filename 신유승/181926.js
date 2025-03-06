/**
 * 문자열 control의 각 문자에 따라서 n의 값을 조작하는 함수를 작성하라
 */

function solution(n, control) {
  return control.split('').reduce((n, c) => {
    if (c === "w") n++;
    if (c === "s") n--;
    if (c === "d") n += 10;
    if (c === "a") n -= 10;
    return n;
  }, n);
}

/** 좋아요 많은 코드
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
 */