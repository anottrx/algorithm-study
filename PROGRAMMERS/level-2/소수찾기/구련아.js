function solution(numbers) {
  const numberSet = new Set();
  const makeNumbers = (curNum) => {
    // 순열구하기
    if (curNum !== "") numberSet.add(Number(curNum));
    if (curNum.length < numbers.length) {
      for (let i = 0; i < numbers.length; i++) {
        if (!visited[i]) {
          visited[i] = true;
          makeNumbers(curNum + numbers.charAt(i), i, visited);
          visited[i] = false;
        }
      }
    }
  };
  const visited = Array.from({ length: numbers.length }, () => false);
  makeNumbers("");

  const checkIsPrime = (num) => {
    // 소수 판별
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let answer = 0;
  numberSet.forEach((num) => {
    if (checkIsPrime(num)) answer++;
  });
  return answer;
}
