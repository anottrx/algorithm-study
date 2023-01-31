function solution(maps) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const [n, m] = [maps.length - 1, maps[0].length - 1];
  const queue = [[0, 0, 1]];

  const isOut = (ny, nx, n, m) => ny < 0 || nx < 0 || ny > n || nx > m;

  while (queue.length) {
    let [y, x, count] = queue.shift();

    if (y === n && x === m) return count;

    for (let i = 0; i < 4; i++) {
      const [dy, dx] = directions[i];
      const [ny, nx] = [dy + y, dx + x];

      if (isOut(ny, nx, n, m)) continue;
      if (maps[ny][nx] === 0) continue;

      maps[ny][nx] = 0;
      queue.push([ny, nx, count + 1]);
    }
  }

  return -1;
}
