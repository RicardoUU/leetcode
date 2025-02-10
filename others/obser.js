
// 蚂蚁
// 实现监听对象path的变化，当对象的path属性发生变化时，触发回调函数

function observe(obj, path, callback) {
  let paths = path.split('.');
  let target = obj;
  for (let i = 0; i < paths.length - 1; i++) {
    target = target[paths[i]];
  }
  let key = paths[paths.length - 1];
  let value = target[key];
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      value = newValue;
      callback();
    }
  });
}


// proxy实现监听对象path的变化，当对象的path属性发生变化时，触发回调函数

function observe(obj, path, callback) {
  let paths = path.split('.');
  let target = obj;
  for (let i = 0; i < paths.length - 1; i++) {
    target = target[paths[i]]; //获取到path的上一级对象
  }
  let key = paths[paths.length - 1];
  let value = target[key]; //获取到path的值
  target[key] = new Proxy(value, {
    get() {
      return value;
    },
    set(newValue) {
      value = newValue;
      callback();
    }
  });
}