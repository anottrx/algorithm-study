const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const matrix = [];

for (let i = 1; i <= N; i++) matrix.push(input[i].split("").map(Number));

const solution = ({ N, matrix }) => {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const counts = [];
  let count = 1;

  const isSafe = (ny, nx) => ny >= 0 && nx >= 0 && ny < N && nx < N;

  const recursive = (y, x) => {
    directions.forEach((direction) => {
      const [dy, dx] = direction;
      const [ny, nx] = [y + dy, x + dx];

      if (isSafe(ny, nx) && matrix[ny][nx] === 1) {
        count += 1;
        matrix[ny][nx] = 0;
        recursive(ny, nx);
      }
    });
  };

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (matrix[y][x] === 1) {
        matrix[y][x] = 0;
        recursive(y, x);
        counts.push(count);
        count = 1;
      }
    }
  }

  console.log(String(counts.length));
  counts.sort((a, b) => a - b).forEach((count) => console.log(count));
};

solution({ N, matrix });
