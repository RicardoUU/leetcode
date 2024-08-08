// 升序数组 [2,3,4,5],插入一个数字，返回应该插入的位置


// 二分查找
// 1. 初始化左右指针
// 2. 当左指针小于等于右指针时，计算中间位置
// 3. 如果中间位置的值等于目标值，返回中间位置
// 4. 如果中间位置的值小于目标值，左指针等于中间位置+1
// 5. 如果中间位置的值大于目标值，右指针等于中间位置-1
// 6. 返回左指针
// 7. 时间复杂度: O(logn)
function insert(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // >> 1 位运算符，相当于除以2, 不会有小数吗? 会有小数，但是会向下取整, 因为>>是右移运算符，会把小数部分去掉
    let mid = left + ((right - left) >> 1);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}