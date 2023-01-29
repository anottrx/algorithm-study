const isValidSkillTree = (skill, skillTree) => {
  const skillTreeIndex = skillTree.map((elem) => skill.indexOf(elem));
  const isValid = skillTreeIndex.every((elem, index) => elem === index);

  return isValid;
};

const getCoreSkillTree = (skill, skillTree) => {
  return [...skillTree].filter((elem) => skill.includes(elem));
};

function solution(skill, skill_trees) {
  return skill_trees.reduce((validSkillCount, skillTree) => {
    const coreSkillTree = getCoreSkillTree(skill, skillTree);

    if (isValidSkillTree(skill, coreSkillTree)) validSkillCount += 1;

    return validSkillCount;
  }, 0);
}

// function solution(skill, skill_trees) {
//   return skill_trees.reduce((count, skill_tree) => {
//     const arr = [];
//     [...skill_tree].forEach((elem) => {
//       if (skill.includes(elem)) arr.push(elem);
//     });
//     if (skill.includes(arr.join('')) && arr[0] === skill[0]) {
//       count += 1;
//     }

//     return count;
//   }, 0);
// }
