// 按照版本号由小到大排序

// 样例输入：versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// 输出：['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']

function versionSoft(versions) {
  return versions.sort((a, b) => {
    let arr1 = a.split('.');
    let arr2 = b.split('.');
    let len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
      let num1 = arr1[i] ? parseInt(arr1[i]) : 0;
      let num2 = arr2[i] ? parseInt(arr2[i]) : 0;
      if (num1 !== num2) {
        return num1 - num2;
      }
    }
    return 0;
  });
}

// test cases
console.log(versionSoft(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'])); 