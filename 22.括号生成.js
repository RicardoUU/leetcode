/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
   * 思路: 回溯法
   * 1. 递归生成所有可能的组合
   * 2. 左括号数量小于n时，可以添加左括号
   * 3. 右括号数量小于左括号数量时，可以添加右括号
   * 4. l==r==n时，表示生成了一个合法的括号组合
   * 5. 时间复杂度: O(2^n)
   */
  const res = [];
  const dfs = (l, r, str) => { // l: 左括号数量, r: 右括号数量, str: 当前字符串
    if (l === n && r === n) {
      res.push(str);
      return;
    }
    if (l < n) {
      dfs(l + 1, r, str + '(');
    }
    if (r < l) {
      dfs(l, r + 1, str + ')');
    }
  };
  dfs(0, 0, '');
  return res;
};
// @lc code=end

