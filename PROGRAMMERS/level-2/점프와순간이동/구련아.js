// 3번째 예시에서 힌트를 얻어서 풀 수 있었다
function solution(n) {
  let answer = 0;

  while (n >= 1) {
    if (n % 2 === 1) {
      // n이 2로 나뉘지 않는다면 점프
      answer += 1;
      n -= 1;
    } else {
      // n이 2로 나뉜다면 순간이동
      n /= 2;
    }
  }

  return answer;
}
