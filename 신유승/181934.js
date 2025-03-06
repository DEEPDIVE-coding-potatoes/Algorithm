/*
  181934
  ineq와 eq에 따라 n과 m을 비교하여 결과를 반환하는 함수를 작성하라
*/

function solution(ineq, eq, n, m) {
  if (ineq === '>') {
    if (eq === '=') {
      return n >= m ? 1 : 0;
    }
    else {
      return n > m ? 1 : 0;
    }
  } else {
    if (eq === '=') {
      return n <= m ? 1 : 0;
    } else {
      return n < m ? 1 : 0;
    }
  }

  //좋아요가 많은 풀이
  // const operations = {
  //   '>=': (n, m) => n >= m,
  //   '<=': (n, m) => n <= m,
  //   '>!': (n, m) => n > m,
  //   '<!': (n, m) => n < m,
  // };

  // function solution(ineq, eq, n, m) {
  //   const op = operations[ineq + eq];
  //   return Number(op(n, m));
  // }
}