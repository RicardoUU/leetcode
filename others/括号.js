// 括号匹配如果括号匹配错误输出error，匹配成功输出所有在()中的内容。输入：((2+3)+(3*4))+2

function match(str) {
  let stack = [];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      if (stack.length) {
        result.push(str.slice(stack.pop() + 1, i));
      } else {
        return 'error';
      }
    }
  }
  return result;
}

//test
console.log(match('((2+3)+(3*4))+2')); // [ '2+3', '3*4' ]