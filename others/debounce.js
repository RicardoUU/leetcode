// 防抖函数
// 应用： 输入框输入时，等待用户停止输入一段时间后再执行某个操作
// 例如：搜索建议、表单验证等场景
function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // fn.apply(this, arguments);
      // this指向的是调用debounce返回的函数
      fn.apply(this, args);
    }, wait);
  };
}
// 节流
// 应用： 限制某个操作在一定时间内只能执行一次
// 例如：滚动事件、窗口大小调整等场景
// 注意：节流和防抖的区别在于，节流是限制函数执行的频率，而防抖是延迟函数执行直到用户停止操作
function throttle(fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        // fn.apply(this, arguments);
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}