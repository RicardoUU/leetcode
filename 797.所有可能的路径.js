/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  /**
   * 思路: DFS
   * 1. 使用DFS遍历图，找到所有从0到N-1的路径
   * 2. 时间复杂度: O(2^n)
   */
  const res = [];
  const n = graph.length;
  const dfs = (node, path) => {
    if (node === n - 1) {
      res.push([...path, n - 1]);
      return;
    }
    for (const next of graph[node]) {
      dfs(next, [...path, node]);
    }
  };
  dfs(0, []);
  return res;
};
// @lc code=end

