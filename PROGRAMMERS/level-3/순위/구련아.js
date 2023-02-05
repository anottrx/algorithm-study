function solution(n, results) {
  const INF = 101;
  const map = [...Array(n + 1)].map((_, i) =>
    [...Array(n + 1)].map((_, j) => (i !== j ? INF : 0))
  );
  const map1 = [...Array(n + 1)].map((_, i) =>
    [...Array(n + 1)].map((_, j) => (i !== j ? INF : 0))
  );
  const map2 = [...Array(n + 1)].map((_, i) =>
    [...Array(n + 1)].map((_, j) => (i !== j ? INF : 0))
  );
  results.forEach(([win, lose]) => {
    map1[win][lose] = 1;
    map2[lose][win] = 1;
  });
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (map1[i][j] > map1[i][k] + map1[k][j]) {
          map1[i][j] = map1[i][k] + map1[k][j];
        }
      }
    }
  }
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (map2[i][j] > map2[i][k] + map2[k][j]) {
          map2[i][j] = map2[i][k] + map2[k][j];
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let canCount = true;
    for (let j = 1; j <= n; j++) {
      if (map1[i][j] !== INF) map[i][j] = map1[i][j];
      if (map2[i][j] !== INF) map[i][j] = map2[i][j];
      if (map[i][j] === INF) canCount = false;
    }
    if (canCount) answer++;
  }
  return answer;
}
