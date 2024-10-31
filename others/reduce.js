const Myreduce = (arr, callback, initialValue) => {
  let acc = initialValue; // 初始值 acc是累加器
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}