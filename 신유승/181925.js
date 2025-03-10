function solution(numLog) {
  let result = [];

  for (let i = 0; i < numLog.length - 1; i++) {
    const dif = numLog[i + 1] - numLog[i];
    if (dif === 1) result.push('w');
    else if (dif === -1) result.push('s');
    else if (dif === 10) result.push('d');
    else if (dif === -10) result.push('a');
  }

  return result.join("");
}

// 인기 많은 풀이
// function solution(numLog) {
//   const convert = {
//     '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//   };

//   return numLog.slice(1).map((v, i) => {
//     return convert[v - numLog[i]]
//   }).join('')
// }