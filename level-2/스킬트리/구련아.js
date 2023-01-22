function solution(skill, skill_trees) {
  const mySkill = skill.split("");
  const mySkillSet = new Set(mySkill);
  return skill_trees.reduce((prev, skill_tree) => {
    const skillTree = skill_tree.split("");
    let mySkillIndex = 0,
      canSkill = true;
    for (let i = 0; i < skillTree.length; i++) {
      if (
        mySkillSet.has(skillTree[i]) &&
        skillTree[i] === mySkill[mySkillIndex]
      ) {
        mySkillIndex++;
      } else if (mySkillSet.has(skillTree[i])) {
        canSkill = false;
        break;
      }
    }
    return canSkill ? prev + 1 : prev;
  }, 0);
}
