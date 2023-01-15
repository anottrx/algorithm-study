const splitBrackets = (brackets) => {
  let u = '';
  let v = '';
  let leftCount = 0;
  let rightCount = 0;

  [...brackets].some((bracket, index) => {
    u += bracket;
    if (bracket === '(') {
      leftCount += 1;
    } else {
      rightCount += 1;
    }
    if (leftCount === rightCount) {
      v += brackets.slice(index + 1);
      return true;
    }
  });

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

const getRefactorUV = (u, v) => {
  let refactorUV = `(${getCorrectBrackets(v)})`;
  [...u.slice(1, u.length - 1)].some((bracket) => {
    if (bracket === '(') {
      refactorUV += ')';
      return false;
    }
    refactorUV += '(';
  });

  return refactorUV;
};

const getCorrectBrackets = (p) => {
  const [u, v] = splitBrackets(p);
  const isCorrectU = checkBracketsCorrectness(u);
  if (isCorrectU) {
    if (v == '') return u;
    return u + getCorrectBrackets(v);
  }

  return getRefactorUV(u, v);
};

function solution(p) {
  const correctBrackets = getCorrectBrackets(p);

  return correctBrackets;
}
