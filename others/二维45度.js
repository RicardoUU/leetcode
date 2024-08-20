// 二维数组 45 度输出

/**
 * 思路:
 * 1. 从左下角到右上角遍历
 * 2. 每一条对角线上的元素都在同一条直线上
 * 3. 从左下角到右上角的对角线上的元素的和为相等
 * 4. 从左下角到右上角的对角线上的元素的和为 i + j
 * 5. 遍历所有对角线，将对角线上的元素放入数组中
 * 6. 返回数组
 */

function printMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let res = [];
  for (let i = 0; i < m + n - 1; i++) {
    let x = i < n ? 0 : i - n + 1; // x 为行坐标 i < n 时，x = 0，否则 x = i - n + 1
    let y = i < n ? i : n - 1;     // y 为列坐标 i < n 时，y = i，否则 y = n - 1
    let tmp = [];
    while (x < m && y >= 0) {
      tmp.push(matrix[x][y]);
      x++;
      y--;
    }
    res.push(tmp);
  }
  return res;
}

// test case
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(printMatrix(matrix)); // [[1],[2,4],[3,5,7],[6,8],[9]]