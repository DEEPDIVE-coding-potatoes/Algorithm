/* 접미사 배열 */

function solution(my_string) {
  let result = [];
  let strLen = my_string.length;
  my_string.split('').forEach((_, i) => {
      result.push(my_string.slice(i, strLen));
  });
  return result.sort();
}