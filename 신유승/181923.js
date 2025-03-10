function solution(arr, queries) {
  let result = [];
  queries.forEach(([s, e, k]) => {
    let min = 1000000;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < min) min = arr[i];
    }
    min === 1000000 ? result.push(-1) : result.push(min);
  });

  return result;
}

// 좋아요 많은 풀이
// function solution(arr, queries) {
//   return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
// }