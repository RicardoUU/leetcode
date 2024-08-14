/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  /**
   * 思路: 递归 + 回溯
   */

  // 1. 定义一个映射表，用于存放数字和字母的映射关系
  const map = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };
  // 2. 如果输入为空字符串，则直接返回空数组
  if (!digits) return [];
  // 3. 初始化结果数组 res，用于存放最终的结果
  const res = [];
  // 4. 定义一个递归函数 dfs
  const dfs = (curStr, i) => {
    // 5. 递归终止条件
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    // 6. 获取当前数字对应的字母
    const letters = map[digits[i]];
    // 7. 遍历当前数字对应的字母
    for (const letter of letters) {
      // 8. 递归调用 dfs 函数
      dfs(curStr + letter, i + 1);
    }
  };
  // 9. 调用 dfs 函数
  dfs('', 0);
  // 10. 返回结果数组 res
  return res;
};
// @lc code=end

