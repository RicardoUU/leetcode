
function add(a, b) {
  return a + b;
}

console.log(add.length); // 2 // 函数的 length 属性返回函数的形参个数

// 

function findIndex(arr, num) {  
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] === num) {  
      return i;  
    }  
  }  
  return -1;  
}  
console.log(findIndex([1, 2, 3, 4], 3)); // 2，因为3在数组中的索引是2，如果是var i = 0; i < arr.length - 1; i++，则返回-1,因为3在数组中的索引是2，但是数组的长度是3，所以i < arr.length - 1，i最大是2，所以返回-1