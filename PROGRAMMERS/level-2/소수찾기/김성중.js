function solution(numbers) {
  const total = new Set();

  const recursive = (temp, indexes) => {
    if (temp.length) total.add(Number(temp.join("")));

    [...numbers].forEach((number, index) => {
      if (!indexes.includes(index))
        recursive([...temp, number], [...indexes, index]);
    });
  };

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num % 2 === 0) return num === 2;
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2)
      if (num % i === 0) return false;
    return true;
  };

  recursive([], []);

  return [...total].filter((e) => isPrime(e)).length;
}
