function solution(numbers) {
  const answer = numbers
    .sort(
      (a, b) => Number(String(b) + String(a)) - Number(String(a) + String(b))
    )
    .join("");
  return answer.startsWith("0") ? "0" : answer;
}
