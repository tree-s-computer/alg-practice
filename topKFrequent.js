// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKFrequent = (nums, k) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (obj[v]) {
      obj[v] += 1;
    } else {
      obj[v] = 1;
    }
  }

  const sortedArray = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  //[ [ '1', 3 ], [ '2', 2 ], [ '3', 3 ] ]
  // 0:숫자  1:몇개가 존재하는지
  // [1] 번째 인덱스 () 순서대로 정렬.

  const answer = sortedArray.slice(0, k).map(([num, _]) => Number(num));
  return answer;
};

const nums = [1, 1, 1, 2, 2, 3, 3, 3];

const k = 2;
const a = topKFrequent(nums, k);
