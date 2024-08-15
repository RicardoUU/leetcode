/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  /**
   * 思路: 递归
   * 1. 递归交换 head 和 head.next
   * 2. 交换后 head.next 指向交换后的 head
   * 3. 返回交换后的 head
   * 4. 时间复杂度: O(n)
   */
  if (!head || !head.next) return head;
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};
// var swapPairs = function (head) {
//   let ret = new ListNode(0, head), temp = ret;
//   while (temp.next && temp.next.next) {
//     let cur = temp.next.next, pre = temp.next;
//     pre.next = cur.next;
//     cur.next = pre;
//     temp.next = cur;
//     temp = pre;
//   }
//   return ret.next;
// };
// @lc code=end

