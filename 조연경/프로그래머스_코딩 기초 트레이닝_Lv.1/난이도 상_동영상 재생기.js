// 문제 설명
// 당신은 동영상 재생기를 만들고 있습니다. 당신의 동영상 재생기는 10초 전으로 이동, 10초 후로 이동, 오프닝 건너뛰기 3가지 기능을 지원합니다. 각 기능이 수행하는 작업은 다음과 같습니다.

// 10초 전으로 이동: 사용자가 "prev" 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 전으로 이동합니다. 현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동합니다. 영상의 처음 위치는 0분 0초입니다.
// 10초 후로 이동: 사용자가 "next" 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 후로 이동합니다. 동영상의 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동합니다. 영상의 마지막 위치는 동영상의 길이와 같습니다.
// 오프닝 건너뛰기: 현재 재생 위치가 오프닝 구간(op_start ≤ 현재 재생 위치 ≤ op_end)인 경우 자동으로 오프닝이 끝나는 위치로 이동합니다.
// 동영상의 길이를 나타내는 문자열 video_len, 기능이 수행되기 직전의 재생위치를 나타내는 문자열 pos, 오프닝 시작 시각을 나타내는 문자열 op_start, 오프닝이 끝나는 시각을 나타내는 문자열 op_end, 사용자의 입력을 나타내는 1차원 문자열 배열 commands가 매개변수로 주어집니다. 이때 사용자의 입력이 모두 끝난 후 동영상의 위치를 "mm:ss" 형식으로 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// video_len의 길이 = pos의 길이 = op_start의 길이 = op_end의 길이 = 5
// video_len, pos, op_start, op_end는 "mm:ss" 형식으로 mm분 ss초를 나타냅니다.
// 0 ≤ mm ≤ 59
// 0 ≤ ss ≤ 59
// 분, 초가 한 자리일 경우 0을 붙여 두 자리로 나타냅니다.
// 비디오의 현재 위치 혹은 오프닝이 끝나는 시각이 동영상의 범위 밖인 경우는 주어지지 않습니다.
// 오프닝이 시작하는 시각은 항상 오프닝이 끝나는 시각보다 전입니다.
// 1 ≤ commands의 길이 ≤ 100
// commands의 원소는 "prev" 혹은 "next"입니다.
// "prev"는 10초 전으로 이동하는 명령입니다.
// "next"는 10초 후로 이동하는 명령입니다.





//[내 풀이]
// 1. prev -> 10초 전으로 이동 / 현재위치 10초미만 -> 동영상의 처음으로 이동
// 2. next -> 10초 뒤로 이동 / 남은 시간이 10초 미만 -> 동영상의 마지막으로 이동
// 3. 현재 재생위치가 (op_start ≤ 현재 재생 위치 ≤ op_end) -> 자동으로 오프닝 끝나는 위치로 이동
function solution(video_len, pos, op_start, op_end, commands) {

  // timeToSeconds함수 : mm:ss -> seconds 로 변환
  function timeToSeconds(time) {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  }
  ㄴ
  // secondsToTime 함수 : seconds -> "mm:ss" 로 변환
  function secondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // 입력 시간들을 초 단위로 변환
  let videoLenToSeconds = timeToSeconds(video_len);
  let posToSeconds = timeToSeconds(pos);
  let opStartToSeconds = timeToSeconds(op_start);
  let opEndToSeconds = timeToSeconds(op_end);

  // 현재 위치가 오프닝 구간에 있다면 -> 오프닝 끝으로 이동
  if (posToSeconds >= opStartToSeconds && posToSeconds <= opEndToSeconds) {
    posToSeconds = opEndToSeconds;
  }

  // 사용자 명령 처리
  commands.forEach(command => {
    if (command === 'prev') {
      posToSeconds = Math.max(posToSeconds - 10, 0);
    } else if (command === 'next') {
      posToSeconds = Math.min(posToSeconds + 10, videoLenToSeconds);
    }

    // 오프닝 구간 건뛰
    if (posToSeconds >= opStartToSeconds && posToSeconds <= opEndToSeconds) {
      posToSeconds = opEndToSeconds;
    }
  });

  // 결과 반환 (mm:ss)
  return secondsToTime(posToSeconds);
}