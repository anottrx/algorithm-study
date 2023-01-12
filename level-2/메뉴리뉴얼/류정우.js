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

const addCourse = (orders, menuCount, courses) => {
  const targetOrders = orders.filter((order) => order.length >= menuCount);

  targetOrders.forEach((order) => {
    const combinations = getCombinations([...order], menuCount);
    combinations.forEach((combination) => {
      courses[combination] = (courses[combination] || 0) + 1;
    });
  });

  return courses;
};

const getCourses = (orders, course) => {
  let courses = {};

  course.forEach((menuCount) => {
    courses = addCourse(orders, menuCount, courses);
  });

  return courses;
};

function solution(orders, course) {
  const answer = [];

  const sortedOrders = orders.map((order) => [...order].sort().join(''));
  const courses = getCourses(sortedOrders, course);

  course.forEach((menuCount) => {
    const targetCourses = Object.entries(courses).filter(
      ([key, value]) => key.length === menuCount && value >= 2
    );
    const max = Math.max(...targetCourses.map(([_, value]) => value));

    targetCourses.forEach(([key, value]) => {
      if (value === max) answer.push(key);
    });
  });

  return answer.sort();
}
