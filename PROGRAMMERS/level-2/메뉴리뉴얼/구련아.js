const getCombination = (arr, selectedCount, totalCount) => {
  // 조합
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
  const courseSet = new Set(); // 코스요리 종류 (문자열 형태: 'AB')
  orders.forEach((order) => {
    const orderSplited = order.split("");
    for (let i = 2; i <= orderSplited.length; i++) {
      const courseList = getCombination(orderSplited, 1, i);
      courseList.forEach((res) => {
        courseSet.add(res.sort().join(""));
      });
    }
  });

  const courseMap = new Map(); // key:코스개수, value: {max:최대개수, list:해당하는 코스리스트}
  course.forEach((count) => {
    courseMap.set(count, { max: 2, list: [] });
  });
  courseSet.forEach((courseStr) => {
    let count = 0; // orders에 해당 코스를 주문한 사람
    const courseStrSet = new Set(courseStr.split(""));
    orders.forEach((order) => {
      let courseCount = 0;
      courseStrSet.forEach((v) => {
        if (order.includes(v)) courseCount++;
      });
      if (courseStrSet.size === courseCount) count++;
    });
    if (courseMap.has(courseStr.length)) {
      const courseObj = courseMap.get(courseStr.length);
      if (courseObj.max < count) {
        // 코스 주문한 사람이 더 많다면 바꾸기
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
