function solution(n, results) {
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for ([winner, loser] of results) {
    board[winner - 1][loser - 1] = 1;
    board[loser - 1][winner - 1] = -1;
  }

  for (let k = 0; k < n; k++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col] === 0) {
          if (board[row][k] === 1 && board[k][col] === 1) {
            board[row][col] = 1;
            board[col][row] = -1;
          } else if (board[row][k] === -1 && board[k][col] === -1) {
            board[row][col] = -1;
            board[col][row] = 1;
          }
        }
      }
    }
  }

  return board.reduce((count, row) => {
    if (row.filter((result) => result === 0).length === 1) {
      count += 1;
    }

    return count;
  }, 0);
}
