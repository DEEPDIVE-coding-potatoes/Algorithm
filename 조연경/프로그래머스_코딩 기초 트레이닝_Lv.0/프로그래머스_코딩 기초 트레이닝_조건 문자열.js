// 문제 설명
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.



const solution = (ineq, eq, n, m) => {
  if (ineq === "<" && eq === "=") {
      return n <= m ? 1 : 0; 
  } else if (ineq === ">" && eq === "=") {
      return n >= m ? 1 : 0;  
  } else if (ineq === "<" && eq === "!") {
      return n < m ? 1 : 0;   
  } else if (ineq === ">" && eq === "!") {
      return n > m ? 1 : 0;   
  }
};