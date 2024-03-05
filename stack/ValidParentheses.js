const isValid = function (s) {
  const stack = [];

  const a = "()";
  const b = "[]";
  const c = "{}";

  for (let i = 0; i < s.length; i++) {
    const x = s[i];
    const v = stack[stack.length - 1];
    const word = x + v;

    if (word == a || word == b || word == c) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  return stack.length ? true : false;
};

const s = "()";
const n = "()";
const x = "(]";

console.log(isValid(s));
