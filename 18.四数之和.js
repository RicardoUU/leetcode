/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  /**
   * 思路: 排序 + 双指针
   * 1. 首先对数组 nums 进行排序
   * 2. 遍历数组 nums，固定第一个数 nums[i]
   * 3. 然后在 i 的右边区间内使用双指针 left 和 right，分别指向 i 的下一个数和数组的最后一个数
   * 4. 计算 sum = nums[i] + nums[left] + nums[right] + nums[j]
   * 5. 如果 sum === target，则将四个数加入结果数组 res
   * 6. 如果 sum > target，则 right--
   * 7. 如果 sum < target，则 left++
   * 8. 注意去重
   */
  const res = [];
  const len = nums.length;
  if (len < 4) return res;
  nums.sort((a, b) => a - b);
  // 比三数之和多一层循环, 相当于固定两个数
  for (let i = 0; i < len - 3; i++) { // len - 3 ,因为最后一个数是第四个数
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len - 2; j++) { // len - 2, 因为倒数第二个数是第三个数
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
};
// @lc code=end

