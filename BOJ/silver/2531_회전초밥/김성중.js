const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, d, k, c] = input.shift().split(" ").map(Number);
const sushi = input.map(Number);

sushi.push(...sushi);

const solution = ({ N, d, k, c, sushi }) => {
  let max = 0;

  for (let i = 0; i < N; i++) {
    const temp = new Set([...sushi.slice(i, i + k), c]);

    max = Math.max(max, temp.size);
  }

  console.log(max);
};

solution({ N, d, k, c, sushi });
