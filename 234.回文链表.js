/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 思路:
  // 1. 将链表的值存入数组中
  // 2. 使用双指针判断数组是否是回文数组
  // 3. 时间复杂度: O(n)
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
