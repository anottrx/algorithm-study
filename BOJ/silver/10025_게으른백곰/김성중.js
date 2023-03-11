const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [N, K] = input.shift();

const solution = ({ N, K, input }) => {
  const size = 2 * K + 1;
  const arr = [];

  input.forEach((e) => {
    const [x, g] = e;

    arr[g] = x;
  });

  const newArr = Array.from(arr, (x) => x || 0);

  let sum = newArr.slice(0, size).reduce((acc, cur) => acc + cur, 0);
  let max = sum;

  for (let i = 0; i < newArr.length - size; i++) {
    const [left, right] = [newArr[i], newArr[i + size]];

    sum = sum - left + right;
    max = Math.max(max, sum);
  }

  return max;
};

console.log(solution({ N, K, input }));
