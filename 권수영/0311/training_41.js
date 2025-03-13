/* 글자 이어 붙여 문자열 만들기 */

function solution(my_string, index_list) {
  return index_list.map(a => my_string[a]).join("")
}