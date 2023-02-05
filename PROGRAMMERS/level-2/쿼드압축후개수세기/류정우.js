const getQuadrants = (arr) => {
  const middle = arr.length / 2;
  const firstQuadrant = arr.slice(0, middle).map((v) => v.slice(0, middle));
  const secondQuadrant = arr.slice(0, middle).map((v) => v.slice(middle));
  const thirdQuadrant = arr.slice(middle).map((v) => v.slice(0, middle));
  const fourthQuadrant = arr.slice(middle).map((v) => v.slice(middle));

  return [firstQuadrant, secondQuadrant, thirdQuadrant, fourthQuadrant];
};

const isCompressable = (arr) => {
  return arr.every((v1) => v1.every((v2) => v2 === arr[0][0]));
};

function solution(arr) {
  const counter = [0, 0];
  const divideAndCompress = (arr) => {
    if (isCompressable(arr)) {
      counter[arr[0][0]] += 1;
      return;
    }

    const quadrants = getQuadrants(arr);
    for (const quadrant of quadrants) {
      divideAndCompress(quadrant);
    }
  };

  divideAndCompress(arr);

  return counter;
}
