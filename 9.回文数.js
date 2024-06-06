/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 负数不是回文数
  if (x < 0) {
    return false;
  }
  let num = x;
  let res = 0;
  while (num) {
    res = res * 10 + (num % 10);
    // 取整
    num = ~~(num / 10);
  }
  return res === x;
};
// @lc code=end
