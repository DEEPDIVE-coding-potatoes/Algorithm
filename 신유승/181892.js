/**
 * 정수 리스트 num_list와 정수 n이 주어질 때, 
 * n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 2 ≤ num_list의 길이 ≤ 30
 * 1 ≤ num_list의 원소 ≤ 9
 * 1 ≤ n ≤ num_list의 길이
 */

const solution = (num_list, n) => num_list.filter((_, i) => i >= n-1);

// 좋아요 많은 풀이
// function solution(num_list, n) {
//   return num_list.slice(n - 1);
// }