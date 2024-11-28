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


// fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

function fn(arr) {
    let res = [];
    function dfs(index, str) {
        if (index === arr.length) {
            res.push(str);
            return;
        }
        for (let i = 0; i < arr[index].length; i++) {
            dfs(index + 1, str + arr[index][i]);
        }
    }
    dfs(0, '');
    return res;
}

console.log(fn([['a', 'b'], ['n', 'm'], ['0', '1']])) // ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']