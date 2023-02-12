function solution(n, s, a, b, fares) {
  const board = Array.from({ length: n + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => {
      if (i === j) return 0;

      return Infinity;
    })
  );

  fares.forEach(([nodeA, nodeB, fare]) => {
    board[nodeA][nodeB] = fare;
    board[nodeB][nodeA] = fare;
  });

  for (let k = 1; k <= n; k++) {
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n; col++) {
        if (board[row][col] > board[row][k] + board[k][col]) {
          board[row][col] = board[row][k] + board[k][col];
        }
      }
    }
  }

  return Array.from({ length: n }).reduce((minFare, _, i) => {
    return Math.min(
      minFare,
      board[s][i + 1] + board[i + 1][a] + board[i + 1][b]
    );
  }, board[s][a] + board[s][b]);
}
