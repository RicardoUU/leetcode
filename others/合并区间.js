
// 输入：intervals = [[1,4],[4,5]]

// 输出：[[1,5]]

// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

function MyMerge(intervals) {

  const res = []

  // 先排序
  const newIntervals = intervals.sort((a,b)=> {
    return a[0] - b[0];
  })



  res.push(intervals[0]);
  for(let i=1; i< newIntervals.length; i++) {
    const lastItem = res[res.length-1];  // 最后一个
    const cur = newIntervals[i]
    if(lastItem[1] >= cur[0]) {
      res[res.length -1] = [lastItem[0], cur[1]]
    }else {
      res.push(cur);
    }
  }

  return res;
}
