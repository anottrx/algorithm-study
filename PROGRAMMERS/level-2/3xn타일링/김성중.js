function solution(n) {
  if (n % 2 === 1 || n < 2) return 0;

  const MOD = 1_000_000_007;
  const normalize = ([prev, res]) =>
    (((4 * res) % MOD) - (prev % MOD) + MOD) % MOD;

  let [prev, res] = [3, 11];

  for (let i = 2; i <= n / 2 - 1; i++)
    [prev, res] = [res, normalize([prev, res])];

  return res;
}
