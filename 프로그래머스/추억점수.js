const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

function solution(name, yearning, photo) {
  const answer = [];
  const score = {};

  name.forEach((x, i) => (score[x] = yearning[i]));
  photo.forEach((list) => {
    let num = 0;
    list.forEach((v) => {
      if (score.hasOwnProperty(v)) {
        num += score[v];
      }
    });
    answer.push(num);
    num = 0;
  });

  return answer;
}

console.log(solution(name, yearning, photo));
