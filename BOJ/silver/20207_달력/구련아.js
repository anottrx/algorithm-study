const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const days = inputs.map((v) => v.split(" ").map(Number));
days.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  return a[0] - b[0];
});

const schedules = []; // {start, end}
days.forEach((day) => {
  const [curStart, curEnd] = day;
  let isAdded = false;
  for (let i = 0; i < schedules.length; i++) {
    // 종료날의 다음날과 시작일이 같아야 이어붙일 수 있다
    if (schedules[i].end === curStart - 1) {
      schedules[i].end = curEnd;
      isAdded = true;
      break;
    }
  }
  if (!isAdded) {
    schedules.push({ start: curStart, end: curEnd });
  }
});

const papers = [];
schedules.forEach((schedule) => {
  const [curStart, curEnd] = [schedule.start, schedule.end];
  let isAdded = false;

  for (let i = 0; i < papers.length; i++) {
    // 조건 '기존시작일 <= 현재시작일 <= 기존종료일' && '기존종료일보다 현재종료일이 늦는 경우'
    // 기존종료일 = 현재종료일
    if (curStart >= papers[i].start && curStart <= papers[i].end) {
      isAdded = true;
      papers[i].end = Math.max(papers[i].end, curEnd);

      let isNewLine = true;
      for (let j = 0; j < papers[i].list.length; j++) {
        // 현재종료일이 기존시작일보다 앞서거나, 현재시작일이 기존종료일보다 늦거나
        const [paperStart, paperEnd] = papers[i].list[j];
        if (curEnd < paperStart) {
          papers[i].list[j][0] = curStart;
          isNewLine = false;
          break;
        }
        if (curStart > paperEnd) {
          papers[i].list[j][1] = curEnd;
          isNewLine = false;
          break;
        }
      }
      if (isNewLine) {
        papers[i].list.push([curStart, curEnd]);
      }

      break;
    }

    // 기존시작일보다 현재종료일이 빠르다면 이어붙인다 (순서대로니까)
    if (curEnd < papers[i].start) {
      isAdded = true;
      papers[i].start = curStart;
      papers[i].count++;
      break;
    }
  }

  if (!isAdded) {
    papers.push({
      start: curStart,
      end: curEnd,
      list: [[curStart, curEnd]],
    });
  }
});

let answer = 0;
papers.forEach((paper) => {
  answer += (paper.end - paper.start + 1) * paper.list.length;
});
console.log(answer);
