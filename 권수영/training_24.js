/* 코드 처리하기 */

function solution(code) {
  let mode = 0;
  let ret = '';
  
  for(let idx = 0; idx < code.length; idx++) {
      if(mode === 0){
      code[idx] === '1' ? (mode = 1) : (idx % 2 === 0 && (ret += code[idx]))
      } else {
          code[idx] ==='1' ? (mode = 0) : (idx % 2 !== 0 && (ret += code[idx]))
      }

  }
  
  return ret.length > 0 ? ret : "EMPTY";
}
