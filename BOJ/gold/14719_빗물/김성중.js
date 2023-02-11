const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const heights = input[1].split(" ").map(Number);

const solution = (heights) => {
  let res = 0;

  for (let i = 1; i < heights.length - 1; i++) {
    const leftMax = Math.max(...heights.slice(0, i));
    const rightMax = Math.max(...heights.slice(i + 1));
    const temp = Math.min(leftMax, rightMax) - heights[i];

    res += temp < 0 ? 0 : temp;
  }

  console.log(res);
};

solution(heights);
