// 문제
// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.


function solution(numbers, n) {
  var answer = numbers.reduce((a, b) => a <= n ? a + b : a)
  return answer;
}
// reduce는 중간에 순회 할 수 없으니 좋지 않을 수 있다는 의견을 봤음


//다른 사람풀이 중에서 break가 있는 답
function solution(numbers, n) {
  var answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (answer <= n) {
      answer += numbers[i]
    }
    if (answer > n) {
      break;
    }
  }

  return answer;
}

