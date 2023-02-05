function solution(n) {
  let batteryUsage = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }
    n -= 1;
    batteryUsage += 1;
  }

  return batteryUsage;
}
