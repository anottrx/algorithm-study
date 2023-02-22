const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [A, B] = input.split(" ").map(Number);

const solution = ({ A, B }) => {
  let count = 0;

  while (B !== A) {
    if (B < A) return -1;

    if (String(B).charAt(String(B).length - 1) === "1")
      B = Number(String(B).slice(0, -1));
    else if (B % 2 === 0) B /= 2;
    else return -1;

    count += 1;
  }

  return count + 1;
};

console.log(solution({ A, B }));
