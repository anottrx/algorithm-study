function solution(n) {
  const dp = [1, 2];

  for (let i = 2; i < n; i++) {
    dp.push((dp[i - 2] + dp[i - 1]) % 1_000_000_007);
  }

  return dp[n - 1] % 1_000_000_007;
}
