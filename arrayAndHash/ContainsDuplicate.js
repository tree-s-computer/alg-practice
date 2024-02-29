const containsDuplicate = function (nums) {
  const arr = {};

  nums.forEach((x) => {
    if (arr[x]) {
      return (arr[x] += 1);
    } else {
      return (arr[x] = 1);
    }
  });

  const newArr = Object.keys(arr).map((x) => arr[x]);

  return newArr.some((x) => x >= 2);
};

// https://leetcode.com/problems/contains-duplicate/description/
