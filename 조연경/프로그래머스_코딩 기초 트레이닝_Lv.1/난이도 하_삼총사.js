// 문제 설명
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// 제한사항
// 3 ≤ number의 길이 ≤ 13
// -1,000 ≤ number의 각 원소 ≤ 1,000
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.

// 입출력 예
// number	                    result
// [-2, 3, 0, 2, -5]	        2
// [-3, -2, -1, 0, 1, 2, 3]	  5
// [-1, 1, -1, 1]	            0



// ! 가은님 Tip - 조합 이용하기
function getCombinations(arr, r) {
  const results = [];
  if (r === 1) return arr.map(v => [v]); // 1개만 뽑을 경우 각각 배열로 반환

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1); // 현재 요소를 제외한 나머지 요소
    const combinations = getCombinations(rest, r - 1); // 나머지 요소들 중에서 r - 1 개의 조합 구하기
    const attached = combinations.map(combination => [fixed, ...combination]); // 현재 요소와 조합된 나머지 요소 합치기
    results.push(...attached);
  });

  return results;
}

function solution(number) {
  return getCombinations(number, 3) // 3개씩 조합을 구하기
    .filter(comb => comb.reduce((sum, num) => sum + num, 0) === 0) // 합이 0인 경우 필터링
    .length; // 총 개수 반환
}

