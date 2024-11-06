function solution(nums) {
  const countLength = nums.length / 2;
  const uniqueArray = [...new Set(nums)];
  const uniqueCount = uniqueArray.length;

  if (uniqueCount < countLength) return uniqueCount;
  return countLength;
}
