const getBiggestNumber = (number, k) => {
  let [start, end] = [0, k + 1];
  let biggestNumber = '';

  for (let i = 0; i < number.length - k; i++) {
    if (start === end) {
      biggestNumber += number.slice(start);
      break;
    }

    const slicedNumber = number.slice(start, end);
    const max = Math.max(...slicedNumber);
    const maxIndex = number.slice(start, end).indexOf(max);
    biggestNumber += max;

    [start, end] = [start + maxIndex + 1, end + 1];
  }

  return biggestNumber;
};

function solution(number, k) {
  return getBiggestNumber(number, k);
}
