// 2021 KAKAO BLIND RECRUITMENT

function solution(n, s, a, b, fares) {
  // Floyd–Warshall
  const board = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  for (let i = 1; i <= n; i++) board[i][i] = 0;

  fares.forEach((fare) => {
    const [x, y, fee] = fare;

    board[x][y] = fee;
    board[y][x] = fee;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (board[i][k] === Infinity || board[k][j] === Infinity || i === j)
          continue;

        board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
      }
    }
  }

  let min = board[s][a] + board[s][b];

  for (let i = 1; i <= n; i++)
    min = Math.min(min, board[s][i] + board[i][a] + board[i][b]);

  return min;
}
