// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.




// [내 풀이]
const solution = (n, m) => {
  const gcd = (a, b) => {
    return Array.from({ length: Math.min(a, b) }, (_, i) => i + 1)
      .filter(i => a % i === 0 && b % i === 0)
      .reduce((max, cur) => Math.max(max, cur), 1);
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(n, m), lcm(n, m)];
};



// [유클리드 호제법 사용 풀이]
// 유클리드 호제법으로 최대공약수 구하기
// 	•	두 수 a와 b가 주어졌을 때, 최대공약수:
// 	•	GCD(a, b) = GCD(b, a % b)
// 	•	이 과정을 나머지가 0이 될 때까지 반복.
// 최소공배수 구하는 공식
// 	•	최소공배수(LCM) :
// 	•	LCM(a, b) = (a * b) / GCD(a, b)
function solution(n, m) {
  const gcd = (a, b) => {
    while (b !== 0) {
      const r = a % b;
      a = b;
      b = r;
    }
    return a;
  };
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}



// [좋아요 높은 풀이]
function solution(a, b) {
  var r;
  for (var ab = a * b; r = a % b; a = b, b = r) { }
  return [b, ab / b];
}