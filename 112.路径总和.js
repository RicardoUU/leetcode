/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  /**
   * 思路: DFS
   * 1. 递归遍历二叉树
   * 2. 每次减去当前节点的值
   * 3. 判断是否是叶子节点，且当前节点的值等于targetSum
   * 4. 时间复杂度: O(n)
   */
  if (!root) return false;
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
// @lc code=end

