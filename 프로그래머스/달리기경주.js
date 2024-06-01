const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  const playersScore = {};

  players.forEach((player, i) => {
    playersScore[i] = player;
  }); //index 별로 score obj 생성하기

  for (let i = 0; i < callings.length; i++) {
    const callingPlayer = callings[i];
    const callingPlayerIdx = getKeyByValue(playersScore, callingPlayer);
    const firstPlayer = playersScore[callingPlayerIdx - 1];

    playersScore[callingPlayerIdx - 1] = callingPlayer;
    playersScore[callingPlayerIdx] = firstPlayer;
  }

  return (answer = Object.keys(playersScore).map((key) => {
    return playersScore[key];
  }));
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
console.log(solution(players, callings));
