// 문제 설명
// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 50
// -9 ≤ num_list의 원소 ≤ 9
// 입출력 예
// num_list	           result
// [4, 2, 6, 1, 7, 6]	 17
// [-1, 2, 5, 6, 3]	   8


function solution(num_list) {
  let oddSum = 0, evenSum = 0;

  num_list.forEach((num, idx) => {
      if (idx % 2 === 0) oddSum += num;  
      else evenSum += num;  
  });

  return Math.max(oddSum, evenSum);
}



// [다른 풀이]
// 삼항연산자 사용해서 코드 길이 줄이기!!!
function solution(num_list) {
  let odd = 0;
  let even = 0;
  num_list.forEach((x,i) => i%2 == 0 ? even += x : odd += x);
  return Math.max(odd, even);
}
