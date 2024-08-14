/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // 1. 去除字符串两端的空格
  s = s.trim();
  // 2. 定义正则表达式 pattern，用于匹配字符串
  const pattern = /^[\+\-]?\d+/;
  // 3. 匹配字符串
  const match = pattern.exec(s);
  // 4. 如果匹配结果为 null，返回 0
  if (!match) return 0;
  // 5. 将匹配结果转换为数字
  let num = Number(match[0]);
  // 6. 处理边界情况
  const max = Math.pow(2, 31);
  const min = -max;
  if (num > max - 1) return max - 1;
  if (num < min) return min;
  return num;

};
// @lc code=end

