// 判断回文字符串
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // 先转小写, 再去掉非字母数字字符
  return str === str.split('').reverse().join('');
}

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // 先转小写, 再去掉非字母数字字符
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}