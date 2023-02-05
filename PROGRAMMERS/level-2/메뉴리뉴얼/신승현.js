function solution(orders, course) {
  let answer = [];
  let obj = {};

  course.map((num) => {
    orders.forEach((menu) => {
      combi(menu.split(''), num).map((el) => {
        // 2중 map => course 배열 모든수와 orders  문자열 조합 만들기 위해
        const word = el.sort().join(''); // 순서 상관없도록 만듦
        obj[word] ? (obj[word] += 1) : (obj[word] = 1);
      });
    });
  });

  course.map((num) => {
    let maxNum = 0;
    for (const key in obj) {
      if (obj[key] === 1) continue; // 메뉴 갯수 2가지 이상
      if (key.length === num) {
        // num개 요리 가지수 중 가장 높은 것 찾기 그 수에 맞은 요리 선택
        obj[key] > maxNum ? (maxNum = obj[key]) : '';
      }
    }
    let temp = Object.keys(obj).filter((key) => {
      // 찾은 가장 높은 수와 같은 요리 조합을 filter로 거른 후 temp 변수에 넣기
      return obj[key] === maxNum && key.length === num;
    });

    // 중복 되는 값이 2개 나올 수 있으므로 하나씩 push
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
