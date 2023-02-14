function solution(n) {
  if (n % 2 === 1 || n < 2) return 0;

  const MOD = 1_000_000_007;
  const dp = Array.from({ length: n / 2 + 1 }, () => 0);

  dp[1] = 3;
  dp[2] = 11;
  for (let i = 3; i <= n / 2; i++) {
    dp[i] = (((dp[i - 1] * 4) % MOD) - (dp[i - 2] % MOD) + MOD) % MOD;
  }
  return dp[n / 2];
}
