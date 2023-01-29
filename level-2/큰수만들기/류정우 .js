const getBiggestNumber = (number, k) => {
  const stack = [-1];

  [...number].forEach((num, index) => {
    if (stack[stack.length - 1] < num) {
      stack.pop();
      stack.push(num);
    }
    k--;
  });
};

function solution(number, k) {
  return getBiggestNumber(number, k);
}
