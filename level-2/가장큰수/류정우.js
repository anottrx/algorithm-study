function solution(numbers) {
  const sortedNumbers = numbers.map(String).sort((a, b) => {
    return b.repeat(4).substr(0, 4) - a.repeat(4).substr(0, 4);
  });

  return sortedNumbers.join('');
}
