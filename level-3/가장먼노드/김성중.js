function solution(n, edge) {
  const connects = Array.from({ length: n }, () => []);
  const [visited, queue] = [[1], [0]];

  edge.forEach((node) => {
    connects[node[0] - 1].push(node[1] - 1);
    connects[node[1] - 1].push(node[0] - 1);
  });

  while (queue.length) {
    const cur = queue.shift();

    for (const next of connects[cur]) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  return visited.filter((count) => count === Math.max(...visited)).length;
}
