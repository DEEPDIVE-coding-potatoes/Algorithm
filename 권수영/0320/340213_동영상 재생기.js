// 찾아보면서 풂
function solution(video_len, pos, op_start, op_end, commands) {
  const transTime = (time) => {
      const [m, s] = time.split(':');
      return m * 60 + s * 1;
  }
  
  const secToTime = (second) => {
      const m = parseInt(second / 60);
      const s = second % 60;
      return String(m).padStart(2,0) + ':' + String(s).padStart(2,0);
  }
  
  const opCheck = (time) => {
      if (transTime(op_start) <= transTime(time) && transTime(time) <= transTime(op_end)) return op_end
      else return time
  }
  
  const goPrev = (time) => {
      return transTime(time) - 10 < 0 ? 0 : transTime(time) - 10;
  }
  
  const goNext = (time) => {
      return transTime(time) + 10 > transTime(video_len) ? transTime(video_len) : transTime(time) + 10;
  }
  
  let time = pos;
  for (let co of commands) {
      time = opCheck(time)
      if (co === 'prev') time = secToTime(goPrev(time))
      else time = secToTime(goNext(time))
      time = opCheck(time)
  }
  
  return time;
}