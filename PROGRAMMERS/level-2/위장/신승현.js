function solution(clothes) {
  let answer = 0;
  const hashMap = {};

  for (let cloth of clothes) {
    hashMap[cloth[1]] = hashMap[cloth[1]] ? hashMap[cloth[1]] + 1 : 1;
  }
  let hashArr = Object.keys(hashMap).map((item) => hashMap[item]);
  const sum = hashArr.reduce((prev, cur) => prev * (cur + 1), 1);
  answer = sum - 1;

  return answer;
}
