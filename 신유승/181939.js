function solution(a, b) {
  let case1 = Number(String(a) + String(b));
  let case2 = Number(String(b) + String(a));
  return case1 > case2 ? case1 : case2;
  
  // return Math.max(Number(`${a}${b}`), Number(`${b}${a}`)) << 좋아요 많은 코드
}