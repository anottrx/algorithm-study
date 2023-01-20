function solution(arr) {
  recursiveQuad(0, arr.length - 1, 0, arr.length - 1, arr);
  return answer;
}

const answer = [0, 0];

function recursiveQuad(x1, y1, x2, y2, arr) {
  let val = -1;

  for (let i = x1; i <= y1; i++) {
    for (let j = x2; j <= y2; j++) {
      if (val === -1) {
        val = arr[i][j];
      } else if (val !== arr[i][j]) {
        recursiveQuad(
          x1,
          Math.floor((x1 + y1) / 2),
          x2,
          Math.floor((x2 + y2) / 2),
          arr
        );
        recursiveQuad(
          x1,
          Math.floor((x1 + y1) / 2),
          Math.floor((x2 + y2) / 2) + 1,
          y2,
          arr
        );
        recursiveQuad(
          Math.floor((x1 + y1) / 2) + 1,
          y1,
          x2,
          Math.floor((x2 + y2) / 2),
          arr
        );
        recursiveQuad(
          Math.floor((x1 + y1) / 2) + 1,
          y1,
          Math.floor((x2 + y2) / 2) + 1,
          y2,
          arr
        );
        return;
      }
    }
  }
  answer[val]++;
}
