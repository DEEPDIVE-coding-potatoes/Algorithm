/* 글자 지우기 */

function solution(my_string, indices) {
  arr = [...my_string].filter((_, i) => !indices.includes(i))
  return arr.join('');
}



/* 다른 사람 풀이 */
function solution(m, a) {
  var answer = '';

  for (let i = 0; i < m.length; i++) {
    if (!a.includes(i)) {
      answer += m[i]
    }
  }

  return answer;
}