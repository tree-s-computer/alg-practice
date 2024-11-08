const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const words = input.slice(1, N + 1);
const wordSet = new Set(words);

let password = "";

for (let word of words) {
  const reversedWord = word.split("").reverse().join("");
  if (wordSet.has(reversedWord)) {
    password = word;
    break;
  }
}

const passwordLength = password.length;
const middleChar = password[Math.floor(passwordLength / 2)];
console.log(passwordLength, middleChar);
