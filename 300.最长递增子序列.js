/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  /**
   * 思路: 动态规划
   */
  // 1. 初始化 dp 数组，dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度
  const dp = new Array(nums.length).fill(1);
  // 2. 初始化结果 res
  let res = 0;
  // 3. 遍历数组 nums
  for (let i = 0; i < nums.length; i++) {
    // 4. 遍历 i 之前的元素
    for (let j = 0; j < i; j++) {
      // 5. 如果 nums[i] > nums[j]，则更新 dp[i]
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 6. 更新结果 res
    res = Math.max(res, dp[i]);
  }
  // 7. 返回结果 res
  return res;
};
// @lc code=end

