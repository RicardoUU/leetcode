// 实现一个 compose 函数

function compose(...funcs) {
  return function (x) {
    return funcs.reduceRight((acc, cur) => cur(acc), x); // reduceRight 从右向左执行
  }
}

const add = x => x + 1;
const square = x => x * x;
const addThenSquare = compose(square, add);
console.log(addThenSquare(2)); // 9