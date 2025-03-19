// 문제 설명
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// 1 ≤ is_suffix의 길이 ≤ 100
// my_string과 is_suffix는 영소문자로만 이루어져 있습니다.



// [ 코드 찾아봄 ]
function solution(my_string, is_suffix) {
  // my_string의 끝부분에서 is_suffix와 같은지 비교
  const startIdx = my_string.length - is_suffix.length;
  const subStr = my_string.substring(startIdx);
  
  // subStr이 is_suffix와 같으면 1, 그렇지 않으면 0을 반환
  return subStr === is_suffix ? 1 : 0;
}


// [ 사용된 메서드 ] 
// 1. substring() : 주어진 시작 인덱스에서 끝까지 또는 끝 인덱스까지 부분 문자열을 추출함.
// ex) "banana".substring(3) // "ana"`