/* 문자열 뒤집기 */

/* 나의 풀이 */
function solution(my_string, s, e) {
  let arr = my_string.split('');
  let newArr = arr.slice(s, e + 1).reverse();
  arr.splice(s, newArr.length, ...newArr);
  return arr.join('');
}

/* 다른 풀이 1 */
function solution(my_string, s, e) {
  const tmp = my_string.slice(s, e + 1)
  .split('')
  .reverse()
  .join('');
  return my_string.slice(0, s) + tmp + my_string.slice(e + 1);
}

/* 다른 풀이 2 */
function solution(my_string, s, e) {
  const arr = Array.from(my_string)
  const words = arr.slice(s, e + 1)
  words.reverse()
  arr.splice(s, e - s + 1, ...words)
  return arr.join('')
}