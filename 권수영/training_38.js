/* 배열 만들기 4 */

function solution(arr) {
  let i = 0;
  const stk = [];
  while(i < arr.length) {
      if(stk.length === 0 || stk[stk.length - 1] < arr[i]) {
          stk.push(arr[i]);
          i++;
      } else if(stk[stk.length - 1] >= arr[i]) {
          stk.pop();
      }
  }
  
  return stk;
}