/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
   * 思路: 排序 + 双指针
   * 1. 先对数组进行排序
   * 2. 遍历数组，固定一个数nums[i]，然后使用双指针left和right分别指向i+1和n-1
   * 3. 如果nums[i] > 0，则三数之和一定大于0，结束循环
   * 4. 如果nums[i] === nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过
   * 5. 当nums[i] + nums[left] + nums[right] === 0时，记录结果
   * 6. 当nums[i] + nums[left] + nums[right] < 0时，left++
   * 7. 当nums[i] + nums[left] + nums[right] > 0时，right--
   * 8. 时间复杂度: O(n^2)
   */
  let res = [];
  const n = nums.length;
  if (n < 3) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break; // 如果当前数大于0，则三数之和一定大于0，结束循环
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 如果当前数与前一个数相同，则跳过
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // 计算三数之和
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]); // 如果三数之和为0，则记录结果
        while (left < right && nums[left] === nums[left + 1]) left++; // 如果左指针与下一个数相同，则跳过
        while (left < right && nums[right] === nums[right - 1]) right--; // 如果右指针与前一个数相同，则跳过
        left++;
        right--;
      } else if (sum < 0) {
        left++; // 如果三数之和小于0，则左指针右移
      } else {
        right--; // 如果三数之和大于0，则右指针左移
      }
    }
  }
  return res;
};
// @lc code=end

