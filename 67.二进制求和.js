/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  /**
   * 思路: 逐位相加
   * 1. 从后往前遍历两个字符串, 逐位相加
   * 2. 用carry变量记录进位
   * 3. 时间复杂度: O(n)
   */
  let res = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i--]);
    }
    if (j >= 0) {
      sum += parseInt(b[j--]);
    }
    res = sum % 2 + res;
    carry = Math.floor(sum / 2);
  }
  return carry ? '1' + res : res;  
};
// @lc code=end

