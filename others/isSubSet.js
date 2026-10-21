// 有序数组 A 和 B, 请写一个函数，判断 B 是否为 A 的子集

// 输入：A = [1,2,3,4], B=[2,2,4]

// 输出：true

function isSubset(A, B) {

  // 去重
  // A = Array.from(new Set(A)).sort((a, b) => a - b);
  // B = Array.from(new Set(B)).sort((a, b) => a - b);
  // if (B.length === 0) return true; // 空集是任何集合的子集
  // if (A.length < B.length) return false; // 如果A的长度小于B，则B不可能是A的子集


    let i = 0; // 指针 for A
    let j = 0; // 指针 for B
    
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            // A当前元素小于B当前元素，移动A指针
            i++;
        } else if (A[i] === B[j]) {
            // 元素匹配，移动两个指针
            i++;
            j++;
        } else {
            // A当前元素大于B当前元素，B不可能是子集
            return false;
        }
    }
    
    // 如果B的所有元素都被匹配了，则是子集
    return j === B.length;
}

// 测试用例
console.log(isSubset([1, 2, 3, 4], [2, 2, 4])); // false
console.log(isSubset([1, 2, 2, 3, 4], [2, 2, 4])); // true
console.log(isSubset([1, 2, 3, 4], [2, 3, 5])); // false
console.log(isSubset([1, 1, 1], [1, 1])); // true
console.log(isSubset([1, 2, 3], [])); // true (空集是任何集合的子集)

// test
