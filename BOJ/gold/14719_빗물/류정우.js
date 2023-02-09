const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const block = input[1].split(' ').map(Number);

function solution(H, W, block) {
  let amountOfWater = 0;

  for (let i = 1; i < W - 1; i++) {
    const leftMaxHeight = Math.max(...block.slice(0, i));
    const rightMaxHeight = Math.max(...block.slice(i + 1));
    const basisHeight = Math.min(leftMaxHeight, rightMaxHeight);

    if (block[i] < basisHeight) amountOfWater += basisHeight - block[i];
  }

  return amountOfWater;
}

console.log(solution(H, W, block));
