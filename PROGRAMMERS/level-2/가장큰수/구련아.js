function solution(numbers) {
  const answer = numbers
    .sort((a, b) => b + String(a) - (a + String(b)))
    .join("");
  return answer.startsWith("0") ? "0" : answer;
}
