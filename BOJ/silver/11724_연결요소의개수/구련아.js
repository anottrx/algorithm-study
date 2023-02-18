const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const INF = Number.MAX_SAFE_INTEGER;
const [N, M] = inputs[0].split(" ").map(Number);
const nodes = Array.from({ length: N + 1 }, (_, i) =>
  [...new Array(N + 1)].map((_, j) => (i === j ? 0 : INF))
);

for (let i = 1; i <= M; i++) {
  const [from, to] = inputs[i].split(" ").map(Number);
  nodes[from][to] = nodes[to][from] = 1;
}

let answer = 0;
const visited = Array.from({ length: N + 1 }, () => false);

const dfs = (from) => {
  for (let i = 1; i <= N; i++) {
    if (nodes[from][i] === 1 && !visited[i]) {
      visited[i] = true;
      dfs(i);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}

console.log(answer);
