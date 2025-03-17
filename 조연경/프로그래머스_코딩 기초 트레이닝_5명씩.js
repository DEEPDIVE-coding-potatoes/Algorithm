// 문제 설명
// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

// 제한사항
// 5 ≤ names의 길이 ≤ 30
// 1 ≤ names의 원소의 길이 ≤ 10
// names의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.


function solution(names) {
  return names.filter((_, idx) => idx % 5 === 0);
}



// [다른 풀이]
// 이 문제에선 filter 메소드를 쓰는 것 보다 for문을 사용하는게 불필요한 배열 연산을 줄여서 메모리 효율성이니나 연산 측면에서 더 최적화된 방법이라고 함...

function solution(names) {
    const answer = [];
    for (let i = 0; i < names.length; i += 5) {
        answer.push(names[i]);
    }
    return answer;
}
