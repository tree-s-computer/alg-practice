const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const words = input.slice(1, N + 1);

let password = "";

for (let i = 0; i < words.length; i++) {
  for (let j = i + 1; j < words.length; j++) {
    const reversedWord = words[i].split("").reverse().join("");
    if (reversedWord === words[j]) {
      password = words[i];
      break;
    }
  }
  if (password) break;
}

const passwordLength = password.length;
const middleChar = password[Math.floor(passwordLength / 2)];
console.log(passwordLength, middleChar);
