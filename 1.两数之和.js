/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * 解析: 哈希表
   * 1. 定义一个map用来存储数组元素的值和索引
   * 2. 遍历数组, 判断map中是否存在target-nums[i]的值
   * 3. 如果存在, 则返回map中target-nums[i]的索引和当前索引
   * 4. 如果不存在, 则将当前元素存入map中
   * 时间复杂度: O(n)
   */
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};
// @lc code=end
