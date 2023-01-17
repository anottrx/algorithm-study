function solution(numbers, target) {
  let count = 0;

  const recursive = (sum, loc) => {
    if (loc < numbers.length) {
      recursive(sum + numbers[loc], loc + 1);
      recursive(sum - numbers[loc], loc + 1);
    } else if (sum === target) count += 1;
  };

  recursive(0, 0);

  return count;
}
