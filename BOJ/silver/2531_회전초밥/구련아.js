const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let [infos, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, d, k, c] = infos.split(" ").map(Number);
inputs = inputs.map(Number);

let answer = 0;
const map = new Map(); // {type, count}
for (let i = 0; i < k; i++) {
  const food = inputs[i];
  map.set(food, map.has(food) ? map.get(food) + 1 : 1);
  inputs.push(food);
}
answer = map.has(c) ? map.size : map.size + 1;

for (let i = k; i < N + k; i++) {
  const removefood = inputs[i - k];
  if (map.get(removefood) === 1) map.delete(removefood);
  else map.set(removefood, map.get(removefood) - 1);

  const newFood = inputs[i];
  map.set(newFood, map.has(newFood) ? map.get(newFood) + 1 : 1);

  answer = Math.max(answer, map.has(c) ? map.size : map.size + 1);
}

console.log(answer);
