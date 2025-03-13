/* 문자열 섞기 */
function solution(str1, str2) {
  let result = []
  str1.split('').forEach((char, i) => {
      result.push(char + str2[i])
  });
  
  return result.join('');
}