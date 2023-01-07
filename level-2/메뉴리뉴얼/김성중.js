// 2021 KAKAO BLIND RECRUITMENT

function solution(orders, course) {
  const hash = new Map();

  const getCombinations = (order, num) => {
    const res = [];

    if (num === 1) return order.map((e) => [e]);
    order.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combination = getCombinations(rest, num - 1);
      const attached = combination.map((e) => [fixed, ...e]);

      res.push(...attached);
    });

    return res;
  };

  orders.forEach((order) => {
    course
      .filter((num) => num <= order.length)
      .forEach((num) => {
        const combinations = getCombinations([...order], num);

        combinations.forEach((combination) => {
          combination = combination.sort().join("");
          hash.set(
            combination,
            hash.has(combination) ? hash.get(combination) + 1 : 1
          );
        });
      });
  });

  const max = new Map();
  const entries = [...hash.entries()];

  course.forEach((num) =>
    max.set(
      num,
      Math.max(
        2,
        ...entries.filter((e) => e[0].length === num).map((e) => e[1])
      )
    )
  );

  return entries
    .filter((e) => max.get(e[0].length) === e[1])
    .map((e) => e[0])
    .sort();
}
