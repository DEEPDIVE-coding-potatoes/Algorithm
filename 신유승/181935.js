function solution(n) {
  let answer = 0;
  if (n % 2 === 0) {
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0)
        answer += (i * i);
    }
  }
  else {
    for (let i = 0; i <= n; i++) {
      if (i % 2 !== 0)
        answer += i;
    }
  }

  return answer;

  // 좋아요가 많은 풀이
  // if (n % 2 === 1)
  //   return (n + 1) / 2 * ((n + 1) / 2);
  // else
  //   return n * (n + 1) * (n + 2) / 6;
}