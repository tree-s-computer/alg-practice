/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.
 */
const twoSum = function (numbers, target) {
  const obj = {};

  for (let i = 0; i < numbers.length; i++) {
    const x = target - numbers[i];
    if (obj.hasOwnProperty(x)) {
      return [obj[x], i];
    }
    obj[numbers[i]] = i;
  }

  return [];
};

// 함수를

const numbers = [2, 7, 11, 15];
const target = 9;

const b = twoSum(numbers, target);

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
