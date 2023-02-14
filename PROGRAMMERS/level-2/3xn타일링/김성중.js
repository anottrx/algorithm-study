function solution(n) {
  if (n % 2 === 1 || n < 2) return 0;

  const MOD = 1_000_000_007;
  const normarlize = ([a, b]) => (((4 * b) % MOD) - (a % MOD) + MOD) % MOD;

  let arr = [3, 11];
  n = n / 2 - 1;

  for (let i = 2; i <= n; i++) arr = [arr[1], normarlize(arr)];

  return arr[1];
}
