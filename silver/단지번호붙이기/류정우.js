const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const matrix = input.slice(1).map((row) => row.split(''));

function solution(N, matrix) {
  const complexes = [];
  const [dx, dy] = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];

  const bfs = (row, col, complexCount) => {
    matrix[row][col] = '0';
    for (let i = 0; i < 4; i++) {
      const [ex, ey] = [dx[i] + row, dy[i] + col];
      if (0 <= ex < N && 0 <= ey < N && matrix[ex]?.[ey] === '1') {
        matrix[ex][ey] = '0';
        complexCount += bfs(ex, ey, 1);
      }
    }

    return complexCount;
  };

  matrix.forEach((row, i) => {
    row.forEach((_, j) => {
      if (matrix[i][j] === '1') complexes.push(bfs(i, j, 1));
    });
  });

  console.log(complexes.length);
  complexes.sort((a, b) => a - b).forEach((complex) => console.log(complex));
}

solution(N, matrix);
