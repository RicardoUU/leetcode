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
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let ans = '';

  for (let len = 0; len < n; len++) {
    for (let i = 0; i + len < n; i++) {
      const j = i + len;
      if (len === 0) {
        dp[i][j] = true;
      } else if (len === 1) {
        dp[i][j] = (s[i] === s[j]);
      } else {
        dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]);
      }
      if (dp[i][j] && len + 1 > ans.length) {
        ans = s.slice(i, j + 1);
      }
    }
  }

  return ans;
};
// @lc code=end

