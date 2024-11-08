function solution(participant, completion) {
  // 해시 맵을 사용하여 참가자 수를 카운팅
  const participantMap = {};
  participant.forEach((name) => {
    participantMap[name] = (participantMap[name] || 0) + 1;
  });

  // 완주자의 이름을 해시 맵에서 차감
  completion.forEach((name) => {
    participantMap[name] -= 1;
  });

  // 해시 맵을 순회하며 값이 0이 아닌 이름을 찾음
  for (const name in participantMap) {
    if (participantMap[name] > 0) {
      return name;
    }
  }
}
