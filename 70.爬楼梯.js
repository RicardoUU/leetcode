/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  /**
   * 思路: 动态规划
   * 1. 定义一个数组dp, dp[i]表示爬到第i级楼梯的方法数
   * 2. 状态转移方程: dp[i] = dp[i - 1] + dp[i - 2]
   * 3. 初始值: dp[0] = 1, dp[1] = 1
   * 4. 时间复杂度: O(n)
   */
  let dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end

