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
}