// 扁平化数组
function flatArray(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatArray(cur) : cur);
  }, []);
}
// way 2 , 使用栈实现
// function flatArray(arr) {
//   const stack = [...arr];
//   const res = [];
//   while (stack.length) {
//     const cur = stack.pop();
//     if (Array.isArray(cur)) {
//       stack.push(...cur);
//     } else {
//       res.push(cur);
//     }
//   }
//   return res.reverse();
// }

// test cases
console.log(flatArray([1, [2, [3, [4, 5]]], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flatArray([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(flatArray([1, [2, [3, [4, 5]]], 6, [7, 8, 9]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flatArray([1, [2, [3, [4, 5]]], 6, [7, 8, 9], 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
