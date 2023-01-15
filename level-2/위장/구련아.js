function solution(clothes) {
  const clothMap = new Map(); // key:의상종류, value:의상개수
  clothes.forEach((cloth) => {
    if (clothMap.has(cloth[1]))
      clothMap.set(cloth[1], clothMap.get(cloth[1]) + 1);
    else clothMap.set(cloth[1], 1);
  });

  let answer = 1;
  clothMap.forEach((value) => {
    answer *= value + 1;
  });
  return answer - 1;
}
