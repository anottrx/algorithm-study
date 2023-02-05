function solution(number, k) {
  var answer = [];
  const numArray = number.split('').map(Number); //[1,2,8,4,5,3,7,6,9];
  const length = numArray.length - k; // 3 반복해야할 횟수
  let n = numArray.length - k; // 3 얻어야 할 숫자의 갯수 -> 반복문을 돌때마다 갯수는 줄어든다.

  for (let i = 0; i < length; i++) {
    const tempArr = numArray.slice(0, numArray.length - (length - i) + 1);
    const max = Math.max(...tempArr);
    numArray.splice(0, numArray.indexOf(max) + 1);
    answer.push(max);
  }

  return answer.join(''); // 문자열 형태로 출력할 것
}

// const number = '128453769';
// const k = 6;
// console.log(solution(number, k));

// tempArr 를 만들어 얻어야 할 숫자의 자리수까지 중 최대값을 찾고 찾은 최대값까지 배열을 잘라 남은 배열로 다시 반복한다.
