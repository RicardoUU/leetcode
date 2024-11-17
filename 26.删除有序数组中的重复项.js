/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  /**
   * 思路: 双指针
   * 1. 定义一个变量j用来记录不重复元素的位置
   * 2. 遍历数组, 如果nums[i]不等于nums[j], 则将nums[i]赋值给nums[j+1]
   * 3. 返回j+1
   * 4. 时间复杂度: O(n)
   */
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i];
    }
  }
  console.log(nums);
  return j + 1;
};
// test
console.log(removeDuplicates([1, 1, 2])); // 2
// @lc code=end

