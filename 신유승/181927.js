/** 
 * 정수 리스트 num_list가 주어졌을 때
 * 마지막 원소가 그 전 원소보다 크면
 * 마지막 원소에서 그 전 원소를 뺀 값을
 * 마지막 원소가 그 전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가해 반환하라
*/

function solution(num_list) {
  let last = num_list[num_list.length - 1];
  let secondLast = num_list[num_list.length - 2];

  last > secondLast ? num_list.push(last - secondLast) : num_list.push(last * 2);
  return num_list;
}

//좋아요가 많은 코드
// function solution(num_list) {
//   const [a, b] = [...num_list].reverse();
//   return [...num_list, a > b ? (a-b):a*2];
// }