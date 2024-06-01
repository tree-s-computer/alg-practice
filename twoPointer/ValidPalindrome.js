/**
 * @param {string} s
 * @return {boolean}
 */

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = function (s) {
  const filteredStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return filteredStr === filteredStr.split("").reverse().join("");
};

const s = "A man, a plan, a canal: Panama";
const x = isPalindrome(s);

// https://leetcode.com/problems/valid-palindrome/description/
