// 문제 설명
// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// a, b, c, d는 1 이상 6 이하의 정수입니다.




// [내 문제 풀이]
// entries 매서드에서 대해서 찾아봄
// entries 매서드 : Map 객체나 Object의 키-값 쌍을 배열 형태로 반환하는 메서드
//                이 메서드를 사용하면 객체나 Map의 각 항목을 [key, value] 형식의 배열로 얻을 수 있음.


const solution = (a, b, c, d) => {
  // 주사위 값을 배열로 저장하고 등장 횟수 계산
  const dice = [a, b, c, d];
  const counts = dice.reduce((acc, num) => {
      acc.set(num, (acc.get(num) || 0) + 1);
      return acc;
  }, new Map());

  // 등장 횟수 배열을 정렬하여 패턴을 판별
  const [p, q] = [...counts.entries()].sort((a, b) => b[1] - a[1]);

  if (counts.size === 1) return 1111 * p[0]; // 네 개가 모두 같은 경우
  if (p[1] === 3) return (10 * p[0] + q[0]) ** 2; // 세 개 같음
  if (counts.size === 2) return (p[0] + q[0]) * Math.abs(p[0] - q[0]); // 두 개씩 같은 경우
  if (p[1] === 2) return q[0] * [...counts.keys()].filter(k => k !== p[0])[1]; // 두 개 같은 경우
  return Math.min(...dice); // 모두 다른 경우
};




// 다른 사람 풀이 -> 노가다지만 훨씬 직관적이고 성능면에서 좋은것 같음
function solution(a, b, c, d) {
    if (a === b && a === c && a === d) return 1111 * a

    if (a === b && a === c) return (10 * a + d) ** 2
    if (a === b && a === d) return (10 * a + c) ** 2
    if (a === c && a === d) return (10 * a + b) ** 2
    if (b === c && b === d) return (10 * b + a) ** 2

    if (a === b && c === d) return (a + c) * Math.abs(a - c)
    if (a === c && b === d) return (a + b) * Math.abs(a - b)
    if (a === d && b === c) return (a + b) * Math.abs(a - b)

    if (a === b) return c * d
    if (a === c) return b * d
    if (a === d) return b * c
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b

    return Math.min(a, b, c, d)
}