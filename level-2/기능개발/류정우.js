function solution(progresses, speeds) {
  const answer = [];

  const remainingDays = progresses.reduce((remainingDays, progress, index) => {
    remainingDays.push(Math.ceil((100 - progress) / speeds[index]));

    return remainingDays;
  }, []);

  let index = 0;
  let count = 1;
  for (let j = index; j < remainingDays.length; j++) {
    // 비교하려는 값이 마지막 원소인 경우 어떤 결과가 나오든 push 해야하기 때문에 범위 밖의 인덱스를 사용
    if (remainingDays[index] >= remainingDays[j + 1]) {
      count++;
      continue;
    }
    answer.push(count);
    index = j + 1;
    count = 1;
  }

  return answer;
}
