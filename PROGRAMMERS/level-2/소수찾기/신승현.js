function solution(numbers) {
  let answer = 0;
  const n = numbers.split('');
  const nums = new Set();

  const DFS = (L, s) => {
    if (s.length > 0) {
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s));

        if (isPrime(Number(s))) {
          answer++;
        }
      }
    }
    if (L.length > 0) {
      for (let i = 0; i < L.length; i++) {
        let temp = L.slice(0);
        temp.splice(i, 1);

        DFS(temp, s + L[i]);
      }
    }
  };

  const isPrime = (num) => {
    if (num < 2) return false;
    for (var i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  DFS(n, '');

  return answer;
}
