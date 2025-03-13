// 문제 설명
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 100
// -10 ≤ num_list의 원소 ≤ 100



function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
      if (num_list[i] < 0) {
          return i;
      }
  }
  return -1;
}



// [다른 풀이]
// function solution(num_list) {
//     return num_list.findIndex(num => num < 0);  
// }

// findIndex() 함수... 알아보쟈..
// findIndex() : 배열에서 주어진 조건을 만족하는 첫 번째 요소의 인덱스를 반환

// 함수 사용 예시
// let numbers = [1, 2, 3, -4, 5];
// let index = numbers.findIndex(num => num < 0);
// -> 배열을 순차적으로 검사하면서 음수인 -4를 찾고, 해당 인덱스 3 반환