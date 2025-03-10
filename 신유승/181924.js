function solution(arr, queries) {
  queries.forEach(query => {
    let tmp = arr[query[0]];
    arr[query[0]] = arr[query[1]];
    arr[query[1]] = tmp;
  });

  return arr;
}

// 좋아요 많은 풀이
// function solution(arr, queries) {
//   queries.forEach( ([a,b]) => {
//       [arr[a],arr[b]] = [arr[b],arr[a]];
//   })
//   return arr;
// }