function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  let answer = "";
  let stringNumber = "";

  s.split("").forEach((x) => {
    if (!isNaN(x)) {
      answer += x;
    } else {
      stringNumber += x;
    }

    if (numbers.includes(stringNumber)) {
      const index = numbers.indexOf(stringNumber);
      answer += index;
      stringNumber = "";
    }
  });

  return Number(answer);
}

// 순서를 적어보자
// 숫자일때? 그냥 숫자를 넣어버림
// 문자열일때? 일단 문자열 만들어, 그 문자열이 배열에 있는지 확인하고, 있으면 그 index를 return 해서 합쳐
