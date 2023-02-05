// DFS 이진트리

function solution(numbers, target) {
  var answer = 0;
  let checkbox = Array.from({ length: numbers.length + 1 }, () => 0);
  function DFS(v) {
    if (v === numbers.length + 1) {
      let sum = 0;
      for (let i = 1; i <= numbers.length; i++) {
        if (checkbox[i] === 1) sum += numbers[i - 1];
        if (checkbox[i] === 0) sum -= numbers[i - 1];
      }
      if (sum === target) answer += 1;
    } else {
      checkbox[v] = 1;
      DFS(v + 1);
      checkbox[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}
