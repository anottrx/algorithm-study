const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const schedules = input.map((schedule) => schedule.split(" ").map(Number));

const solution = ({ N, schedules }) => {
  const calendar = new Array(365).fill(0);

  schedules.forEach((schedule) => {
    const [S, E] = schedule;

    for (let i = S; i <= E; i++) calendar[i - 1] += 1;
  });

  return calendar
    .join("")
    .split("0")
    .filter((temp) => temp !== "")
    .reduce((area, temp) => {
      const [width, height] = [temp.length, Math.max(...temp)];

      return area + width * height;
    }, 0);
};

console.log(solution({ N, schedules }));
