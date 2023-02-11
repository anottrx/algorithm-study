const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[1].split(' ').map((e) => +e);

function solution(arr) {
  let answer = 0;
  let left = 0;
  let right = arr.length - 1;
  let maxLeft = Number.MIN_SAFE_INTEGER;
  let maxRight = Number.MIN_SAFE_INTEGER;

  while (left < right) {
    if (arr[left] <= arr[right]) {
      if (arr[left] >= maxLeft) {
        maxLeft = arr[left];
      } else {
        answer += maxLeft - arr[left];
      }
      left++;
    } else if (arr[left] > arr[right]) {
      if (arr[right] >= maxRight) {
        maxRight = arr[right];
      } else {
        answer += maxRight - arr[right];
      }
      right--;
    }
  }

  return answer;
}

console.log(solution(arr));
