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

    function findIndex(arr, num) {  
        for (let i = 0; i < arr.length; i++) {  
          if (arr[i] === num) {  
            return i;  
          }  
        }  
        return -1;  
      }  
      console.log(findIndex([1, 2, 3, 4], 3));
// 请将以下版本号数组按照由小到大的顺序进行排序：[1.0.1, 1.1.0, 1.0.2, 2.0.0]

