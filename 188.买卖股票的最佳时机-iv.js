/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {

  // 递增子序列
  // 思路: 动态规划
  // 1. 定义一个二维数组dp, dp[i][j]表示第i天最多进行j次交易的最大利润
  // 2. 状态转移方程: dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-1] + prices[i] - prices[i-1])
  // 3. 初始值: dp[0][0] = 0, dp[0][1] = -prices[0]
  // 4. 时间复杂度: O(n*k)
  let n = prices.length;
  if (n === 0) return 0;
  let dp = new Array(n).fill(0).map(() => new Array(k * 2 + 1).fill(0));
  for (let i = 1; i <= k; i++) {
    dp[0][i * 2 - 1] = -prices[0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j * 2 - 1] = Math.max(dp[i - 1][j * 2 - 1], dp[i - 1][j * 2 - 2] - prices[i]);
      dp[i][j * 2] = Math.max(dp[i - 1][j * 2], dp[i - 1][j * 2 - 1] + prices[i]);
    }
  }
  return dp[n - 1][k * 2];
};

// test
console.log(maxProfit(2, [1,2,4,2,5,7,2,4,9,0])); // 2
// @lc code=end

