// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];

    if (obj.hasOwnProperty(num)) {
      return [obj[num], i];
    }

    obj[nums[i]] = i;
  }
};

const nums = [3, 2, 3];
const target = 6;
const a = twoSum(nums, target);
console.log(a);
