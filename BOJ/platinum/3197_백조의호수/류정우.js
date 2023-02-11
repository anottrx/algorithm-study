const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const rows = input.splice(1);

const [dx, dy] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];

function solution(R, C, rows) {
  const lake = rows.map((row) => [...row]);
  const waterVisit = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => false)
  );
  const swanVisit = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => false)
  );

  let [waterCoordinate, nextWaterCoordinate] = [[], []];
  let [swan1, swan2] = [[], []];
  let [ex, ey] = [0, 0];

  lake.forEach((row, i) =>
    row.forEach((status, j) => {
      if (status === 'L') {
        if (swan1.length === 0) {
          swan1.push([i, j]);
          swanVisit[i][j] = true;
        }
        [ex, ey] = [i, j];
        lake[i][j] = '.';
      }

      if (status === '.') {
        waterCoordinate.push([i, j]);
        waterVisit[i][j] = true;
      }
    })
  );

  const swanBfs = () => {
    while (swan1.length > 0) {
      const [x, y] = swan1.shift();
      if (x === ex && y === ey) return true;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (!lake[nx]?.[ny] || swanVisit[nx][ny]) continue;

        swanVisit[nx][ny] = true;
        if (lake[nx][ny] === '.') {
          swan1.push([nx, ny]);
          continue;
        }
        swan2.push([nx, ny]);
      }
    }
    return false;
  };

  const waterBfs = () => {
    while (waterCoordinate.length > 0) {
      const [x, y] = waterCoordinate.shift();
      lake[x][y] = '.';

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (!lake[nx]?.[ny] || waterVisit[nx][ny]) continue;

        waterVisit[nx][ny] = true;
        if (lake[nx][ny] === '.') {
          waterCoordinate.push([nx, ny]);
          continue;
        }
        nextWaterCoordinate.push([nx, ny]);
      }
    }
  };

  let days = 0;
  while (true) {
    waterBfs();
    if (swanBfs()) return days;

    waterCoordinate = nextWaterCoordinate;
    nextWaterCoordinate = [];
    swan1 = swan2;
    swan2 = [];

    days += 1;
  }
}

console.log(solution(R, C, rows));
