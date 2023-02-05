// Summer/Winter Coding(~2018)

function solution(skill, skill_trees) {
  return skill_trees.reduce((possibleCount, skill_tree) => {
    const temp = [...skill_tree].filter((s) => [...skill].includes(s)).join("");

    return skill.indexOf(temp) === 0 ? possibleCount + 1 : possibleCount;
  }, 0);
}
