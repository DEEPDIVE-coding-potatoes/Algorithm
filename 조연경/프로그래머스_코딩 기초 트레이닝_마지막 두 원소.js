// 문제 설명
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9


function solution(num_list) {
  // 1. 마지막 원소와 그전 원소 가져오기
  let lastNum = num_list[num_list.length - 1];
  let beforeNum = num_list[num_list.length - 2];

  // 2. 조건에 따라 solutionNum 값 계산
  let solutionNum;
  if (lastNum > beforeNum) {
      solutionNum = lastNum - beforeNum;
  } else {
      solutionNum = lastNum * 2;
  }

  // 3. solutionNum 값을 배열에 추가 후 리턴
  num_list.push(solutionNum);
  return num_list;
}