function bfs(root) {
  if (root === null) {
      return;
  }

  let queue = [root];

  while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value); // 访问节点

      if (node.left !== null) {
          queue.push(node.left); // 将左子节点加入队列
      }
      if (node.right !== null) {
          queue.push(node.right); // 将右子节点加入队列
      }
  }
}
