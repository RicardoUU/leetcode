/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (s) => {
  /**
   * 解析: 滑动窗口
   * 1. 定义一个map用来存储字符的索引
   * 2. 定义两个指针i,j, i指向子串的起始位置, j指向子串的结束位置
   * 3. 遍历字符串, 如果map中存在当前字符, 则将i指向map中的索引+1
   * 4. 计算当前子串的长度, 并与之前的最大长度进行比较
   * 5. 将当前字符的索引存入map中
   * 6. 返回最大长度
   * 时间复杂度: O(n)
   */

  let len = s.length;
  let res = 0;
  let map = new Map();
  for (let i = 0, j = 0; j < len; j++) { // j为右指针
    if (map.has(s[j])) { // 如果map中存在当前字符
      i = Math.max(map.get(s[j]), i); // i为左指针
    }
    res = Math.max(res, j - i + 1); // 计算最大长度
    map.set(s[j], j + 1);
  }
  return res;
};
// @lc code=end
