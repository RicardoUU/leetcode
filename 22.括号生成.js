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
   * 2. 递归过程中, 保证左括号的数量大于等于右括号的数量
   * 3. 时间复杂度: O(2^n)
   */
  const res = [];
  const dfs = (l, r, str) => {
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

