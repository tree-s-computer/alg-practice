const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  const playerPosition = {}; //object로 등수 기록
  const playersArray = [...players]; //기록 참조

  players.forEach((player, idx) => {
    playerPosition[player] = idx;
  });

  callings.forEach((callingPlayer) => {
    //불린 사람
    const currentIdx = playerPosition[callingPlayer]; //몇등인지..?

    //달리는 배열 바꾸기
    playersArray[currentIdx - 1] = callingPlayer;
    playersArray[currentIdx] = previousPlayer;

    //점수판 마킹
    playerPosition[callingPlayer]--;
    playerPosition[previousPlayer]++;
  });

  return playersArray;
}

console.log(solution(players, callings));
