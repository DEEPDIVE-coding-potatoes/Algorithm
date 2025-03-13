/* qr code */

function solution(q, r, code) {
  let result = ''
  code.split('').forEach((char, i) => {
      if(i % q === r) result += char;
  });
  return result;
}



/* 다른 풀이 */
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join('');
}