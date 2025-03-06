// 문제 설명
// 문자열 code가 주어집니다.
// code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

// mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

// mode가 0일 때
// code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
// mode가 1일 때
// code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
// 문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

// 단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.


const solution = (code) => {
  let mode = 0;  // mode는 처음에 0
  let ret = '';   // 결과 문자열

  // code 문자열을 배열로 변환한 후, 각 문자에 대해 처리
  code.split('').forEach((x, i) => {
      if (x === '1') {
          // "1"을 만나면 mode를 바꾼다.
          mode = mode === 0 ? 1 : 0;
      } else {
          if (mode === 0 && i % 2 === 0) {
              // mode가 0일 때 짝수 인덱스일 경우
              ret += x;
          } else if (mode === 1 && i % 2 === 1) {
              // mode가 1일 때 홀수 인덱스일 경우
              ret += x;
          }
      }
  });

  // 결과가 비어 있으면 "EMPTY" 반환, 아니면 ret 반환
  return ret === '' ? 'EMPTY' : ret;
};