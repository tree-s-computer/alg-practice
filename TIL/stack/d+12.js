const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const commands = input.slice(1);
const stack = [];
const results = [];

for (let i = 0; i < N; i++) {
  const command = commands[i];

  if (command.startsWith("push")) {
    const [, value] = command.split(" ");
    stack.push(parseInt(value));
  } else if (command === "pop") {
    results.push(stack.length ? stack.pop() : -1);
  } else if (command === "size") {
    results.push(stack.length);
  } else if (command === "empty") {
    results.push(stack.length ? 0 : 1);
  } else if (command === "top") {
    results.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(results.join("\n"));
