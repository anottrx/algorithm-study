const generateArr = (rows, columns) => {
  return Array.from({ length: rows + 1 }, (_, row) => {
    return Array.from({ length: columns + 1 }, (_, column) => (row - 1) * columns + column);
  });
};

const getRotatedArrAndMinRotatedValue = (arr, query) => {
  const [x1, y1, x2, y2] = query;
  const temp = arr[x1][y1];
  const handledValues = [temp];
  // 좌측
  for (let x = x1 + 1; x <= x2; x++) {
    arr[x - 1][y1] = arr[x][y1];
    handledValues.push(arr[x][y1]);
  }
  // 아래측
  for (let y = y1 + 1; y <= y2; y++) {
    arr[x2][y - 1] = arr[x2][y];
    handledValues.push(arr[x2][y]);
  }
  // 우측
  for (let x = x2 - 1; x >= x1; x--) {
    arr[x + 1][y2] = arr[x][y2];
    handledValues.push(arr[x][y2]);
  }
  // 위측
  for (let y = y2 - 1; y >= y1; y--) {
    arr[x1][y + 1] = arr[x1][y];
    handledValues.push(arr[x1][y]);
  }
  arr[x1][y1 + 1] = temp;

  return [arr, Math.min(...handledValues)];
};

function solution(rows, columns, queries) {
  let [arr, minValue] = [generateArr(rows, columns), 0];

  return queries.reduce((minValues, query) => {
    [arr, minValue] = getRotatedArrAndMinRotatedValue(arr, query);

    return minValues.push(minValue), minValues;
  }, []);
}
