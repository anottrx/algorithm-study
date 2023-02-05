const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const map = arr.map((input) => input.split("").map(Number));

const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const countMoves = (x, y, visitedCount) => {
  let count = 0;

  const q = [[x, y]];
  map[x][y] = visitedCount;
  while (q.length > 0) {
    const [curX, curY] = q.shift();
    count++;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = [curX + d[i][0], curY + d[i][1]];
      if (dx >= 0 && dx < n && dy >= 0 && dy < n && map[dx][dy] === 1) {
        q.push([dx, dy]);
        map[dx][dy] = visitedCount;
      }
    }
  }
  return count;
};

const answer = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) {
      answer.push(countMoves(i, j, answer.length + 2));
      // 단지번호는 2부터 시작
    }
  }
}

console.log(answer.length);
answer.sort((a, b) => a - b).forEach((count) => console.log(count));
