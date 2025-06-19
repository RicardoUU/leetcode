// fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']
// 这个函数的作用是将二维数组中的每个子数组的元素进行组合，返回一个新的数组，包含所有可能的组合结果。
function fn(arr) {
  return arr.reduce((acc, cur) => { // acc是累积的结果，cur是当前处理的子数组
    const res = [];
    console.log('acc', acc, 'cur', cur);
    acc.forEach(item => {
      cur.forEach(c => {
        console.log('item', item, 'c', c);
        res.push(item + c);
      });
    });
    return res;
  }, ['']);
}
// 测试
const result = fn([['a', 'b'], ['n', 'm'], ['0', '1']]);
console.log(result); // ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm1']
