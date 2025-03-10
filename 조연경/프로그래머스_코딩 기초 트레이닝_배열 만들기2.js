// 문제 설명
// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

// 제한사항
// 1 ≤ l ≤ r ≤ 1,000,000




function solution(l, r) {
  let result = [];  // 결과를 저장할 배열
  
  // 0과 5로만 이루어진 숫자를 생성하는 함수
  function generateNumbers(current) {
      if (current > r) return;  // current가 r보다 크면 더 이상 생성할 필요 없음
      if (current >= l) result.push(current);  // current가 l 이상이면 결과 배열에 추가
      
      // 숫자를 확장하여 다음 숫자를 만듦
      generateNumbers(current * 10 + 0);  // 0을 덧붙인 숫자
      generateNumbers(current * 10 + 5);  // 5를 덧붙인 숫자
  }

  // 5로만 이루어진 숫자 생성 시작
  generateNumbers(5);

  // 결과가 없다면 [-1] 반환
  if (result.length === 0) {
      return [-1];
  }
  
  // 결과를 오름차순으로 정렬하여 반환
  result.sort((a, b) => a - b);
  return result;
}