function solution(t, p) {
  const answer = [];
  const stringArr = t.split("");
  const length = p.length;
  const pareNumber = Number(p);
  let numbers = "";

  stringArr.forEach((x) => {
    numbers += x;

    if (numbers.length === length) {
      const v = Number(numbers);
      if (v <= pareNumber) {
        answer.push(v);
      }
      numbers = numbers.slice(1);
    }
  });

  return answer.length;
}
