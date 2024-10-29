// add(1)(2)(3)(4)
// add(1, 2)(3, 4)
// add(1, 2, 3, 4)

// function add() {
//   const args = Array.prototype.slice.call(arguments);
//   const fn = function() {
//     const newArgs = args.concat(Array.prototype.slice.call(arguments));
//     return add.apply(null, newArgs);
//   };
//   fn.toString = function() {
//     return args.reduce((a, b) => a + b);
//   };
//   return fn;
// }
function add(...args) {
  // 累加所有参数
  const sum = args.reduce((acc, cur) => acc + cur, 0);

  // 定义一个函数以接受更多参数
  function innerAdd(...innerArgs) {
    // 将新参数累加到当前和
    return add(sum, ...innerArgs);
  }

  // 定义一个隐式转换，以便最后返回结果
  innerAdd.toString = () => sum;
  innerAdd.valueOf = () => sum;
  // 定义一个隐式转换，以便最后返回结果
  innerAdd[Symbol.toPrimitive] = () => sum;

  return innerAdd;
}

// 测试用例
console.log(add(1)(2)(3)(4)); // 10
console.log(add(1, 2)(3, 4)); // 10
console.log(add(1, 2, 3, 4)); // 10
console.log(add(1)(2)(3)(4)); // 10
console.log(add(1, 2)(3, 4)); // 10
console.log(add(1, 2, 3, 4)); // 10

function curry(fn, ...args) {
  // 如果传入的参数个数大于等于原函数的参数个数，则直接执行原函数
  // 否则返回一个新函数，接收剩余的参数
  return args.length >= fn.length
    ? fn(...args)
    : (...newArgs) => curry(fn, ...args, ...newArgs);
}

// test cases
function add2(a, b, c, d) {
  return a + b + c + d;
}
const curriedAdd = curry(add2);
console.log(curriedAdd(1)(2)(3)(4)); // 10
console.log(curriedAdd(1, 2)(3, 4)); // 10
console.log(curriedAdd(1, 2, 3, 4, 5)); // 10
