function solution(n, results) {
  const [wins, loses] = Array.from({ length: 2 }, () =>
    Array.from({ length: n }, () => new Set())
  );
  let count = 0;

  results.forEach((result) => {
    wins[result[0] - 1].add(result[1] - 1);
    loses[result[1] - 1].add(result[0] - 1);
  });

  for (let i = 0; i < n; i++) {
    wins[i].forEach((win) => {
      loses[i].forEach((lose) => {
        wins[lose].add(win);
      });
    });

    loses[i].forEach((lose) => {
      wins[i].forEach((win) => {
        loses[win].add(lose);
      });
    });
  }

  for (let i = 0; i < n; i++)
    if (wins[i].size + loses[i].size === n - 1) count += 1;

  return count;
}
