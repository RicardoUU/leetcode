/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  /**
   * 思路: 层序遍历
   * 1. 使用队列queue存储节点
   * 2. 遍历队列，将节点的值存入level数组
   * 3. 将节点的子节点存入队列
   * 4. 时间复杂度: O(n)
   * 
   */
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      queue.push(...node.children);
    }
    res.push(level);
  }
  return res;

};
// @lc code=end

