// 深度克隆

function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
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