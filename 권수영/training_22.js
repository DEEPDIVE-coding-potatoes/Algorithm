/* 조건 문자열 */
function solution(ineq, eq, n, m) {
  if(eq === '=' && n === m) return 1
  if(ineq === '<' && n < m) return 1
  if(ineq === '>' && n > m) return 1
  return 0
}