const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const SnE = arr.map((input) => input.split(' ').map(Number));

function solution(n, arr) {
  let lastDay = 1;
  let area = 0;
  let calendar = Array.from({ length: 366 }, () => 0);

  for (let [x, y] of arr) {
    lastDay = Math.max(lastDay, y);
    // console.log('x,y', x, y);
    for (let i = x; i <= y; i++) {
      calendar[i] += 1;
    }
  }

  let row = 0;
  let col = 0;
  for (let i = 1; i <= lastDay + 1; i++) {
    if (calendar[i] > 0) {
      row += 1;
      col = Math.max(col, calendar[i]);
    } else {
      area += row * col;

      row = 0;
      col = 0;
    }
  }
  return area;
}

console.log(solution(Number(N), SnE));
