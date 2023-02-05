function solution(p) {
  var answer = '';
  let open = 0; // '('
  let close = 0; // ')'
  if (p === '') return p;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') open++;
    else close++;

    if (open === close) {
      if (correctParentheses(p.slice(0, i + 1))) {
        answer = p.slice(0, i + 1) + solution(p.slice(i + 1));
        return answer;
      } else {
        answer = '(' + solution(p.slice(i + 1)) + ')';

        for (let j = 1; j < i; j++) {
          if (p[j] === '(') answer = answer + ')';
          else answer = answer + '(';
        }
        return answer;
      }
    }
  }
}

function correctParentheses(p) {
  const stack = [];
  for (let ele of p) {
    if (ele === '(') stack.push(ele);
    else {
      const last = stack.pop();
      if (ele === ')' && last !== '(') {
        return false;
      }
    }
  }
  return stack.length === 0;
}
