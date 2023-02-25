const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = inputs[0].split(" ").map(Number);
const TOTAL_LEN = 4_000_001; // 좌표 최대 길이
const zoo = Array.from({ length: TOTAL_LEN }, () => 0);
for (let i = 1; i <= N; i++) {
  const [size, pos] = inputs[i].split(" ").map(Number);
  zoo[pos] = size;
}

let answer = 0;
for (let i = 0; i < K * 2 + 1; i++) {
  answer += zoo[i];
}
let cur = answer;
for (let i = K * 2 + 1; i < TOTAL_LEN; i++) {
  cur = cur - zoo[i - K * 2 - 1] + zoo[i];
  answer = Math.max(answer, cur);
}

console.log(answer);
