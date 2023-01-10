const getClothesObj = (clothes) => {
  return clothes.reduce((acc, [name, type]) => {
    if (acc[type]) {
      acc[type].push(name);
      return acc;
    }
    acc[type] = [name];
    return acc;
  }, {});
};

function solution(clothes) {
  let answer = 1;

  const clothesObj = getClothesObj(clothes);
  Object.values(clothesObj).forEach((clothes) => {
    answer *= clothes.length + 1;
  });

  return answer - 1;
}
