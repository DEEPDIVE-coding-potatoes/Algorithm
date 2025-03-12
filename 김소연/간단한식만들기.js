//간단한 식 만들기
// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

function solution(binomial) {
  let arr = binomial.split(' ')
    , a = Number(arr[0])
    , b = Number(arr[2])
    , answer;

  if (arr[1] === '+') {
    answer = a + b;
  } else if (arr[1] === '-') {
    answer = a - b;
  } else {
    answer = a * b;
  }
  return answer;
}

// let [a, op, b] = binomial.split(" ");