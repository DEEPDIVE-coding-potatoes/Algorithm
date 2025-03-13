/**
 * 정수 배열 arr가 주어집니다. 
 * 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
 * 단, arr에 2가 없는 경우 [-1]을 return 합니다.
 * 
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 100,000
 * 1 ≤ arr의 원소 ≤ 10
 */

function solution(arr) {
  const location = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) location.push(i);
  }
  return location.length !== 0 ? arr.slice(location[0], location[location.length - 1] + 1) : [-1];
}

// 좋아요 많은 풀이
// function solution(arr) {
//   const from = arr.indexOf(2);
//   const end = arr.lastIndexOf(2);

//   return from === -1 ? [-1] : arr.slice(from, end + 1);
// }