// 防抖函数
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