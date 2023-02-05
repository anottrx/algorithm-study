function solution(n) {
  let ans = 1;

  while (n > 2) {
    if (n % 2 === 1) {
      ans += 1;
      n = (n - 1) / 2;
    } else if (n % 2 === 0) {
      n /= 2;
    }
  }

  return ans;
}
