function solution(number, n, m) {
  return (number % n === 0) && (number % m) === 0 ? 1 : 0;
  // return +!(number % n || number % m); << 인기 많은 코드
}