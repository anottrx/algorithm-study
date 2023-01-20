function solution(rows, columns, queries) {
  var answer = [];

  // 1씩 증가하는 배열
  const initArr = [...Array(rows)].map((v, r) =>
    [...Array(columns)].map((v, c) => r * columns + (c + 1))
  );

  // 0으로 초기화된 배열
  const emptyArr = Array.from(Array(rows), () => Array(columns).fill(0));

  const rotateArr = [];
  rotateArr.push(rotate(rows, columns, queries[0], emptyArr, initArr));

  if (queries.length > 1) {
    for (let i = 1; i < queries.length; i++) {
      let afterArr = rotate(
        rows,
        columns,
        queries[i],
        emptyArr,
        rotateArr[i - 1][0]
      );
      rotateArr.push(afterArr);
    }

    rotateArr.forEach((v) => answer.push(v[1]));

    return answer;
  }

  function rotate(rows, columns, query, emptyArr, prevArr) {
    const x1 = query[0] - 1;
    const y1 = query[1] - 1;
    const x2 = query[2] - 1;
    const y2 = query[3] - 1;

    for (let i = y1 + 1; i <= y2; i++) {
      emptyArr[x1][i] = prevArr[x1][i - 1];
      console.log('x1 i | x1 i-1', x1, i, x1, i - 1);
    }
    for (let i = x1 + 1; i <= x2; i++) {
      emptyArr[i][y2] = prevArr[i - 1][y2];
      console.log('i y2 | i-1 y2', i, y2, i - 1, y2);
    }
    for (let i = y2 - 1; i >= y1; i--) {
      emptyArr[x2][i] = prevArr[x2][i + 1];
      console.log('x2,i | x2,i+1', x2, i, x2, i + 1);
    }
    for (let i = x2 - 1; i >= x1; i--) {
      emptyArr[i][y1] = prevArr[i + 1][y1];
      console.log('i,y1 | i+1,y1', i, y1, i + 1, y1);
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (emptyArr[i][j] === 0) emptyArr[i][j] = prevArr[i][j];
      }
    }
    let min = 10000;
    min = min > 0 && Math.min(...emptyArr);

    return [emptyArr, min];
  }

  return answer;
}

// 풀이 방식
// 1. queries에 맞게 돌고 돌면서 0으로 초기화된 배열에 돌아간 값들을 넣어준다.

// 2. 돌아간 배열들중 최소값을 찾는다.

// 3. 0이 아닌 값에 돌기 전 값들을 넣어준다.

// 4. 최소값과 회전한 후 배열을 리턴해준다.
