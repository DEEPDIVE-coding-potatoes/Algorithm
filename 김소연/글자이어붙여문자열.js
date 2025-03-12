//글자 이어 붙여 문자열 만들기
// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, index_list) {
  return index_list.map(v => my_string.slice(v,v+1)).join('');
}

//return index_list.map(v => my_string[v]).join('');