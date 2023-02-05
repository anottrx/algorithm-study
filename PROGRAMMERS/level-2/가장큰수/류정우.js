function solution(numbers) {
  const sortedNumber = numbers
    .map(String)
    .sort((a, b) => b.repeat(4).substr(0, 4) - a.repeat(4).substr(0, 4))
    .join('');

  return sortedNumber[0] === '0' ? '0' : sortedNumber;
}
