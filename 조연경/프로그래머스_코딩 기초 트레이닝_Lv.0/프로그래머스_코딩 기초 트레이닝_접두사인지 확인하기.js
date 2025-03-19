// 문제 설명
// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// 1 ≤ is_prefix의 길이 ≤ 100
// my_string과 is_prefix는 영소문자로만 이루어져 있습니다.



function solution(my_string, is_prefix) {
  // my_string을 is_prefix의 길이만큼 잘라서 비교
  const subStr = my_string.slice(0, is_prefix.length);
  
  // subStr is_prefix와 같으면 1, 아니면 0을 반환
  return subStr === is_prefix ? 1 : 0;
}



// [다른 사람 풀이]
// function solution(my_string, is_prefix) {
//     return my_string.startsWith(is_prefix) ? 1 : 0;
// }

// [알게된 메서드]
// 1. startsWith() : 주어진 문자열이 해당 문자열로 시작하는지 확인함.
// ex) "banana".startsWith("ban") → true 반환