// 实现indexOf方法

function indexOf(arr, item) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
} 

// str indexof
function indexOf(str, item) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === item) {
      return i;
    }
  }

  return -1;
}


// test cases
console.log(indexOf([1, 2, 3, 4], 3)); // 2
