//   [{a:1, b:2},{a:1},{a:1}, {a:1, b:{c:1}}, {b:{c:1}, a:1}]
//   => [{a:1, b:2}, {a:1}, {a:1, b:{c:1}}]
// 是数组去重,如果健值相同,则去重

function uniqueDeepArray(arr) {
  const map = new Map();
  
  arr.forEach(item => {
      // 对每个对象进行深度排序序列化
      const key = JSON.stringify(item, Object.keys(item).sort()); // 对key进行排序, 第二个
      
      if (!map.has(key)) {
          map.set(key, item);
      }
  });
  
  return Array.from(map.values());
}

// test
const arr = [{a:1, b:2},{a:1},{a:1}, {a:1, b:{c:1}}, {b:{c:1}, a:1}]
console.log(uniqueDeepArray(arr)) // [{a:1, b:2}, {a:1}, {a:1, b:{c:1}}]