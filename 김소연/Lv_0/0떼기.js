// 0 떼기
// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  return n_str.replace(/^0*/,'');
}

// 숫자에서 앞의 0은 읽히지 않는다....댑악...
// String(Number(str))
// String(+n_str);