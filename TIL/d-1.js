// 문자열 내 p와 y의 개수

function solution(s) {
  let answer = true;

  const Y = "Y";
  const P = "P";
  const arr1 = [];
  const arr2 = [];

  const word = s.toUpperCase().split("");

  word.forEach((x) => {
    if (x === Y) arr1.push(x);
    else if (x === P) arr2.push(x);
  });

  if (arr1.length === arr2.length || (arr1.length === 0 && arr2.length === 0)) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
