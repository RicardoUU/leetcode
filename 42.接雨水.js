/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  /**
   * 方法二：动态规划
   * 1. 用两个数组leftMax和rightMax分别存储每个位置左边和右边的最大高度
   *    leftMax[i] = max(leftMax[i-1], height[i])
   *    rightMax[i] = max(rightMax[i+1], height[i])
   * 2. 遍历每个位置，计算每个位置的雨水量
   *    res += min(leftMax[i], rightMax[i]) - height[i]
   * 3. 时间复杂度：O(n)
   */
  let n = height.length;
  if (n == 0) return 0;
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  rightMax[n - 1] = height[n - 1];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};
// @lc code=end

