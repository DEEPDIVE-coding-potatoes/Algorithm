function solution(id_list, report, k) {
  const answer = [];
  const reporter = {};
  const reported = {};

  id_list.forEach(id => reporter[id] = []);
  id_list.forEach(id => reported[id] = 0);

  report.forEach(entry => {
    const [reporter, reported] = entry.split(' ');

    if (!reporter[reporter].includes(reported)) {
      reporter[reporter].push(reported);
      reported[reported]++;
    }
  });

  id_list.forEach(id => {
    let cnt = 0;

    reporter[id].forEach(reportedId => {
      if (reported[reportedId] >= k) {
        cnt++;
      }
    });

    answer.push(cnt);
  });

  return answer;
}