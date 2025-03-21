// 문제 설명
// 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.

// intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.

// 이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 100,000
// 1 ≤ arr의 원소 < 100
// 1 ≤ a1 ≤ b1 < arr의 길이
// 1 ≤ a2 ≤ b2 < arr의 길이



function solution(arr, intervals) {
  return arr
      .slice(intervals[0][0], intervals[0][1] + 1)
         
      .concat(arr.slice(intervals[1][0], intervals[1][1] + 1));
}



//[다른 풀이]
function solution(arr, intervals) {
    return intervals.flatMap(ints => [...arr.slice(ints[0], ints[1] + 1)]);
}
// flatMap(callback) : 각 요소에 대해 callback을 적용한 후, 결과를 평탄화(1차원 배열로 변환)