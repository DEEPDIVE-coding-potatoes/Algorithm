// 문제 설명
// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

// 제한사항
// 1 ≤ number의 길이 ≤ 100,000
// number의 원소는 숫자로만 이루어져 있습니다.
// number는 정수 0이 아니라면 숫자 '0'으로 시작하지 않습니다.



// [내가 푼 코드]
const solution = number => 
  // 문자열을 배열로 변환 후, 각 숫자를 합산하고 9로 나눈 나머지를 리턴
  [...number].reduce((sum, numStr) => sum + Number(numStr), 0) % 9;


//다른 사람 풀이 (신박한 코드)
// const solution = n => BigInt(n) % 9n;

// 1. BigInt(n)	 ->  n(문자열)을 **큰 정수(BigInt)**로 변환
// 2. % 9n	->  BigInt(n)을 9로 나눈 나머지 계산 (9n은 BigInt 타입의 9)
// 3. solution(n)	>  결과적으로 n의 모든 자리 합을 9로 나눈 나머지를 반환
