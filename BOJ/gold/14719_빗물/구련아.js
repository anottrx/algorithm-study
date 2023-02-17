const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let [infos, inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = infos.split(" ").map(Number);
const heights = inputs.split(" ").map(Number);

let [answer, left, right, maxLeft, maxRight] = [0, 0, heights.length - 1, 0, 0];

while (left < right) {
  const [curLeft, curRight] = [heights[left], heights[right]];
  if (curLeft <= curRight) {
    if (curLeft <= maxLeft) {
      answer += maxLeft - curLeft;
    }
    maxLeft = Math.max(maxLeft, curLeft);
    left++;
  } else {
    if (curRight <= maxRight) {
      answer += maxRight - curRight;
    }
    maxRight = Math.max(maxRight, curRight);
    right--;
  }
}

console.log(answer);
