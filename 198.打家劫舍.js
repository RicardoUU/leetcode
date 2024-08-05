/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /**
   * 思路: 动态规划
   * 1. dp[i] 表示前i个房屋能偷到的最大金额
   * 2. 状态转移方程: dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]) , 表示偷或不偷第i个房屋
   * 3. 偷第i个房屋: dp[i] = dp[i-2] + nums[i-1]
   * 4. 不偷第i个房屋: dp[i] = dp[i-1]
   * 5. 时间复杂度: O(n)
   */
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  const dp = new Array(n + 1).fill(0);
  dp[1] = nums[0];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[n];
};
// @lc code=end

