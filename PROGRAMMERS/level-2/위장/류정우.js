const getClothesObj = (clothes) => {
  return clothes.reduce((clothesObj, [_, type]) => {
    clothesObj[type] = (clothesObj[type] || 0) + 1;

    return clothesObj;
  }, {});
};

const getClothesCombinationCount = (clothesObj) => {
  let clothesCombinationCount = 1;
  Object.values(clothesObj).forEach((clothCount) => {
    clothesCombinationCount *= clothCount + 1;
  });

  return clothesCombinationCount - 1;
};

function solution(clothes) {
  const clothesObj = getClothesObj(clothes);
  const clothesCombinationCount = getClothesCombinationCount(clothesObj);

  return clothesCombinationCount;
}
