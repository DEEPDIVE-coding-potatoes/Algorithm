function solution(my_string, overwrite_string, s) {
  let answer = my_string.substring(0, s) + overwrite_string + my_string.substring(s + overwrite_string.length);
  return answer;
}