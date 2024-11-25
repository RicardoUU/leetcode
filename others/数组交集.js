// 数组交集
// const arr0 = [1, 3, 2, 2, 4]
// const arr0 = [3, 5, 2, 2, 10]

// // result
// [3, 2, 2]

function intersection(arr1, arr2) {
  const map = {};
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    map[arr1[i]] = (map[arr1[i]] || 0) + 1; // 记录arr1中每个元素出现的次数
  }
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      res.push(arr2[i]);
      map[arr2[i]]--;
    }
  }
  return res;
}

// test
console.log(intersection([1, 3, 2, 2, 4], [3, 5, 2, 2, 10])); // [3, 2, 2]

