// 문제 설명
// 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.

// 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 0 ≤ s < 100
// 1 ≤ l ≤ 8
// 10l - 1 ≤ k < 10l
// 1 ≤ intStrs의 길이 ≤ 10,000
// s + l ≤ intStrs의 원소의 길이 ≤ 120



// [내가 푼 코드]
function solution(intStrs, k, s, l) {
  const answer = [];
  
  // 1. intStrs 배열 순회
  intStrs.forEach(str => {  
       // 2. 각 문자열에서 s번째 인덱스부터 길이 l만큼 잘라낸 부분 문자열을 정수로 변환
      const num = Number(str.slice(s, s + l)); 
      // 3. num이 k보다 크면 배열에 추가
      if (num > k) {
          answer.push(num);
      }
  });
  
  return answer;
}


// 다른 사람 코드 (filter 생각을 왜 못했을까..)
function solution(intStrs, k, s, l) {
    return intStrs
        .map((v) => +v.slice(s, s + l))   // 1. 각 문자열에서 s부터 l길이 부분을 잘라 숫자로 변환
        .filter((v) => v > k);            // 2. 숫자가 k보다 큰 값만 필터링
}
