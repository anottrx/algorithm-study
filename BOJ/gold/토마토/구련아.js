const fs = require("fs");
// const [arr1, ...arr2] = fs.readFileSync("text").toString().trim().split("\n");
const [arr1, ...arr2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [m, n] = arr1.split(" ");
const map = arr2.map((el) => el.split(" "));

const q = [];
map.forEach((el, i) => {
  el.forEach((val, j) => {
    if (val === "1") {
      q.push([i, j]);
    }
  });
});

const d = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let answer = 0;

let idx = 0;
let isChange = true;
while (isChange) {
  isChange = false;
  const len = q.length;
  answer++;
  for (let i = idx; i < len; i++) {
    const [curX, curY] = q[idx];
    idx++;
    for (let dd = 0; dd < 4; dd++) {
      const dx = curX + d[dd][0];
      const dy = curY + d[dd][1];
      if (dx >= 0 && dx < n && dy >= 0 && dy < m && map[dx][dy] === "0") {
        q.push([dx, dy]);
        map[dx][dy] = answer;
        isChange = true;
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === "0") answer = -1;
  }
}
console.log(answer === -1 ? answer : answer - 1);
