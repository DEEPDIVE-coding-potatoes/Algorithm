/**
 * 문자열 myString과 pat이 주어집니다. 
 * myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ myString ≤ 1000
 * 1 ≤ pat ≤ 10
 */

const solution = (myString, pat) => {
  let count = 0;
  let pos = myString.indexOf(pat);

  while (pos !== -1) {
    count++;
    pos = myString.indexOf(pat, pos + 1);
  }

  return count;
};

// 정규 표현식을 사용한 풀이
// function solution(myString, pat) {
//   const reg = new RegExp(`(?=${pat})`, "g")
//   return myString.match(reg)?.length || 0;
// }