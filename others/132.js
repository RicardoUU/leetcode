var find132pattern = function (nums) {
  /**
   * 思路: 单调栈(递减)
   * 1. 从后往前遍历
   * 2. 维护一个单调递减栈
   * 3. 如果当前元素小于栈顶元素，则返回true
   * 4. 时间复杂度: O(n)
   * 例子: [3, 5, 4, 2]
   * 1. 从后往前遍历
   * 
   * 
   */
  let n = nums.length;
  let stack = [];
  let k = -Infinity; // 132 模式中的 2
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < k) { // 保证栈顶元素最小，即保证栈顶元素是 3
      console.log(nums[i], k);
      return true;
    }
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      k = Math.max(k, stack.pop());
    }
    stack.push(nums[i]); //
    console.log(stack, k);
  }
  return false;
  
};

// test case

const nums = [1,2,3,7,4,6,7,8,9,10];
console.log(find132pattern(nums)); // true