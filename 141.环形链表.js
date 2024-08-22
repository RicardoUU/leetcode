/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 方法一: 快慢指针
  // 快指针一次走两步，慢指针一次走一步
  // 如果有环，快慢指针一定会相遇
  // if (!head || !head.next) return false;
  // let slow = head, fast = head.next;
  // while (slow !== fast) {
  //   if (!fast || !fast.next) return false;
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }
  // return true;

  // 方法二: 哈希表
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true);
    head = head.next;
  }
  return false;
};
// @lc code=end

