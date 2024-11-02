function solution(input) {
  const lines = input.trim().split("\n");
  const List = lines.slice(1);
  let answer = "NO";

  const fruitCounts = {
    STRAWBERRY: 0,
    BANANA: 0,
    LIME: 0,
    PLUM: 0,
  };

  const newList = List.map((el) => el.split(" "));

  newList.forEach((el) => {
    const fruit = el[0];
    const number = Number(el[1]);
    fruitCounts[fruit] += number;
  });

  for (const fruit in fruitCounts) {
    if (fruitCounts[fruit] === 5) {
      answer = "YES";
      break;
    }
  }

  console.log(answer);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
solution(input);
