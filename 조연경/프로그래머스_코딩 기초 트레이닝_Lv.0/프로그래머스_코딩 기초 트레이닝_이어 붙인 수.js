// 문제 설명
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9
// num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.


// 첫번째 풀이
function solution(num_list) {
  let oddNum = [];
  let evenNum = [];

  for (let num of num_list) {
      if (num % 2 === 0) {
          evenNum.push(num); 
      } else {
          oddNum.push(num);  
      }
  }

  let oddString = oddNum.join('');
  let evenString = evenNum.join('');

  let isOdd = Number(oddString);
  let inEven = Number(evenString);
  
  return isOdd + inEven;
}



// 두번째 풀이 : 함수 분리 -> 재사용 가능하게 만듦
function getNumberFromList(num_list, isOdd) {
    let filteredNumbers = num_list.filter(num => (num % 2 !== 0) === isOdd);
    let numberString = filteredNumbers.join('');
    return Number(numberString);
}

function solution(num_list) {
    let oddNumber = getNumberFromList(num_list, true);  // 홀수만 처리
    let evenNumber = getNumberFromList(num_list, false); // 짝수만 처리
    
    return oddNumber + evenNumber;
}