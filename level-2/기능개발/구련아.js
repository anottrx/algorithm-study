function solution(progresses, speeds) {
  const deploys = [];
  progresses.forEach((progress, index) => {
    const deploy = Math.ceil((100 - progress) / speeds[index]);
    deploys.push(deploy);
  });

  const answer = [];
  for (let i = 0; i < deploys.length; i++) {
    let days = 0;
    for (let j = i; j < deploys.length; j++) {
      if (deploys[i] >= deploys[j]) days++;
      else break;
    }
    i += days - 1;
    answer.push(days);
  }
  return answer;
}
