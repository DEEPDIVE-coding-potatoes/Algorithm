/* 마지막 두 원소 */

function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? (a - b) : (a * 2)];
}