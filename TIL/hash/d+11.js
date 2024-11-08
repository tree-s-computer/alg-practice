function solution(participant, completion) {
  const newList = [...participant];

  completion.forEach((el) => {
    if (newList.includes(el)) {
      //완주자에 참가자가 있다면 ?
      const idx = newList.indexOf(el);
      newList.splice(idx, 1); // 배열에서 제거
    }
  });

  return newList[0];
} // 시간 초과
