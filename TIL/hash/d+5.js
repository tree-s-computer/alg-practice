const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]); // 문자열 길이
const morseMessage = input[1]; // 모스 부호 메시지

const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ",": "--..--",
  ".": ".-.-.-",
  "?": "..--..",
  ":": "---...",
  "-": "-....-",
  "@": ".--.-.",
};

const morseToChar = Object.fromEntries(
  Object.entries(morseCode).map(([key, value]) => [value, key])
);

function solution(morseMessage) {
  const arr = morseMessage.split(" ");
  let word = "";

  arr.forEach((el) => {
    if (morseToChar[el]) {
      word += morseToChar[el];
    }
  });

  console.log(word);
}

solution(morseMessage);
