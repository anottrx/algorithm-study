const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [N, M] = input.shift();
const edge = input;

const solution = ({ N, M, edge }) => {
  const connected = Array.from({ length: N + 1 }, () => []);
  const [queue, visited] = [[], new Set()];
  let count = 0;

  edge.forEach((e) => {
    connected[e[0]].push(e[1]);
    connected[e[1]].push(e[0]);
  });

  for (let i = 1; i <= N; i++) {
    if (!visited.has(i)) {
      queue.push(i);

      while (queue.length) {
        const cur = queue.shift();

        for (const next of connected[cur]) {
          if (!visited.has(next)) {
            queue.push(next);
            visited.add(next);
          }
        }
      }

      count += 1;
    }
  }

  console.log(count);
};

solution({ N, M, edge });
