const isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const x = s[i];
    const a = stack[stack.length - 1];
    const word = a + x;

    if (word == "()" || word == "[]" || word == "{}") {
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

const s = "()";
const n = "()";
const x = "(]";

console.log(isValid(s));
