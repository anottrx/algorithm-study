const calculate = (numbers, target, memo) => {
  if (numbers.length === 0) return memo === target ? 1 : 0;

  return (
    calculate(numbers.slice(1), memo - numbers[0], target) +
    calculate(numbers.slice(1), memo + numbers[0], target)
  );
};

function solution(numbers, target) {
  let targetNumberCount = calculate(numbers, target, 0);

  return targetNumberCount;
}
