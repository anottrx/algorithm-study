function solution(orders, course) {
  let answer = [];
  let obj = {};

  course.map((num) => {
    orders.forEach((menu) => {
      combi(menu.split(''), num).map((el) => {
        const word = el.sort().join('');
        obj[word] ? (obj[word] += 1) : (obj[word] = 1);
      });
    });
  });

  course.map((num) => {
    let maxNum = 0;
    for (const key in obj) {
      if (obj[key] === 1) continue;
      if (key.length === num) {
        obj[key] > maxNum ? (maxNum = obj[key]) : '';
      }
    }
    let temp = Object.keys(obj).filter((key) => {
      return obj[key] === maxNum && key.length === num;
    });
    temp;
    temp.map((el) => answer.push(el));
  });

  return answer.sort();
}

function combi(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, array) => {
    const restArray = array.slice(index + 1);
    const combiArray = combi(restArray, num - 1);
    const combiFixed = combiArray.map((v) => [fixed, ...v]);

    result.push(...combiFixed);
  });
  return result;
}
