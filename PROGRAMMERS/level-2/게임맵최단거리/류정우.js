function solution(maps) {
  const queue = [[0, 0, 1]];
  const goal = [maps.length - 1, maps[0].length - 1];
  const [dx, dy] = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    if (x === goal[0] && y === goal[1]) return count;

    for (let i = 0; i < 4; i++) {
      const [ex, ey] = [dx[i] + x, dy[i] + y];
      if (maps[ex]?.[ey] === 1) {
        queue.push([ex, ey, count + 1]);
        maps[ex][ey] = -1;
      }
    }
  }

  return -1;
}
