// 문제 설명
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 알파벳 소문자로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 100



function solution(my_string) {
  const arr = [];
  
  for (let i = 0; i < my_string.length; i++) {
      arr.push(my_string.slice(i));  
  }
  arr.sort();

  return arr; 
}


// [사용한 메서드]
// 1. slice(i) : i번째 인덱스 ~ 문자열 끝까지 잘라서 반환
// 2. sort() : 배열 요소를 사전순으로 정렬

// 문제에서 접미사가 뭔지 이해하는데 시간이 걸렸음...
// ("접미사는 특정 인덱스부터 시작하는 문자열을 의미") 말이 헷갈리잔어,,;;