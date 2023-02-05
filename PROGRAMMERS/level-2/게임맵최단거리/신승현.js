function solutionDFS(maps) {
  var answer = 0;
  let cnt = [];
  let count = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let n = maps.length;
  let m = maps[0].length;

  function DFS(x, y) {
    if (x === n - 1 && y === m - 1) {
      cnt.push(count);
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          maps[x][y] = 0;
          count++;

          DFS(nx, ny);
          maps[x][y] = 1;
          count--;
        }
      }
    }
  }

  maps[0][0] = 0;
  DFS(0, 0);
  if (cnt.length === 0) answer = -1;
  else answer = Math.min(...cnt) + 1;
  return answer;
}

// DFS 방식-> 시간초과

function solutionBFS(maps) {
  var answer = 0; //answer = -1
  let answerArr = []; // 삭제
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let n = maps.length;
  let m = maps[0].length;
  let queue = [];
  queue.push([0, 0, 1]);
  while (queue.length) {
    let [x, y, cnt] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      answerArr.push(cnt); // answer = cnt;
    }
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }
  if (answerArr.length === 0) answer = -1; //삭제
  else answer = answerArr[0]; // 삭제
  return answer;
}

// answer 초기값을 -1로 두고 answerArr 삭제, 61,62 줄을 삭제, 50번째 줄에 answer=cnt 로 두는 것이 더 깔끔한데 오히려 시간초과가 남(뭐가 문제인지 모르겠음)

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps));
