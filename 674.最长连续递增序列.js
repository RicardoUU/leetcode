/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  /**
   * 思路: 滑动窗口
   * 1. 使用双指针left和right分别指向0和1
   * 2. 遍历数组，如果nums[right] > nums[right-1]，则right++
   * 3. 计算最大长度
   * 4. 时间复杂度: O(n)
   */
  if (!nums.length) return 0;
  let left = 0;
  let right = 1;
  let max = 1;
  while (right < nums.length) {
    if (nums[right] > nums[right - 1]) {
      right++;
    } else {
      max = Math.max(max, right - left);
      left = right;
      right++;
    }
  }
  max = Math.max(max, right - left);
  return max;
};
// @lc code=end

