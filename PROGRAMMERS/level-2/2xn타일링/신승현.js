function solution(n) {
  // let answer = 0;
  let answer = 0;

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
  };

  for (let i = 0; i <= Math.floor(n / 2); i++) {
    const arr = Array.from({ length: n - i }, () => 1);
    arr.fill(2, 0, i);
    answer += getPermutations(arr, arr.length);
  }

  return answer;
}
// 1,2로만 구성된 배열을 구하고 순열로 갯수 구해서 풀려했으나 실패
