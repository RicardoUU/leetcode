/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /**
   * 解析: 二分查找分割线
   * 1. 保证 nums1 是较短数组, 在其上二分
   * 2. 在 nums1 中找分割点 i, nums2 对应分割点 j = half - i
   *    使得左半部分元素个数 = (m + n + 1) / 2
   * 3. 调整 i, 直到 maxLeft1 <= minRight2 且 maxLeft2 <= minRight1
   * 4. 总长度为奇数取左半最大值, 偶数取左右边界均值
   * 时间复杂度: O(log(min(m, n)))
   */
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const half = Math.floor((m + n + 1) / 2);
  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = half - i;

    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    const minRight1 = i === m ? Infinity : nums1[i];
    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    const minRight2 = j === n ? Infinity : nums2[j];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 1) {
        return Math.max(maxLeft1, maxLeft2);
      }
      return (
        (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
      );
    }

    if (maxLeft1 > minRight2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};
// @lc code=end

