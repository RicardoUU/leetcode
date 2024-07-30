function dfsIterative(root) {
  if (root === null) {
      return;
  }

  let stack = [root];

  while (stack.length > 0) {
      let node = stack.pop();
      console.log(node.value); // 访问节点

      if (node.right !== null) {
          stack.push(node.right); // 先将右子节点入栈
      }
      if (node.left !== null) {
          stack.push(node.left); // 然后将左子节点入栈
      }
  }
}