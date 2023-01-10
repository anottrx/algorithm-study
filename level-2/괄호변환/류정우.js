const splitBrackets = (brackets) => {
  let u = '';
  let v = '';
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < brackets.length; i++) {
    const curBracket = brackets[i];
    u += curBracket;
    if (curBracket === '(') {
      leftCount += 1;
    } else {
      rightCount += 1;
    }
    if (leftCount === rightCount) {
      v += brackets.slice(i + 1);
      break;
    }
  }

  return [u, v];
};

const checkBracketsCorrectness = (brackets) => {
  const stack = [];
  [...brackets].some((bracket) => {
    if (stack[stack.length - 1] === '(' && bracket === ')') {
      stack.pop();
      return false;
    }
    stack.push(bracket);
  });

  return stack.length === 0;
};

const getRefactorU = (u, v) => {
  let refactorU = `(${getCorrectBrackets(v)})`;
  [...u.slice(1, u.length - 1)].forEach((bracket) => {
    if (bracket === '(') {
      refactorU += ')';
    } else {
      refactorU += '(';
    }
  });

  return refactorU;
};

const getCorrectBrackets = (p) => {
  const [u, v] = splitBrackets(p);
  const isCorrectU = checkBracketsCorrectness(u);

  if (isCorrectU && v == '') return u;
  if (isCorrectU) return u + getCorrectBrackets(v);

  return getRefactorU(u, v);
};

function solution(p) {
  const correctBrackets = getCorrectBrackets(p);
  return correctBrackets;
}
