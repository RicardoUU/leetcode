// [['A','B'],['A','C'],['B','D'],['D','A']]，每个子数组表示一个路径的起点和终点。判断是否有环，并输出路径

function findCycle(paths) {

  /**
   * 思路：构建图的邻接表，然后使用 DFS 检测环
   * 1. 构建图的邻接表
   * 2. 使用 DFS 检测环
   * 3. 如果找到环，构建环的路径
   * 4. 时间复杂度：O(n)
   */
  // 构建图的邻接表
  const graph = {};
  for (const [start, end] of paths) {
      if (!graph[start]) graph[start] = [];
      graph[start].push(end);
  }
  console.log(graph);

  // 访问状态
  const visited = new Set();
  const recStack = new Set();
  const path = [];

  // DFS 检测环
  function dfs(node) {
      if (recStack.has(node)) {
          // 找到环，构建环的路径
          const cyclePath = [];
          let inCycle = false;
          for (const n of path) {
              if (n === node) inCycle = true;
              if (inCycle) cyclePath.push(n);
          }
          cyclePath.push(node);
          return cyclePath;
      }

      if (visited.has(node)) return null;

      // 标记为访问过
      visited.add(node);
      recStack.add(node);
      path.push(node);

      for (const neighbor of (graph[node] || [])) {
          const result = dfs(neighbor);
          if (result) return result;
      }

      // 回溯
      path.pop();
      recStack.delete(node);
      return null;
  }

  // 检测每个节点
  for (const node in graph) {
      const cycle = dfs(node);
      if (cycle) return cycle;
  }

  return null; // 没有找到环
}

// 测试用例
const paths = [['A', 'B'], ['A', 'C'], ['B', 'D'], ['D', 'A']];
const cycle = findCycle(paths);
console.log('Cycle found:', cycle);