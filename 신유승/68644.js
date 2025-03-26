/**
 * 정수 배열 numbers가 주어집니다. 
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * numbers의 길이는 2 이상 100 이하입니다.
 * numbers의 모든 수는 0 이상 100 이하입니다.
 */

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++)
    for (let j = i + 1; j < numbers.length; j++)
      answer.push(numbers[i] + numbers[j]);
  const set = new Set(answer.sort((a, b) => a - b));
  return [...set];
}

// 위 풀이로 정답을 맞췄지만, set으로 중복 수를 먼저 제거하고 sort하는게 더 효율적이다.