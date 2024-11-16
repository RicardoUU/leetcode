/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  /**
   * 思路: 栈
   * 1. 遍历字符串, 遇到左括号'('时, 将其索引入栈
   * 2. 遇到右括号')'时, 如果栈为空, 则将其索引入栈, 否则出栈
   * 3. 遍历结束后, 栈中剩余的索引即为需要移除的括号
   * 4. 时间复杂度: O(n)
   * // "))(("
   */

  let stack = [];
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i);
    } else if (arr[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        arr[i] = '';
      }
    }
  }
  while (stack.length) {
    arr[stack.pop()] = '';
  }
  return arr.join('');
  
};
// @lc code=end

