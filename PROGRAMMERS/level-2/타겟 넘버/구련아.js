let answer = 0;

const move = (index, curValue, numbers, target) => {
  if (index === numbers.length) {
    if (target === curValue) answer++;
    return;
  }
  move(index + 1, curValue + numbers[index], numbers, target);
  move(index + 1, curValue - numbers[index], numbers, target);
};

function solution(numbers, target) {
  move(0, 0, numbers, target);
  return answer;
}
