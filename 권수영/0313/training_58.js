/* 가까운 1 찾기 */

function solution(arr, idx) {
  for(let i = idx ; i < arr.length; i++) {
      if(arr[i] == 1 && i >= idx) return i;
  }
  return -1
}


/* 다른 풀이 */
const solution=(a,i)=>a.indexOf(1,i);