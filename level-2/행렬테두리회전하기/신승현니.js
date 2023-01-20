function solution(rows, columns, queries) {
  var answer = [];

  const array = [...Array(rows)].map((v, r) =>
    [...Array(columns)].map((v, c) => r * columns + (c + 1))
  );

  let rotateArr = rotate(rows, columns, queries[0], array)[0];
  answer.push(rotateArr[1]);

  console.log('rotateArr', rotateArr);

  if (queries.length > 1) {
    for (let i = 1; i < queries.length; i++) {
      rotateArr = rotate(rows, columns, queries[i], rotateArr[0])[0];
      answer.push(rotateArr[1]);
    }
  }

  console.log('answer', answer);

  return answer;
}

function rotate(rows, columns, query, array) {
  let arr = Array.from(Array(rows), () => Array(columns).fill(0));

  console.log('arr', arr);

  const x1 = query[0] - 1;
  const y1 = query[1] - 1;
  const x2 = query[2] - 1;
  const y2 = query[3] - 1;

  console.log('x1,y1,x2,y2', x1, y1, x2, y2);
  // 0,0,1,1
  for (let i = y1 + 1; i < y2; i++) {
    arr[x1][i] = array[x1][i - 1];
  }
  for (let i = x1 + 1; i < x2; i++) {
    arr[i][y2] = array[i - 1][y2];
  }
  for (let i = y2 - 1; i > y1; i--) {
    arr[x2][i] = array[x2][i + 1];
  }
  for (let i = x2 - 1; i > x1; i--) {
    arr[i][y1] = array[i + 1][y1];
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (arr[i][j] === 0) arr[i][j] = array[i][j];
    }
  }
  let min = 10000;
  min = min > 0 && Math.min(...arr);

  return [arr, min];
}

// let rows = 6;
// let columns = 6;
// let queries = [
//   [2, 2, 5, 4],
//   [3, 3, 6, 6],
//   [5, 1, 6, 3],
// ];

let rows = 3;
let columns = 3;
let queries = [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
];

console.log(solution(rows, columns, queries));
