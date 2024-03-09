// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

const dailyTemperatures = function (temperatures) {
  const minStack = [];

  temperatures.forEach((tem, idx) => {
    let count = 0;
    console.log("tem" + tem);
    for (let i = idx + 1; i < temperatures.length; i++) {
      const afeterNum = temperatures[i];

      if (idx === temperatures.length - 1) {
        count = 0;
        break;
      }

      if (tem < afeterNum) {
        count += 1;
        break;
      }

      if (tem > afeterNum && idx + 1 === temperatures.length - 1) {
        count = 0;
        break;
      }
      count += 1;
    }

    minStack.push(count);
  });

  return minStack;
};

const x = dailyTemperatures(temperatures);
console.log(x);

// https://leetcode.com/problems/daily-temperatures/description/
