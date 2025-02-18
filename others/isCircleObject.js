// 判断对象是否存在循环引用

function isCircleObject(obj) {
  //方法一
  // try {
  //   JSON.stringify(obj);
  //   return false;
  // } catch (e) {
  //   return true;
  // }

  //方法二
  const set = new Set();
  let flag = false;
  // 检查对象是否存在循环引用
  function check(obj) { 
    if (typeof obj === 'object' && obj !== null) {
      if (set.has(obj)) {
        flag = true;
        return;
      }
      set.add(obj);
      for (let key in obj) {
        check(obj[key]);
      }
    }
  }
  check(obj);
  return flag;

}
