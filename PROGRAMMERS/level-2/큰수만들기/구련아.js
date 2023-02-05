function solution(number, k) {
  const numbers = number.split("").map(Number);
  const stack = [numbers[0]];
  let [removeCount, lastIndex] = [0, -1];

  for (let i = 1; i < numbers.length; i++) {
    while (stack.length > 0 && removeCount !== k) {
      if (stack.at(-1) < numbers[i]) {
        stack.pop();
        removeCount++;
      } else {
        break;
      }
    }
    stack.push(numbers[i]); // 우선 배열에 값 넣기
    if (removeCount === k) {
      lastIndex = i + 1;
      break;
    }
  }

  if (removeCount < k) {
    while (removeCount !== k) {
      stack.pop();
      removeCount++;
    }
  }
  return stack.join("") + (lastIndex === -1 ? "" : number.slice(lastIndex));
}
