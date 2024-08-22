/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // 方法一: 合并k个链表，可以转化为合并两个链表的问题
  // 两两合并，直到合并为一个链表
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  let res = lists[0];
  const mergeTwoLists = (list1, list2) => {
    let prehead = new ListNode(-1);
    let prev = prehead;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        prev.next = list1;
        list1 = list1.next;
      } else {
        prev.next = list2;
        list2 = list2.next;
      }
      prev = prev.next;
    }
    prev.next = list1 ? list1 : list2;
    return prehead.next;
  }
  for (let i = 1; i < lists.length; i++) {
    res = mergeTwoLists(res, lists[i]);
  }
  return res;



};
// @lc code=end

