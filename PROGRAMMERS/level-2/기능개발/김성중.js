function solution(progresses, speeds) {
  const res = [];
  const tempArr = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  let [max, count] = [tempArr[0], 0];

  tempArr.forEach((num) => {
    if (num > max) {
      max = num;
      res.push(count);
      count = 1;
    } else count++;
  });

  return [...res, count];
}
