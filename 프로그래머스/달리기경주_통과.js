const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  const playerPositions = {};
  const playersArray = [...players];

  players.forEach((player, index) => {
    playerPositions[player] = index;
  }); //경기 기록

  callings.forEach((callingPlayer) => {
    const currentIndex = playerPositions[callingPlayer];
    if (currentIndex > 0) {
      //첫번째 제외
      const previousPlayer = playersArray[currentIndex - 1];

      playersArray[currentIndex - 1] = callingPlayer; //배열 바꾸고
      playersArray[currentIndex] = previousPlayer;

      playerPositions[callingPlayer]--; //포지션 위치 기록
      playerPositions[previousPlayer]++;
    }
  });

  // 요 약 : 객체에 등수 기록해두고 -> 선수 두명 찾고-> 배열 바꾸고 -> 등수판 업데이트

  return playersArray;
}

console.log(solution(players, callings));
