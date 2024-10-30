function solution(s) {
  let answer = 0;
  let first = 0;
  let second = 0;
  let x = s[0];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (current === x) {
      first++;
    } else {
      second++;
    }

    if (first === second) {
      answer++;

      if (i + 1 < s.length) {
        x = s[i + 1];
      }
      first = 0;
      second = 0;
    }
  }

  if (first !== 0 || second !== 0) {
    answer++;
  }

  return answer;
}
