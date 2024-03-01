const evalRPN = function (tokens) {
  const stack = [];

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "*": (a, b) => a * b,
    "/": (a, b) => parseInt(b / a),
  };

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = operators[token](operand1, operand2);
      stack.push(result);
    }
  });

  console.log(stack[0]);
};

const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

evalRPN(tokens);
