const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr;

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => `${fixed}${el}`);
    results.push(...attached);
  });

  return results;
};

const getPrimeNumbers = () => {
  const arrLength = 10_000_000;
  const numbers = Array.from({ length: arrLength }, () => true);
  numbers[0] = false;
  numbers[1] = false;

  for (let i = 2; i <= arrLength; i++) {
    if (numbers[i] === false) continue;

    for (let j = i * 2; j <= arrLength; j += i) {
      numbers[j] = false;
    }
  }

  return numbers;
};

function solution(numbers) {
  let primeNumbersCount = 0;
  const primeNumbers = getPrimeNumbers();
  let permutations = [];

  for (let i = 1; i <= numbers.length; i++) {
    permutations = [...permutations, ...getPermutations([...numbers], i)];
  }
  permutations.map(Number);
  [...new Set(permutations)].forEach((number) => {
    if (primeNumbers[number]) primeNumbersCount++;
  });

  return primeNumbersCount;
}
