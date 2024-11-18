/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  /**
   * 思路: 双指针
   * 1. 定义一个变量j用来记录非零元素的位置
   * 2. 遍历数组, 如果nums[i]不等于0, 则将nums[i]赋值给nums[j]
   * 3. 遍历结束后, 将j后的元素全部赋值为0
   * 4. 时间复杂度: O(n)
   */
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
// @lc code=end

