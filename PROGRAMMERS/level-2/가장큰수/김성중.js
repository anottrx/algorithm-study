function solution(numbers) {
  const sorted = numbers.sort((a, b) => {
    [a, b] = [`${a}${b}`, `${b}${a}`].map(Number);

    return a < b ? 1 : a > b ? -1 : 0;
  });

  return sorted[0] === 0 ? "0" : sorted.join("");
}
