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
    return fn.apply(context, args.concat(newArgs))
  }
}

// new

function MyNew(fn, ...args) {
  const obj = Object.create(fn.prototype)
  const result = fn.apply(obj, args) // 将fn的this指向obj，执行fn
  return result instanceof Object ? result : obj // 如果fn返回了一个对象，那么new的结果就是这个对象,否则就是obj
}