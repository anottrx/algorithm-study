const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

let [start, end] = inputs.split(" ").map(Number);
let count = 1;

while (end > start) {
  if (end % 2 === 0) {
    end = end / 2;
  } else {
    if (String(end).endsWith("1")) {
      end = Number(String(end).slice(0, String(end).length - 1));
    } else {
      break;
    }
  }
  count++;
}

console.log(end === start ? count : -1);
