/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const filteredStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  return filteredStr === filteredStr.split("").reverse().join("");
};

const s = "A man, a plan, a canal: Panama";
const x = isPalindrome(s);
