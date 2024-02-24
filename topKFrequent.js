// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKFrequent = (nums, k) => {
  const obj = {};
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (obj[v]) {
      obj[v] += 1;
    } else {
      obj[v] = 1;
    }
  }

  const keyValueArray = Object.entries(obj);
  const sortedArray = keyValueArray.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    const x = Number(sortedArray[i][0]);
    answer.push(x);
  }

  return answer;
};

const nums = [1, 1, 1, 2, 2, 3, 3, 3];

const k = 2;
const a = topKFrequent(nums, k);
