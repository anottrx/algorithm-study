function solution(n, edge) {
  var answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let checkbox = Array.from({ length: n + 1 }, () => 0);
  let queue = [];
  for (const [a, b] of edge) {
    graph[a][b] = 1;
  }

  queue.push(1);
  checkbox[1] = 1;
  while (queue.length) {
    let v = queue.shift();
    console.log('v', v);
    for (let i = 1; i <= n; i++) {
      if (graph[v][i] === 1 && checkbox[i] === 0) {
        console.log('push V,i', v, i);
        checkbox[i] = checkbox[v] + 1;
        queue.push(i);
      }
    }
  }
  console.log('checkbox', checkbox);
  // function DFS(v) {
  //   if (v === n) {
  //     answer += 1;
  //     console.log('path', path);
  //   } else {
  //     for (let i = 1; i <= n; i++) {
  //       if (graph[v][i] === 1 && checkbox[i] === 0) {
  //         checkbox[i] = 1;
  //         path.push(i);
  //         DFS(i);
  //         checkbox[i] = 0;
  //         path.pop();
  //       }
  //     }
  //   }
  // }
  // path.push(1);
  // checkbox[1] = 1;
  // DFS(1);

  return answer;
}

const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
console.log(solution(n, vertex));
