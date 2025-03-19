/**
 * 문제 설명
 * 이차원 정수 배열 arr이 매개변수로 주어집니다.
 * arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
 * 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 100
 * 1 ≤ arr의 원소의 길이 ≤ 100
 * arr의 모든 원소의 길이는 같습니다.
 * 1 ≤ arr의 원소의 원소 ≤ 1,000
 */

function solution(arr) {
  const row = arr.length;
  const col = arr[0].length;

  if (row > col) {
    arr.forEach(rowArray => {
      while (rowArray.length < row) rowArray.push(0);
    });
  } else {
    while (arr.length < col) arr.push(new Array(col).fill(0));
  }
  return arr;
}

/**
 * 다른 풀이 (Math.max , .map 사용)
function solution(arr) {
    let n = Math.max(arr.length, Math.max(...arr.map(v=>v.length)));
    for (let a of arr) while (a.length<n) a.push(0);
    while (arr.length < n) arr.push(Array(n).fill(0));
    return arr;
}
 */