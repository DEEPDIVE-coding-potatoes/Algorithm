// 문제 설명
// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

// (x1 ∨ x2) ∧ (x3 ∨ x4)
// 입출력 예
// x1	x2	x3	x4	result
// false	true	true	true	true
// true	false	false	false	false





// [내 문제 풀이]
// ∨는 OR, ∧는 AND 의미, 아래는 문제 풀이 절차임
// 1. (x1 ∨ x2)를 계산.
// 2. (x3 ∨ x4)를 계산.
// 3. 1 과 2의 결과를 ∧ 연산으로 결합해 최종 결과 반환.
function solution(x1, x2, x3, x4) {
  const or1 = x1 || x2;  // 1. (x1 ∨ x2) 계산
  const or2 = x3 || x4;  // 2. (x3 ∨ x4) 계산
  const result = or1 && or2;  // 3. (x1 ∨ x2) ∧ (x3 ∨ x4) 계산
  
  return result;
}


// 다른 사람 풀이 (내 코드를 이렇게 줄일 수 있음 ㅈㄹ 간단하네;;)
function solution(x1, x2, x3, x4) {
  return (x1||x2) && (x3||x4)
}