/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  // 方法一: 归并排序
  // 1. 找到链表中点，分为两个链表
  // 2. 合并两个有序链表
  // 3. 递归
  if (!head || !head.next) return head;
  let slow = head, fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(mid);
  let prehead = new ListNode(-1);
  let prev = prehead;
  while (left && right) {
    if (left.val < right.val) {
      prev.next = left;
      left = left.next;
    } else {
      prev.next = right;
      right = right.next;
    }
    prev = prev.next;
  }
  prev.next = left ? left : right;
  return prehead.next;
};
// @lc code=end

