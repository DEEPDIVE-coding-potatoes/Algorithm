// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 숫자와 알파벳으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ n ≤ my_string의 길이


function solution(my_string, n) {
  return my_string.slice(0, n);
}


// [알게된 사실]
// 문자열에서 특정 범위의 부분 문자열 추출하는 메서드는 
// slice(), substring() 둘 다 사용할 수 있어서 둘의 차이를 찾아봄

// 1. substring(startIndex, endIndex)
//      - startIndex: 시작 위치 (포함)
//      - endIndex: 끝 위치 (미포함)
//      - 음수 인덱스를 허용 X : 음수 값은 0으로 취급.
//      - startIndex > endIndex : 두 인덱스를 자동으로 교환함.
//                              즉, 순서에 관계없이 항상 작은 값이 시작 인덱스가 됨.
//      - endIndex가 생략시, 문자열의 끝까지 추출.

// 2. slice(startIndex, endIndex)
//      - startIndex: 시작 위치 (포함)
//      - endIndex: 끝 위치 (미포함)
//      - 음수 인덱스 허용 O : 음수 인덱스를 사용하여 끝에서부터 추출 가능.
//                         (ex. -1 -> 문자열의 마지막 문자를 의미)
//      - startIndex > endIndex : 빈 문자열을 반환.
//                              즉, 순서에 관계없이 잘리지 x
//      - endIndex가 생략시, 문자열의 끝까지 추출.