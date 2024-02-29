const evalRPN = function (tokens) {
  const stack = [];

  tokens.forEach((el) => {
    if (!isNaN(el)) {
      stack.push(parseInt(el)); // 문자열을 정수로 변환하여 스택에 추가
      return;
    }
    if (el === "+") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b + a); // 순서 변경 및 덧셈 연산 순서로 변경
      return;
    }
    if (el === "-") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b - a);
      return;
    }
    if (el === "*") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(a * b);
      return;
    }
    if (el === "/") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(parseInt(b / a)); // 순서 변경 및 나눗셈 연산 순서로 변경
      return;
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
