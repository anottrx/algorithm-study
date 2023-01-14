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

const getClothesCombinationCount = (clothesObj) => {
  let clothesCombinationCount = 1;
  Object.values(clothesObj).forEach((clothes) => {
    clothesCombinationCount *= clothes.length + 1;
  });

  return clothesCombinationCount - 1;
};

function solution(clothes) {
  const clothesObj = getClothesObj(clothes);
  const clothesCombinationCount = getClothesCombinationCount(clothesObj);

  return clothesCombinationCount;
}
