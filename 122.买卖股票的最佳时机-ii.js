/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 递增子序列
  // 思路: 遍历数组, 如果后一天的价格比前一天的价格高, 则买入
  // 1. 定义一个变量max用来记录最大利润, 初始值为0
  // 2. 遍历数组, 如果prices[i] > prices[i-1], 则max += prices[i] - prices[i-1]
  // 3. 返回max
  // 时间复杂度: O(n)
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};
// @lc code=end

