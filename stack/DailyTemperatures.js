const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

const dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const currentTemperature = temperatures[i];

    // 스택이 비어있지 않고, 현재 온도가 스택의 가장 위의 온도보다 높을 때
    while (
      stack.length > 0 &&
      currentTemperature > temperatures[stack[stack.length - 1]]
    ) {
      const prevDay = stack.pop(); // 스택에서 이전 날짜를 꺼내옴
      const a = i - prevDay;

      result[prevDay] = i - prevDay; // 현재 날짜와 이전 날짜 간의 차이를 결과에 저장
    }

    stack.push(i); // 현재 날짜를 스택에 추가
  }

  return result;
};

const x = dailyTemperatures(temperatures);
console.log(x);

// https://leetcode.com/problems/daily-temperatures/description/
