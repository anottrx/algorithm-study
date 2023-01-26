/* 1트 - 시간 초과
function solution(number, k) {
  const len = number.length - k;
  let max = 0;

  const recursive = (loc, temp) => {
    if (temp.length === len) return (max = Math.max(max, Number(temp)));

    for (let i = loc; i < number.length; i++)
      recursive(i + 1, temp + number[i]);
  };

  recursive(0, "");

  return String(max);
} */

// 2트
function solution(number, k) {
  const stack = [];
  let max = "";

  for (const n of number) {
    while (k && stack[stack.length - 1] < n) {
      stack.pop();
      k--;
    }

    stack.push(n);
  }

  stack.splice(stack.length - k, k);

  return stack.join("");
}
