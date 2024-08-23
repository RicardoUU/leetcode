/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  /**
   * 思路: 动态规划
   * 1. dp[i][j] 表示 s[i:j] 是否是回文串
   * 2. 状态转移方程: dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1])
   * 3. 时间复杂度: O(n^2)
   */
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let ans = '';

  for (let len = 0; len < n; len++) { // 枚举子串的长度
    for (let i = 0; i + len < n; i++) { // 枚举子串的起始位置
      const j = i + len; // 子串的结束位置
      if (len === 0) {
        dp[i][j] = true;
      } else if (len === 1) {
        dp[i][j] = (s[i] === s[j]);
      } else {
        dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]);
      }
      if (dp[i][j] && len + 1 > ans.length) { // 更新最长回文子串
        ans = s.slice(i, j + 1);
      }
    }
  }

  return ans;
};
// @lc code=end

