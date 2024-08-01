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
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
// @lc code=end

