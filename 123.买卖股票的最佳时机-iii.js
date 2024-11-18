/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /**
   * 思路: 动态规划
   * 1. 定义4个变量, buy1, sell1, buy2, sell2
   * 2. buy1: 第一次买入的最大利润, sell1: 第一次卖出的最大利润
   * 3. buy2: 第二次买入的最大利润, sell2: 第二次卖出的最大利润
   * 4. 时间复杂度: O(n)
   */
  let buy1 = -prices[0], sell1 = 0, buy2 = -prices[0], sell2 = 0;
  for (let i = 1; i < prices.length; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};
// @lc code=end

