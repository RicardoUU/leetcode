// 深度克隆

function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
 // map、set、weakmap、weakset等类型需要特殊处理
  if (obj instanceof Map) {
    const newMap = new Map();
    obj.forEach((value, key) => {
      newMap.set(key, deepClone(value));
    });
    return newMap;
  }
  if (obj instanceof Set) {
    const newSet = new Set();
    obj.forEach(value => {
      newSet.add(deepClone(value));
    });
    return newSet;
  }
  if (obj instanceof WeakMap) {
    const newWeakMap = new WeakMap();
    obj.forEach((value, key) => {
      newWeakMap.set(key, deepClone(value));
    });
    return newWeakMap;
  }
  if (obj instanceof WeakSet) {
    const newWeakSet = new WeakSet();
    obj.forEach(value => {
      newWeakSet.add(deepClone(value));
    });
    return newWeakSet;
  }
  


  let newObj = new obj.constructor(); // 保持继承链
  for (let key in obj) { // 遍历obj的自有属性,数组和对象
    if (obj.hasOwnProperty(key)) { // 只复制自有属性
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

// test
let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3]
  
};
let obj2 = deepClone(obj);
obj2.b.c = 3;
obj2.d.push(4);
console.log(obj); // { a: 1, b: { c: 2 }, d: [ 1, 2, 3 ] }
console.log(obj2); // { a: 1, b: { c: 3 }, d: [ 1, 2, 3, 4 ] }