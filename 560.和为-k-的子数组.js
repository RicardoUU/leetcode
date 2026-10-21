/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  /**
   * 思路: 前缀和 + 哈希表
   * 1. 定义变量preSum记录前缀和, map记录每个前缀和出现的次数
   * 2. 初始化map.set(0, 1), 表示前缀和为0出现过1次, 用于处理从下标0开始的子数组
   * 3. 遍历数组, preSum += nums[i]
   * 4. 若map中存在preSum - k, 说明存在以当前元素结尾且和为k的子数组, 累加其出现次数
   * 5. 将当前preSum的出现次数加1
   * 时间复杂度: O(n), 空间复杂度: O(n)
   */
  const map = new Map();
  map.set(0, 1);
  let preSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    if (map.has(preSum - k)) {
      count += map.get(preSum - k);
    }
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  return count;
};
// @lc code=end

