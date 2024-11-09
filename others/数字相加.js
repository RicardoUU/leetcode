// 数字（字符串）模拟相加

function add(a, b) {
  a = a.toString();
  b = b.toString();
  let res = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    const sum = (+a[i] || 0) + (+b[j] || 0) + carry;  // +符号可以将字符串转为数字
    res = (sum % 10) + res;
    carry = sum >= 10 ? 1 : 0;
    i--;
    j--;
  }
  return carry ? '1' + res : res;
}

// test
console.log(add(1, 2)); // '3'