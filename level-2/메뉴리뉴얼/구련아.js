const getCombination = (arr, selectedCount, totalCount) => {
  if (selectedCount === totalCount) return arr.map((el) => [el]);
  const result = [];
  arr.forEach((cur, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, selectedCount + 1, totalCount);
    const attach = combination.map((el) => [cur].concat(el));
    result.push(...attach);
  });
  return result;
};

function solution(orders, course) {
  const courseSet = new Set();
  orders.forEach((order, index) => {
    const splited = order.split("");
    for (let i = 2; i <= splited.length; i++) {
      const result = getCombination(splited, 1, i);
      result.forEach((res) => {
        courseSet.add(res.sort().join(""));
      });
    }
  });

  const courseMap = new Map();
  course.forEach((count) => {
    courseMap.set(count, { max: 2, list: [] });
  });
  courseSet.forEach((courseStr) => {
    let count = 0;
    const courseStrSet = new Set(courseStr.split(""));
    orders.forEach((order) => {
      const orderSet = new Set(order.split(""));
      let courseCount = 0;
      courseStrSet.forEach((v) => {
        if (orderSet.has(v)) courseCount++;
      });
      if (courseStrSet.size === courseCount) count++;
    });
    if (courseMap.has(courseStr.length)) {
      const courseObj = courseMap.get(courseStr.length);
      if (courseObj.max < count) {
        courseObj.max = count;
        courseObj.list = [courseStr];
      } else if (courseObj.max === count) {
        courseObj.list = [...courseObj.list, courseStr];
      }
      courseMap.set(courseStr.length, courseObj);
    }
  });

  const answer = [];
  courseMap.forEach((value) => {
    answer.push(...value.list);
  });
  return answer.sort();
}
