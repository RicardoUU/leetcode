function arrayToTree(data, rootId = 0) {
  const result = [];
  const map = new Map();

  // 初始化一个 map，用于快速查找节点
  data.forEach(item => map.set(item.id, { ...item, children: [] }));

  // 构建树结构
  data.forEach(item => {
    const parentId = item.parentId;
    if (parentId === rootId) {
      result.push(map.get(item.id)); // 如果是根节点，直接加入结果集
    } else if (map.has(parentId)) {
      map.get(parentId).children.push(map.get(item.id)); // 否则加入父节点的 children
    }
  });

  return result;
}

const data = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: 3 },
];

const tree = arrayToTree(data);
console.log(JSON.stringify(tree, null, 2));