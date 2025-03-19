// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ num_list의 길이


function solution(num_list, n) {
  return num_list
      .slice(n)
      .concat(num_list.slice(0, n));
}



// [다른 풀이]
function solution(num_list, n) {
  let front = num_list.splice(0, n); // 첫 번째 n개 요소를 추출
  return [...num_list, ...front];    // 남은 요소 + 추출한 요소 붙이기
}

// splice() : - 배열을 직접 수정하며, 배열의 요소를 삭제하거나 추가할 수 있는 메소드
//            - 문법 : array.splice(startIndex, deleteCount, item1, item2, ...)