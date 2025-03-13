/* 배열 만들기 2 */

function solution(l, r) {
  const answer = [];
  for(let i = l; i <= r; i++) {
    // 배열 내 객체를 문자열로 바꾸고 자릿수 확인하여 0, 5만 있을 경우 push
      if([...String(i)].every(num => num === '0' || num === '5')) {
          answer.push(i);
      }
  }
  return answer.length > 0 ? answer : [-1];
}