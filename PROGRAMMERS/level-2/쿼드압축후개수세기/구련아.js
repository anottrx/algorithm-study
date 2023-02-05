function solution(arr) {
  const answer = [0, 0];

  const divide = (x, y, len) => {
    let [isSame, origin] = [true, arr[x][y]];
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (origin !== arr[i][j]) {
          isSame = false;
          break;
        }
      }
    }
    if (!isSame) {
      divide(x, y, len / 2);
      divide(x + len / 2, y, len / 2);
      divide(x, y + len / 2, len / 2);
      divide(x + len / 2, y + len / 2, len / 2);
    } else {
      if (origin === 0) answer[0]++;
      else answer[1]++;
    }
  };

  divide(0, 0, arr.length);

  return answer;
}
