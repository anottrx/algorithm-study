const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const temp = input[0].split(' ').map(Number);
const M = Number(temp[0]); //가로
const N = Number(temp[1]); //세로
const testCases = [];

for (let i = 1; i <= N; i++) {
  const temp = input[i].split(' ').map(Number);
  const testCase = temp;
  testCases.push(testCase);
}

function solution(M, N, tomatoes) {
  let day = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];
  let isTomato = 0; // 상자 안에 토마토가 모두 익은 상태
  // 1(익은 토마토)이 어디있는지 찾음 , 토마토가 익었는지 확인
  for (let i = 0; i < N; i++) {
    if (tomatoes[i].includes(0)) isTomato = 1;
    if (tomatoes[i].includes(1)) queue.push([i, tomatoes[i].indexOf(1)]);
  }
  // 이미 상자 안에 토마토가 다 익었는지 확인했다면 바로 0 리턴
  if (isTomato === 0) return 0;

  while (queue.length) {
    let queueStack = queue.length;
    let hasChanged = 0; // 토마토가 전날 대비 익었는지 확인 플래그
    for (let i = 0; i < queueStack; i++) {
      let [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        nx = x + dx[k];
        ny = y + dy[k];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && tomatoes[nx][ny] === 0) {
          tomatoes[nx][ny] = 1;
          queue.push([nx, ny]);
          hasChanged = 1;
        }
      }
    }
    if (!hasChanged) break; // 전날과 변하지 않았다면 종료
    ++day;
  }

  // 날이 지나도 익지 못한 토마토가 있는 상황
  for (let i = 0; i < N; i++) {
    if (tomatoes[i].includes(0)) return -1;
  }

  return day;
}

console.log(solution(M, N, testCases));
