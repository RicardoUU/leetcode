

/**
 * 思路：
 * 1. 递归实现
 * 2. 固定第一个 将剩下的元素进行全排列处理
 * 3. 将第一个元素与依次与第i（1<i<=arr.length）个元素互换，将剩下的元素进行全排列处理；
 * 4. 递归结束条件：index == arr.length - 1
 * 5. 将结果存入result数组
 * 6. 时间复杂度: O(n!)
 */

class Permutation {
  constructor(arr) {
      this.arr = Array.from(arr);
      this.result = [];
      this.len = 0;
  }

  run(index) {
      if (index == this.arr.length - 1) {
        console.log('index:'+ index +','+ 'arr:' + this.arr);
          this.result.push(Array.from(this.arr));
          this.len++;
          return;
      }
      // 固定第一个 将剩下的元素进行全排列处理 
      // 将第一个元素与依次与第i（1<i<=arr.length）个元素互换，将剩下的元素进行全排列处理；
      for (let i = index; i < this.arr.length; i++) {
            console.log(i, index);
          [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]]; // 第一个和第i个换
          // console.log('1:'+this.arr)
          // console.log('index:'+ index +','+ 'i:'+ i + ',' + 'arr:' + this.arr)
          this.run(index + 1);
          [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]]; // 换回来
          // console.log('2:' + 'index:'+ index +','+ 'i:'+ i + ',' + 'arr:' + this.arr)

      }
  }

} 



const arr = [1,2,3];
const permuta = new Permutation(arr);

permuta.run(0);

console.log(permuta.result);
// console.log(permuta.arr);、

function permute(nums) {
// 递归实现， 交换元素
  const result = [];
  const len = nums.length;
  function run(index) {
      if (index == len - 1) {
          result.push(Array.from(nums));
          return;
      }
      for (let i = index; i < len; i++) {
          [nums[index], nums[i]] = [nums[i], nums[index]];
          run(index + 1);
          [nums[index], nums[i]] = [nums[i], nums[index]];
      }
  }
  run(0);
  return result;
}

// test
console.log(permute([1, 2, 3])); // [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 2