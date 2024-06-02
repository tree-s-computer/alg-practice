function solution(ingredient) {
  var answer = 0;
  const temp = [];

  for (let i = 0; i < ingredient.length; i++) {
    const el = ingredient[i];
    temp.push(el);
    if (
      temp.length >= 4 &&
      temp[temp.length - 1] === 1 &&
      temp[temp.length - 2] === 3 &&
      temp[temp.length - 3] === 2 &&
      temp[temp.length - 4] === 1
    ) {
      answer += 1;
      temp.pop();
      temp.pop();
      temp.pop();
      temp.pop();
    }
  }
  return answer;
}
