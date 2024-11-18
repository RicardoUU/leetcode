/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  /**
   * 思路: 回溯算法
   * 1. 定义一个数组path用来存放路径
   * 2. 定义一个数组used用来存放已经使用过的元素
   * 3. 定义一个结果数组res
   * 4. 定义一个回溯函数backtrack
   * 5. 回溯函数backtrack的参数为path, used
   * 6. 如果path的长度等于nums的长度, 则将path加入res
   * 7. 遍历nums, 如果used[i]为true, 则跳过
   * 8. 将nums[i]加入path, used[i]置为true
   * 9. 递归调用backtrack
   * 10. 将path最后一个元素弹出, used[i]置为false
   * 11. 返回res
   * 12. 时间复杂度: O(n!)
   */
  let path = [];
  let used = new Array(nums.length).fill(false);
  let res = [];
  backtrack(path, used);
  return res;

  function backtrack(path, used) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }
};
// @lc code=end

