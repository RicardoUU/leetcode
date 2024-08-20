// 实现call

function MyCall(context, ...args) {
  context = context || window
  const fn = Symbol()
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