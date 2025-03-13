/* 부분 문자열 이어 붙여 문자열 만들기 */

function solution(my_strings, parts) {
  let result = [];
  my_strings.forEach((string, i) => {
      const [s, e] = parts[i];
      result += string.slice(s, e + 1);
  });
  return result;
}