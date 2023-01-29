function solution(numbers) {
  let answer = numbers
    .map((num) => num + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  if (answer[0] === '0') answer = '0';

  return answer;
}

// 테스트케이스 11 : numbers [0,0,0,0] => 0000 아니고 answer 0
// 문제에서 큰 수를 만들고 문자열로 반환하는 것이기 때문
