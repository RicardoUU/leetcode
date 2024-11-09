// 实现call

function MyCall(context, ...args) {
  context = context || window
  const fn = Symbol() // 为了避免fn这个属性被覆盖，所以使用Symbol
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// 实现apply

function MyApply(context, args) {
  context = context || window
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// 实现bind

function MyBind(context, ...args) {
  const fn = this
  return function (...newArgs) {
    // 如果是new的话，this指向实例
    if (new.target) {// new.target是es6的语法，表示new命令作用的构造函数,es5可以使用this instanceof fn
      return new fn(...args, ...newArgs)
    }
    return fn.apply(context, args.concat(newArgs))
  }
}

// new的实现
/**
 * 1. 创建一个新对象
 * 2. 将新对象的原型指向构造函数的prototype
 * 3. 将构造函数的this指向新对象，并执行构造函数
 * 4. 如果构造函数返回了一个对象，那么new的结果就是这个对象,否则就是新对象
 * 
 */
function myNew(constructor, ...args) {
  // 1. 创建一个新的空对象，并将其原型链接到构造函数的 prototype 上
  const obj = Object.create(constructor.prototype);
  // 2. 执行构造函数，将 `this` 绑定到新对象上
  const result = constructor.apply(obj, args);
  // 3. 返回构造函数返回的对象（如果是对象类型），否则返回新对象
  return (typeof result === 'object' && result !== null) ? result : obj;
}