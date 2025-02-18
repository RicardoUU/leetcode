// 最大堆

function maxHeap() {
  let heap = []
  this.insert = function (val) {
    heap.push(val)
    let i = heap.length - 1
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2) // 父节点
      if (heap[i] > heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]]
        i = parent
      } else {
        break
      }
    }
  }
  this.extract = function () { // 删除堆顶元素
    if (heap.length === 0) return null
    let res = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()
    let i = 0
    while (i * 2 + 1 < heap.length) {
      let left = i * 2 + 1
      let right = i * 2 + 2
      let max = left
      if (right < heap.length && heap[right] > heap[left]) {
        max = right
      }
      if (heap[i] < heap[max]) {
        [heap[i], heap[max]] = [heap[max], heap[i]]
        i = max
      } else {
        break
      }
    }
    return res
  }
  this.top = function () {
    return heap.length > 0 ? heap[0] : null
  }
  this.size = function () {
    return heap.length
  }
  this.isEmpty = function () {
    return heap.length === 0
  }
}

let h = new maxHeap()
h.insert(3)
h.insert(2)
h.insert(1)
console.log(h.top()) // 3
console.log(h.extract()) // 3
console.log(h.top()) // 2

// 最小堆

class MinHeap {
  constructor() {
    this.heap = []
  }
  insert(val) {
    this.heap.push(val)
    let i = this.heap.length - 1
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2)
      if (this.heap[i] < this.heap[parent]) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
        i = parent
      } else {
        break
      }
    }
  }
  extract() {
    if (this.heap.length === 0) return null
    let res = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    let i = 0
    while (i * 2 + 1 < this.heap.length) {
      let left = i * 2 + 1
      let right = i * 2 + 2
      let min = left
      if (right < this.heap.length && this.heap[right] < this.heap[left]) {
        min = right
      }
      if (this.heap[i] > this.heap[min]) {
        [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]]
        i = min
      } else {
        break
      }
    }
    return res
  }
  top() {
    return this.heap.length > 0 ? this.heap[0] : null
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.heap.length === 0
  }
}