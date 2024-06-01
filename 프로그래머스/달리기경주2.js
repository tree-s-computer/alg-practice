const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  const playerPositions = {};
  const playersArray = [...players];

  players.forEach((player, index) => {
    playerPositions[player] = index;
  });

  callings.forEach((callingPlayer) => {
    const currentIndex = playerPositions[callingPlayer];
    if (currentIndex > 0) {
      const previousPlayer = playersArray[currentIndex - 1];

      playersArray[currentIndex - 1] = callingPlayer;
      playersArray[currentIndex] = previousPlayer;

      playerPositions[callingPlayer]--;
      playerPositions[previousPlayer]++;
    }
  });

  return playersArray;
}

console.log(solution(players, callings));
