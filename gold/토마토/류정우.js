const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const storage = input.slice(1).map((row) => row.split(' '));

function solution(M, N, storage) {
  let days = 0;
  let [queue1, queue2] = [[], []];
  const [dx, dy] = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];
  const visit = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
  storage.forEach((row, i) =>
    row.forEach((_, j) => {
      if (storage[i][j] === '1') queue1.push([i, j]);
    })
  );

  const bfs = (queue) => {
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [ex, ey] = [x + dx[i], y + dy[i]];
        if (0 <= ex < N && 0 <= ey < M && !visit[ex]?.[ey] && storage[ex]?.[ey] === '0') {
          storage[ex][ey] = '1';
          visit[ex][ey] = true;
          queue2.push([ex, ey]);
        }
      }
    }
  };

  const getAnswer = () => {
    const allRipen = storage.every((row) => row.every((ele) => ele !== '0'));
    if (allRipen) {
      return days;
    }

    return -1;
  };

  while (true) {
    bfs(queue1);
    if (queue2.length === 0) {
      return getAnswer();
    }
    days += 1;
    queue1 = queue2;
    queue2 = [];
  }
}

console.log(solution(M, N, storage));
