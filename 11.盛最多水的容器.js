/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  /**
   * 解析: 双指针
   * 1. 定义两个指针i,j分别指向数组的头和尾
   * 2. 计算当前容器的容量, 并与之前的最大容量进行比较
   * 3. 移动高度较小的指针
   * 4. 返回最大容量
   * 时间复杂度: O(n)
   */

  let res = 0;
  let i = 0, j = height.length - 1;
  while (i < j) {
    let h = Math.min(height[i], height[j]);
    res = Math.max(res, h * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return res;
};
// @lc code=end

