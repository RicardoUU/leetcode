// 有一个 random5（生成 1-5，每个随机数都 1/5 概率），用 random5 实现 random7（1-7，每个随机数都 1/7 概率）

function random5() {
  return Math.floor(Math.random() * 5) + 1; // Math.random() * 5 生成 0-4 的随机数，+1 生成 1-5 的随机数
}

// 1. 生成 1-25 的随机数
// 2. 如果随机数大于 21，则重新生成
// 3. 返回随机数除以 7 的余数加 1

function random7() {
  let num = 5 * (random5() - 1) + random5(); // 1-25
  while (num > 21) {
    num = 5 * (random5() - 1) + random5(); // random5() - 1 生成 0-4 的随机数
  }
  return num % 7 + 1; // 0-6 + 1 = 1-7
}