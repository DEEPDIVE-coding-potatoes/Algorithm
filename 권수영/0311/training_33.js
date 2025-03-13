/* 수열과 구간 쿼리 2 */

function solution(arr, queries) {
  const answer = [];
  for(query of queries) {
      const [s, e, k] = query;  // 쿼리에서 s, e, k 값 추출
      const line = arr.slice(s, e+1).filter((v) => v>k);  // arr의 s부터 e까지의 부분 배열을 생성 후 k보다 큰 값만 남김
      answer.push(line.length > 0 ? Math.min(...line) : -1);  // 조건 만족: 최솟값 추가, 없으면 -1 추가
  }
  return answer;
}