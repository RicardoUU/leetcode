/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  
      // //递归
      if (!root) return true;
      return isMirror(root.left, root.right);

      function isMirror(left, right) {
          if (!left && !right) return true;
          if (!left || !right) return false;
          return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
      }

      // 层次遍历
      // if (!root) return true;
      // let queue = [root.left, root.right];
      // while (queue.length) {
      //     let left = queue.shift();
      //     let right = queue.shift();
      //     if (!left && !right) continue; // 如果都为空，继续下一次循环
      //     if (!left || !right) return false; // 如果一个为空， 一个不为空，返回false
      //     if (left.val !== right.val) return false; // 如果值不相等，返回false
      //     queue.push(left.left, right.right, left.right, right.left); // 递归
      // }
      // return true;
};
// @lc code=end

