/* 문자 개수 세기 */

function solution(my_string) {
  let alpha = Array(52).fill(0);
  Array.from(my_string).forEach(char => {
      if(char >= 'A' && char <= 'Z') {
          alpha[char.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
      }
      else if(char >= 'a' && char <= 'z') {
          alpha[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26] += 1;
      }
  });
  return alpha;
}