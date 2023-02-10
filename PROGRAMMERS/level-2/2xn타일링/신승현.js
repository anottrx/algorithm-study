function solution(n) {
  const mod = 1_000_000_007;
  let dp = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
  }
  return dp[n] % mod;
}
// 어떻게 더 줄일 수 있을지 모르겠음
