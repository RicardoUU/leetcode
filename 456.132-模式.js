/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132 模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  /**
   * 思路: 单调栈(递减)
   * 1. 从后往前遍历
   * 2. 维护一个单调递减栈
   * 3. 如果当前元素小于栈顶元素，则返回true
   * 4. 时间复杂度: O(n)
   * 例子: [3, 5, 4, 2]
   * 1. 从后往前遍历
   * 
   * 
   */
  let n = nums.length;
  let stack = [];
  let k = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < k) {
      return true;
    }
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      k = Math.max(k, stack.pop());
    }
    stack.push(nums[i]);
  }
  return false;
};
// @lc code=end

