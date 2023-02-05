const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputCount = Number(input[0]);
const testCases = [];

for (let i = 1; i <= inputCount; i++) {
  const temp = input[i].split('').map(Number);
  const testCase = temp;
  testCases.push(testCase);
}

function solutionBFS(N, board) {
  let answer = 0;
  let answerArr = [];
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let cnt = 0;
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          // console.log('x y', x, y);
          cnt++;
          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        answerArr.push(cnt);
        // console.log('cnt', cnt);
      }
    }
  }
  console.log(answer);
  answerArr.sort((a, b) => a - b).map((e) => console.log(e));
}

solutionBFS(inputCount, testCases);

// function solutionDFS(N, arr) {
//   let answer = 0;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   let answerArr = [];
//   let cnt = 1;

//   function DFS(x, y, cnt) {
//     // let max = Number.MIN_SAFE_INTEGER;
//     arr[x][y] = 0;
//     temp = 0;
//     for (let k = 0; k < 4; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (nx >= 0 && nx < N && ny >= 0 && ny < N && arr[nx][ny] === 1) {
//         ++cnt;
//         DFS(nx, ny, cnt);
//       }
//       // answerArr.push(cnt);
//     }
//   }

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (arr[i][j] === 1) {
//         answer += 1;
//         DFS(i, j, cnt);
//         answerArr.push(cnt);
//       }
//     }
//   }
//   // answerArr.sort((a, b) => a - b);
//   console.log(answer);
//   answerArr.sort((a, b) => a - b).map((e) => console.log(e));
// }

// 6,3 에서 하나가 누락된다.
// solutionDFS(inputCount, testCases);
