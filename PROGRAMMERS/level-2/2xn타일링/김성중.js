function solution(n) {
  const normalize = (num) => num % 1000000007;

  const fibonacci = (num) => {
    const arr = [1, 1];

    for (let i = 2; i <= num; i++) arr[i % 2] = normalize(arr[0] + arr[1]);

    return num % 2 === 0 ? arr[0] : arr[1];
  };

  return normalize(fibonacci(n));
}
