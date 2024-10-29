// 最近最少使用
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;  // 如果缓存中没有这个 key，返回 -1
    }
    // 先删除这个 key，然后重新插入到末尾（表示最近使用过）
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // 如果 key 已经存在，删除它（这样可以重新插入到末尾）
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      // 删除第一个（最久未使用的）键值对
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// 使用示例
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));  // 输出 1
cache.put(3, 3);  // 移除 key 2
console.log(cache.get(2));  // 输出 -1（未找到）
cache.put(4, 4);  // 移除 key 1
console.log(cache.get(1));  // 输出 -1（未找到）
console.log(cache.get(3));  // 输出 3
console.log(cache.get(4));  // 输出 4