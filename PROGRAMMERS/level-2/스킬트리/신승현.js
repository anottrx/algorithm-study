function solution(skill, skill_trees) {
  let answer;
  const skill_orders_array = [];

  //skill_tree : 'BACDE', ... / 1. 스킬 순서 생성
  for (const skill_tree of skill_trees) {
    const skill_order = [];

    // 'B','A','C','D','E', ...
    for (let i = 0; i < skill_tree.length; i++) {
      let index = 0;

      if (skill.includes(skill_tree[i])) {
        skill_order.push(skill.indexOf(skill_tree[i]));
        index += 1;
      }
    }

    skill_orders_array.push(skill_order);
  }

  // 2. 스킬 순서 올바른지 확인하기
  const isRightOrder = (skill_orders_array) => {
    let flag = 1;
    const sort_array = skill_orders_array.slice().sort();

    // 2.1 스킬 순서 확인
    if (JSON.stringify(sort_array) !== JSON.stringify(skill_orders_array))
      flag = -1;

    // 2.2 선행 스킬 유무 확인
    if (
      skill_orders_array.length - 1 !==
      sort_array[skill_orders_array.length - 1]
    )
      flag = -1;

    // 2.3.
    if (skill_orders_array.length === 0) flag = 1;

    return flag > 0;
  };

  answer = skill_orders_array.filter((skill_order) =>
    isRightOrder(skill_order)
  ).length;

  return answer;
}
