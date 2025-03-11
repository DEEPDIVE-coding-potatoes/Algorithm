/* 주사위 게임 3 */

function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  
  const maxNum = Math.max(a, b, c, d);
  const minNum = Math.min(a, b, c, d);
  
  let maxCount = 0;
  let minCount = 0;
  
  arr.forEach((element) => {
      if(element === maxNum) maxCount++;
      if(element === minNum) minCount++;
  })
  
  if(arr.every(element => element === a)) {
      return 1111 * a;
  }
  
  if(maxCount === 3) return Math.pow((10 * maxNum + minNum), 2)
  if(minCount === 3) return Math.pow((10 * minNum + maxNum), 2)
  
  if(maxCount === 2 && minCount === 2) {
      return (maxNum + minNum) * Math.abs(maxNum - minNum);
  }
  
  if(a === b) return c * d;
  if(a === c) return b * d;
  if(a === d) return b * c;
  if(b === c) return a * d;
  if(b === d) return a * c;
  if(c === d) return a * b;
  
  return minNum;
}