function solution(n, edge) {
  const nodes = new Map(); // key:시작점, values:[연결된 노드들]
  edge.forEach(([start, end]) => {
    // 양방향
    nodes.set(start, nodes.has(start) ? [...nodes.get(start), end] : [end]);
    nodes.set(end, nodes.has(end) ? [...nodes.get(end), start] : [start]);
  });

  const visited = Array.from({ length: n + 1 }, () => false); // 방문 체크
  const dists = Array.from({ length: n + 1 }, () => 0); // 거리 길이

  const queue = [1]; // 1부터 시작
  visited[1] = true;
  while (queue.length > 0) {
    // bfs
    const start = queue.shift();
    const ends = nodes.get(start);
    ends.forEach((end) => {
      if (!visited[end]) {
        visited[end] = true;
        dists[end] = dists[start] + 1;
        queue.push(end);
      }
    });
  }

  return dists.reduce(
    (prev, cur) => prev + (cur === Math.max(...dists) ? 1 : 0),
    0
  );
}
