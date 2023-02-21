const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [N, M, K, X] = input.shift();
const connects = input;
let loc = 0;

const solution = ({ N, M, K, X, connects }) => {
  const connected = Array.from({ length: N + 1 }, () => []);
  const [queue, visited] = [[X], Array(N + 1).fill(null)];

  visited[X] = 0;

  connects.forEach((connect) => {
    const [a, b] = connect;

    connected[a].push(b);
    connected[b].push(a);
  });

  while (queue.length) {
    const current = queue.shift();

    for (const next of connected[current]) {
      if (visited[next] !== null) continue;

      visited[next] = visited[current] + 1;
      queue.push(next);
    }
  }

  const filtered = visited
    .map((dist, i) => [dist, i])
    .filter(([dist, _]) => dist === K);

  return filtered.length ? filtered.map(([_, i]) => i).join("\n") : -1;
};

console.log(solution({ N, M, K, X, connects }));
