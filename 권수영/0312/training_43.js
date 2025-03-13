/* 문자열 여러 번 뒤집기 */

function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
      const [s,e] = queries[i];
      const reversed = [...my_string].slice(s,e + 1).reverse().join('');
      my_string = my_string.slice(0, s) + reversed + my_string.slice(e + 1);
  }
  return my_string;
}