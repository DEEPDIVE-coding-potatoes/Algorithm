// 찾아보면서 풂..
function solution(today, terms, privacies) {
  const termPeriodMap = terms.reduce((acc, term) => {
      const [termName, period] = term.split(' ');
      acc[termName] = Number(period);
      return acc;
  }, {});
  
  const isExpired = (privacy) => {
      const [date, term] = privacy.split(' ');
      const termPeriod = termPeriodMap[term];
      const expirationDate = new Date(date);
      return new Date(today) >= expirationDate.setMonth(expirationDate.getMonth() + termPeriod);
  };
  
  return privacies
      .map((privacy, i) => isExpired(privacy) ? i + 1 : false)
      .filter(Boolean);
}