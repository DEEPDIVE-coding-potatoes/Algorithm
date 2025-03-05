function solution(str1, str2) {
  let answer = '';
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }
  return answer;
  // return [...str1].map((c, i) => c + str2[i]).join(''); << 좋아요 많은 코드
}