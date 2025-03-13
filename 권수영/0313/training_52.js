/* 세로 읽기 */

/* 나의 풀이 */
function solution(my_string, m, c) {
  let result = '';
  let my_array = Array.from(my_string);

  my_array.forEach((char, idx) => {
    if ((idx % m) === (c - 1)) {
      result += char;
    }
  });
  return result;
}



/* 다른 풀이 */
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join('');
}