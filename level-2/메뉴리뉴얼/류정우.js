const courses = {};

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results.map((result) => result.join(''));
};

const addCourse = (orders, count) => {
  const targetOrders = orders.filter((order) => order.length >= count);

  targetOrders.forEach((order) => {
    const combinations = getCombinations([...order], count);
    combinations.forEach((combination) => {
      courses[combination] = (courses[combination] || 0) + 1;
    });
  });
};

function solution(orders, course) {
  const answer = [];

  const sortedOrders = orders.map((order) => [...order].sort().join(''));
  course.forEach((count) => addCourse(sortedOrders, count));

  course.forEach((count) => {
    const targetCourses = Object.entries(courses).filter(
      ([key, value]) => key.length === count && value >= 2
    );
    const max = Math.max(...targetCourses.map(([_, value]) => value));

    targetCourses.forEach(([key, value]) => {
      if (value === max) answer.push(key);
    });
  });

  return answer.sort();
}
