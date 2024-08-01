/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 思路:
  // 1. 通过取余和取整的方式，将数字的每一位取出来
  // 2. 将数字反转
  // 3. 注意反转后的数字是否溢出
  // 4. 时间复杂度: O(log(x))
  let rev = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);      // ~~是取整运算符，相当于Math.floor
    rev = rev * 10 + digit;
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return rev;
};
// @lc code=end
