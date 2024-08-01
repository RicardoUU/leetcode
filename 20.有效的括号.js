/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /**
   * 思路: 栈
   * 1. 遍历字符串，遇到左括号入栈，遇到右括号出栈
   * 2. 如果栈为空，返回true，否则返回false
   * 3. 时间复杂度: O(n)
   */
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (map[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

