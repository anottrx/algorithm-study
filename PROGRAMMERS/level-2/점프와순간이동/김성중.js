// Summer/Winter Coding(~2018)

function solution(n) {
  let battery = 1;
  while (n !== 1) {
    if (n % 2 === 0) n /= 2;
    else {
      n--;
      battery++;
    }
  }
  return battery;
}
