const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [N, ...paper] = fs.readFileSync(filePath).toString().trim().split('\n');

N = Number(N);
paper = paper.map((input) => input.split(' ').map(Number));

function solution(N, paper) {
  let white = 0;
  let blue = 0;

  function recursion(x, y, N) {
    let cnt = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        cnt += paper[y + j][x + i];
      }
    }
    if (cnt === 0) white += 1;
    else if (cnt === N * N) blue += 1;
    else {
      N /= 2;
      recursion(x, y, N);
      recursion(x + N, y, N);
      recursion(x, y + N, N);
      recursion(x + N, y + N, N);
    }
  }

  recursion(0, 0, N);
  return `${white}\n${blue}`;
}

console.log(solution(N, paper));
