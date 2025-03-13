/*배열의 길이에 따라 다른 연산하기*/
function solution(arr, n) {
  if (arr.length % 2 === 0) {
      return arr.map((num, i) => i % 2 !== 0 ? num + n : num)
  } else {
      return arr.map((num, i) => i % 2 === 0 ? num + n : num)
  }
}