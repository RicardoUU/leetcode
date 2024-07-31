/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /**
   * 思路: 动态规划
   * 1. dp[i][j]表示s[i:j]是否是回文子串
   * 2. 如果s[i] === s[j]，且s[i+1:j-1]是回文子串，那么s[i:j]也是回文子串
   * 3. 时间复杂度: O(n^2)
   */
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let ans = 0;

  for (let len = 0; len < n; len++) { // len表示子串的长度
    for (let i = 0; i + len < n; i++) { // i表示子串的起始位置
      const j = i + len;  // j表示子串的结束位置
      if (len === 0) {
        dp[i][j] = true;
      } else if (len === 1) {
        dp[i][j] = (s[i] === s[j]);
      } else {
        dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]);
      }
      if (dp[i][j]) {
        ans++;
      }
    }
  }

  return ans;
};
// @lc code=end

