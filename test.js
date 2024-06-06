// leetcode 两数相加
function addTwoNumbers(l1, l2) {
    let head = new ListNode(0);
    let cur = head;
    let carry = 0;
    while(l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(carry) {
        cur.next = new ListNode(carry);
    }
    return head.next;
}