// 문제 설명
// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// -100,000 ≤ n ≤ 100,000
// 1 ≤ control의 길이 ≤ 100,000
// control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.



// 내 풀이
function solution(n, control) {
  for (let keyboard of control) {
      if (keyboard === 'w') n += 1;
      else if (keyboard === 's') n -= 1;
      else if (keyboard === 'd') n += 10;
      else if (keyboard === 'a') n -= 10;
  }
  return n;
}

//더 깔끔한 코드 (객체 활용)
function solution(n, control) {
    const move = { 'w': 1, 's': -1, 'd': 10, 'a': -10 };

    for (let keyboard of control) {     // 1. control 안의 문자열을 순회
        n += move[keyboard];            // 2. 각 글자(keyboard)에 대해 move 객체에서 대응하는 값을 가져와 n에 더함 -> 조건문 없이 바로 처리 가능!
    }
    return n;
}