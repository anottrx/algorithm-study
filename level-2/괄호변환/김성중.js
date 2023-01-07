// 2020 KAKAO BLIND RECRUITMENT

function solution(p) {
  const getIndex = (str) => {
    let [left, right] = [0, 0];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") left += 1;
      if (str[i] === ")") right += 1;

      if (left === right) return i;
    }
  };

  const isBalanced = (str) => {
    const temp = [];
    str = [...str].reverse();

    while (str.length) {
      temp.push(str.pop());

      if (temp[temp.length - 2] === "(" && temp[temp.length - 1] === ")") {
        temp.pop();
        temp.pop();
      }
    }

    return !temp.length;
  };

  const getReversed = (str) =>
    [...str].map((ch) => (ch === "(" ? ")" : "(")).join("");

  const recursive = (str) => {
    if (str === "") return "";

    const index = getIndex(str);
    const [u, v] = [str.slice(0, index + 1), str.slice(index + 1)];

    return isBalanced(u)
      ? u + recursive(v)
      : "(" + recursive(v) + ")" + getReversed(u.slice(1, u.length - 1));
  };

  return recursive(p);
}
