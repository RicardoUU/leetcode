// 01背包

function knapsack(m, n, w, v) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        for (let j = n; j >= w[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]);
        }
    }
    return dp[n];
}

// test
console.log(knapsack(4, 5, [0, 1, 2, 3, 4], [0, 2, 3, 4, 5])); // 7