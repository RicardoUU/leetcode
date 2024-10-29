// 请将以下版本号数组按照由小到大的顺序进行排序：[1.0.1, 1.1.0, 1.0.2, 2.0.0]

function sortVersion(arr) {
  return arr.sort((a, b) => {
    const arr1 = a.split('.').map(Number);
    const arr2 = b.split('.').map(Number);
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i] - arr2[i];
      }
      return 0;
    }
  });
}

console.log(sortVersion(['1.0.1', '1.1.0', '1.0.2', '2.0.0'])); // ["1.0.1", "1.0.2", "1.1.0", "2.0.0"]