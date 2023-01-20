const makeBoard = (row, column) => {
  const board = Array.from(Array(row), () => Array(column).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      board[i][j] = i * column + j + 1;
    }
  }
  return board;
};

const getPosition = (startX, startY, endX, endY) => {
  let res = [];

  // 시작점 제외한 윗줄
  for (let i = startY + 1; i <= endY; i++) {
    res = [...res, [startX, i]];
  }

  // 맨위 제외한 오른쪽줄
  for (let i = startX + 1; i <= endX; i++) {
    res = [...res, [i, endY]];
  }

  // 맨오른쪽 제외한 아래줄
  for (let i = endY - 1; i >= startY; i--) {
    res = [...res, [endX, i]];
  }

  // 맨아래 제외한 왼쪽줄
  for (let i = endX - 1; i >= startX + 1; i--) {
    res = [...res, [i, startY]];
  }

  return res;
};

function solution(rows, columns, queries) {
  const answer = [];
  const board = makeBoard(rows, columns);
  queries.forEach((query) => {
    const [startX, startY, endX, endY] = [
      query[0] - 1,
      query[1] - 1,
      query[2] - 1,
      query[3] - 1,
    ];
    const positions = getPosition(startX, startY, endX, endY);

    let originValues = [board[startX][startY]]; // 시작점 값
    positions.forEach((position) => {
      // 시작점 제외한 나머지 값
      originValues = [...originValues, board[position[0]][position[1]]];
    });

    answer.push(Math.min(...originValues)); // 최소값

    positions.forEach((position, i) => {
      // 시작점 다음부터 값 차례대로 넣기
      board[position[0]][position[1]] = originValues[i];
    });
    board[startX][startY] = originValues.at(-1); // 시작점에 가장 마지막 값 넣기
  });
  return answer;
}
