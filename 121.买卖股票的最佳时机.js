/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 遍历实现
  // 思路: 遍历数组, 记录最小值和最大利润
  // 1. 定义一个变量min用来记录最小值, 初始值为prices[0]
  // 2. 定义一个变量max用来记录最大利润, 初始值为0
  // 3. 遍历数组, 更新min和max
  // 4. 返回max
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
// @lc code=end

