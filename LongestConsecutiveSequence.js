// Given an unsorted array of integers nums,
// return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

const longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  const x = [...new Set(nums)].sort((a, b) => a - b);
  const answer = [];

  let cnt = 1;

  x.forEach((v, i) => {
    if (v + 1 === x[i + 1]) {
      cnt += 1;
    } else {
      answer.push(cnt);
      cnt = 1;
    }
  });

  return Math.max(...answer);
};

const nums = [1, 2, 0, 1];
const x = longestConsecutive(nums);
console.log(x);

// https://leetcode.com/problems/longest-consecutive-sequence/description/
