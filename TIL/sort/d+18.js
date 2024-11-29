function solution1(citations) {
  // 내림차순 정렬
  citations.sort((a, b) => b - a);

  // [6, 5, 3, 1, 0] 이렇게 정렬된 상태
  for (let i = 0; i < citations.length; i++) {
    // 현재 인덱스(i)는 "이 숫자 이상인 논문의 개수"를 의미
    // citations[i]는 "현재 논문의 인용 횟수"

    // i번째 논문의 인용횟수가 현재 순번(i+1)보다 작아지는 순간
    // 그 이전 순번이 정답
    if (i >= citations[i]) {
      return i;
    }
  }

  // 모든 논문이 전체 논문 수보다 많이 인용된 경우
  return citations.length;
}
