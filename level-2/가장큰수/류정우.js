function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => {
    for (let i = 0; i < 4; i++) {
      if (a.toString()[i] !== b.toString()[i]) {
        return b.toString()[i] - a.toString()[i];
      }
    }
  });

  return sortedNumbers.join('');
}
