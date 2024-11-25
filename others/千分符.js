// 数字加上千分符，考虑小数
// 1234567890.12345 => 1,234,567,890.12345

//1. 正则
function formatNumber(num) {
  let [integer, decimal] = String(num).split('.');
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimal ? `${integer}.${decimal}` : integer;
}

// 2. toLocaleString
function formatNumber2(num) {
  let [integer, decimal] = String(num).split('.');
  integer = (+integer).toLocaleString();
  return decimal ? `${integer}.${decimal}` : integer;
}

// 3. split
function formatNumber3(num) {
  let [integer, decimal] = String(num).split('.');
  integer = integer.split('').reverse().reduce((prev, next, index) => {
    return (index % 3 ? next : next + ',') + prev; // 从后往前，每三位加一个逗号
  });
  return decimal ? `${integer}.${decimal}` : integer;
}



// test
console.log(formatNumber(1234567890.12345)); // 1,234,567,890.12345
console.log(formatNumber2(1234567890.12345)); // 1,234,567,890.12345
console.log(formatNumber3(1234567890.12345)); // 1,234,567,890.12345