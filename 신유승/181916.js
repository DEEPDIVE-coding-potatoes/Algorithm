/**
 * 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 
 * 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
 * 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
 * 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
 * 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
 * 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
 * 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
 * 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * a, b, c, d는 1 이상 6 이하의 정수입니다.
 */

function solution(a, b, c, d) {
  if (a === b && b === c && c === d) return 1111 * a;
  else if (new Set([a, b, c, d]).size === 4) return Math.min(a, b, c, d);
  else if (a === b && b !== c && b !== d && c !== d) return c * d;
  else if (a === c && c !== b && c !== d && b !== d) return b * d;
  else if (a === d && d !== b && d !== c && b !== c) return b * c;
  else if (b === c && c !== a && c !== d && a !== d) return a * d;
  else if (b === d && d !== a && d !== c && a !== c) return a * c;
  else if (c === d && d !== a && d !== b && a !== b) return a * b;
  else if (a === b && c === d && b !== c) return (a + c) * (Math.max(a, c) - Math.min(a, c));
  else if (a === c && b === d && c !== b) return (a + b) * (Math.max(a, b) - Math.min(a, b));
  else if (a === d && b === c && a !== b) return (a + b) * (Math.max(a, b) - Math.min(a, b));
  else if (a === b && b === c && c !== d) return Math.pow(10 * c + d, 2);
  else if (a === b && b === d && c !== d) return Math.pow(10 * d + c, 2);
  else if (a === c && c === d && a !== b) return Math.pow(10 * a + b, 2);
  else if (b === c && c === d && a !== b) return Math.pow(10 * b + a, 2);
}

// 좋아요 많은 풀이
// function solution(a, b, c, d) {
//   if (a === b && a === c && a === d) return 1111 * a

//   if (a === b && a === c) return (10 * a + d) ** 2
//   if (a === b && a === d) return (10 * a + c) ** 2
//   if (a === c && a === d) return (10 * a + b) ** 2
//   if (b === c && b === d) return (10 * b + a) ** 2

//   if (a === b && c === d) return (a + c) * Math.abs(a - c)
//   if (a === c && b === d) return (a + b) * Math.abs(a - b)
//   if (a === d && b === c) return (a + b) * Math.abs(a - b)

//   if (a === b) return c * d
//   if (a === c) return b * d
//   if (a === d) return b * c
//   if (b === c) return a * d
//   if (b === d) return a * c
//   if (c === d) return a * b

//   return Math.min(a, b, c, d)
// }