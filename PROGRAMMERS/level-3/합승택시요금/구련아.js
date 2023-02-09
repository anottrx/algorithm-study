function solution(n, s, a, b, fares) {
  const INF = Number.MAX_SAFE_INTEGER;
  const map = [
    ...Array.from({ length: n + 1 }, (_, i) => [
      ...Array.from({ length: n + 1 }, (_, j) => (i === j ? 0 : INF)),
    ]),
  ];
  fares.forEach(([x, y, fare]) => {
    map[x][y] = map[y][x] = fare;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (map[i][j] > map[i][k] + map[k][j]) {
          map[i][j] = map[i][k] + map[k][j];
        }
      }
    }
  }

  let answer = map[s][a] + map[s][b];
  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, map[s][i] + map[i][a] + map[i][b]);
  }
  return answer;
}
