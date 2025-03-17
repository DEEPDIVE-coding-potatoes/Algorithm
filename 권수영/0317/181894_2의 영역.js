/**
 * 문제 설명 :
 * 정수 배열 arr가 주어집니다.
 * 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
 * 단, arr에 2가 없는 경우 [-1]을 return 합니다.
 * 
 * 제한 사항 :
 * 1 ≤ arr의 길이 ≤ 100,000
 * 1 ≤ arr의 원소 ≤ 10
 */

function solution(arr) {
  if (!arr.includes(2)) return [-1];
  let idx1, idx2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      idx1 = i;
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 2) {
      idx2 = i;
      break;
    }
  }
  return arr.slice(idx1, idx2 + 1);
}

/*
다른 풀이

function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}

*/