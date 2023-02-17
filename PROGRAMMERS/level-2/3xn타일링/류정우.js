const sum = (numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + number;
  });
};

function solution(n) {
  if (n % 2 !== 0) return 0;
  const dp = [0, 3, 11];

  for (let i = 3; i < n / 2 + 1; i++) {
    dp.push((dp[i - 1] * 3 + sum(dp.slice(1, i - 1)) * 2 + 2) % 1_000_000_007);
  }

  return dp[dp.length - 1];
}
