function solution(clothes) {
  let count = 1;
  const hash = new Map();

  clothes.forEach((cloth) =>
    hash.set(cloth[1], hash.has(cloth[1]) ? hash.get(cloth[1]) + 1 : 1)
  );
  for (const value of hash.values()) count *= value + 1;

  return count - 1;
}
