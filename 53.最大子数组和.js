/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  /**
   * 思路: 动态规划
   * 1. 定义一个变量max用来记录最大子数组和, 初始值为nums[0]
   * 2. 遍历数组, 如果sum > 0, 则sum += nums[i], 否则sum = nums[i]
   * 3. 更新max = Math.max(max, sum)
   * 4. 返回max
   * 5. 时间复杂度: O(n)
   */
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    max = Math.max(max, sum);
  }
  return max;

  // let pre = 0, maxAns = nums[0];
  //   nums.forEach((x) => {
  //       pre = Math.max(pre + x, x);
  //       maxAns = Math.max(maxAns, pre);
  //   });
  //   return maxAns;
};
// @lc code=end

