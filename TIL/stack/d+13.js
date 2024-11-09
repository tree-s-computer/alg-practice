const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const array = input.slice(1);

const results = array.map((el, index) => {
  const reversedWords = el.split(" ").reverse().join(" ");
  return `Case #${index + 1}: ${reversedWords}`;
});

console.log(results.join("\n"));
