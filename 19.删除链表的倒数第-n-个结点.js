/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /**
   * 思路: 快慢指针
   * 1. 创建一个哑结点 dummy，指向 head
   * 2. 创建两个指针 fast 和 slow，初始都指向 dummy
   * 3. fast 先向前移动 n+1 步
   * 4. fast 和 slow 同时向前移动，直到 fast.next 为 null
   * 5. 此时 slow 指向的结点就是要删除的结点
   * 6. 删除 slow.next 结点
   * 7. 返回 dummy.next
   * 8. 时间复杂度: O(n)
   */
  const dummy = new ListNode(0, head);

  let fast = dummy;
  let slow = dummy;
  // fast 先向前移动 n+1 步
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
// @lc code=end

