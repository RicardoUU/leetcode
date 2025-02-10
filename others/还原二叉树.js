// 蚂蚁

function buildTree(inorder, postorder) {
  const inorderMap = new Map();
  
  // 构建中序遍历值到索引的映射
  inorder.forEach((val, idx) => {
      inorderMap.set(val, idx);
  });

  function helper(inStart, inEnd, postStart, postEnd) {
      if (inStart > inEnd || postStart > postEnd) return null;  

      const rootValue = postorder[postEnd];
      const root = new TreeNode(rootValue);
      const rootIndex = inorderMap.get(rootValue);

      const leftSize = rootIndex - inStart;

      root.left = helper(inStart, rootIndex - 1, postStart, postStart + leftSize - 1); // 左子树的区间,postStart + leftSize - 1是左子树的最后一个节点
      root.right = helper(rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1); // 右子树的区间， postStart + leftSize是右子树的第一个节点

      return root;
  }

  return helper(0, inorder.length - 1, 0, postorder.length - 1);
}

//test
/*
    3
   / \
  9  20
    /  \
   15   7
*/

const inorder = [9,3,15,20,7];
const postorder = [9,15,7,20,3];
console.log(buildTree(inorder, postorder));