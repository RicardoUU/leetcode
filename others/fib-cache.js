// fibonacci with caching

function fibonacci(n) {
    var cache = []
    function fib (n) {
        if (n < 2) return n
        if (cache[n] != undefined) return cache[n]
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
    }
    return fib(n)
}
console.log(fibonacci(20)); // 6765