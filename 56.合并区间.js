/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 先按照区间起始位置排序
    // 然后逐个判断是否有重叠
    // 重叠：结果数组最后一个元素的右区间大于等于当前区间的左区间，更新结果数组最后一个元素的右区间

    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let i = 0;
    while (i < intervals.length) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        // 当前区间的右区间大于等于结果数组最后一个元素的右区间
        while (i < intervals.length - 1 && intervals[i + 1][0] <= right) {
            i++;
            right = Math.max(right, intervals[i][1]);
        }
        res.push([left, right]);
        i++;
    }
    return res;

};
// @lc code=end

