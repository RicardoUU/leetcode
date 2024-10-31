// 快排, es6实现

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // 基本情况：如果数组为空或只有一个元素，直接返回
  }

  // 选择一个枢轴元素（这里选择数组的中间元素）
  const pivot = arr[Math.floor(arr.length / 2)];

  // 分区操作
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue; // 跳过枢轴元素本身

    if (arr[i] < pivot) {
      left.push(arr[i]); // 左边部分存放小于枢轴的元素
    } else {
      right.push(arr[i]); // 右边部分存放大于或等于枢轴的元素
    }
  }

  // 递归地对左右两个部分进行快速排序，并将结果合并
  return [...quickSort(left), pivot, ...quickSort(right)];
}


// 归并
function mergeSort(arr) {
  // 基本情况：如果数组长度小于或等于1，直接返回数组
  if (arr.length <= 1) {
    return arr;
  }

  // 将数组分成两半
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // 递归地对左右两边进行归并排序
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  // 当左边和右边都有元素时进行合并
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()); // 左边元素较小，取出放入结果数组
    } else {
      result.push(right.shift()); // 右边元素较小或相等，取出放入结果数组
    }
  }

  // 当一边数组为空时，将另一边剩下的元素全部加入结果数组
  return [...result, ...left, ...right];// 这里的...是展开运算符，用于将一个数组转为用逗号分隔的参数序列
}
