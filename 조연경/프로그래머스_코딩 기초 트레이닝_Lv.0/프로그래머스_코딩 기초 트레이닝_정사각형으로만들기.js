// 문제 설명
// 이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 100
// 1 ≤ arr의 원소의 길이 ≤ 100
// arr의 모든 원소의 길이는 같습니다.
// 1 ≤ arr의 원소의 원소 ≤ 1,000



// 다른 풀이 보고 풀었음...
function solution(arr) {
  const row = arr.length;
  const col = arr[0].length;
  const diff = Math.abs(row - col);

  if(row > col) {
      for(let i=0; i<row; i++) {
          for(let j=0; j<diff; j++) {
              arr[i].push(0);
          }
      }
  } else if(row < col) {
      for(let i=0; i<diff; i++) {
          const row = new Array(col).fill(0);
          arr.push(row);
      }
  }

  return arr;
}