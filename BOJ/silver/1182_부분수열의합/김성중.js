const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [N, S] = input[0];
const nums = input[1];

const solution = ({ N, S, nums }) => {
  let count = 0;

  const recursive = (loc, sum) => {
    if (loc === N) return;

    sum += nums[loc];

    if (sum === S) count += 1;

    recursive(loc + 1, sum - nums[loc]);
    recursive(loc + 1, sum);
  };

  recursive(0, 0);

  // 더했다가 다시 빼주는 방식이 아닌 flag를 활용하는 방식은 통과하지 못했다. 왜일까?
  /* const recursive2 = (loc, sum, flag) => {
    if (loc === N) return;

    if (flag && sum === S) count += 1;

    recursive2(loc + 1, sum + nums[loc], true);
    recursive2(loc + 1, sum, flag);
  };

  recursive2(0, 0, false); */

  return count;
};

console.log(solution({ N, S, nums }));
