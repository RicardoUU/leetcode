/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  /**
   * 思路: 通过遍历字符串，将每个字符放到对应的行中，最后将每一行拼接起来
   * 1. 创建一个数组rows，长度为numRows，用于存放每一行的字符
   * 2. 遍历字符串s，将每个字符放到对应的行中
   * 3. 遍历rows，将每一行拼接起来
   * 4. 返回rows.join('')
   */
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill('');
  const n = 2 * numRows - 2; // 一个 Z 字的循环长度
  for (let i = 0; i < s.length; i++) {// 遍历字符串s
    const x = i % n;// x 为 i 对 n 取余的结果
    rows[Math.min(x, n - x)] += s[i];// 将每个字符放到对应的行中
  }
  return rows.join('');
};
// @lc code=end

