// 문제 설명
// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_strings의 길이 = parts의 길이 ≤ 100
// 1 ≤ my_strings의 원소의 길이 ≤ 100
// parts[i]를 [s, e]라 할 때, 다음을 만족합니다.
// 0 ≤ s ≤ e < my_strings[i]의 길이




const solution = (my_strings, parts) =>
  my_strings
      .map((i, idx) =>
            // 1. 각 문자열(i)에서 지정된 부분만 추출
            // - parts[idx][0]: 시작 인덱스 (s)
            // - parts[idx][1]: 끝 인덱스 (e)
            // - slice(s, e + 1): e+1을 해야 e까지 포함됨
           i.slice(parts[idx][0], parts[idx][1] + 1)
          )
      .join(''); // 2. 문자열 합치기




// [사용한 매서드]
// 1. map() : 배열의 각 요소를 변경하여 새로운 배열을 만듦
// ex) arr.map(x => x * 2)

// 2. slice(start, end) : 문자열에서 특정 범위(start~end-1)를 잘라 반환
// ex) "deepdive".slice(1, 4) // "eep"

// 3. join('') : 배열 요소를 하나의 문자열로 합침
// ex) ["a", "b", "c"].join('') // "abc"
