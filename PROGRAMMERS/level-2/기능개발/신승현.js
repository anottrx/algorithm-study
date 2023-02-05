function solution(progresses, speeds) {
  var answer = [];
  let finishArr = [];
  for (let i = 0; i < progresses.length; i++) {
    if ((100 - progresses[i]) % speeds[i] === 0) {
      finishArr.push((100 - progresses[i]) / speeds[i]);
    } else {
      finishArr.push(Math.floor((100 - progresses[i]) / speeds[i]) + 1);
    }
  }
  let big = finishArr[0];
  const hashMap = {};
  for (let ele of finishArr) {
    big = Math.max(big, ele);

    if (big === ele) {
      hashMap[ele] = 1;
    } else {
      hashMap[big] = hashMap[big] + 1;
    }
  }
  answer = Object.values(hashMap);

  return answer;
}
