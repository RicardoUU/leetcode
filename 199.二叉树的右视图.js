/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  /**
   * 思路: BFS
   * 1. 每次取每一层的最后一个节点
   * 2. 遍历每一层的节点，将下一层的节点放入队列
   * 3. 直到队列为空
   * 4. 返回结果数组
   * 时间复杂度: O(n)
   */
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      // 只取每一层的最后一个节点
      if (i === len - 1) res.push(node.val);
    }
  }
  return res;
};
// @lc code=end
