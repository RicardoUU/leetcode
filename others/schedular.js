// class Scheduler{
//   constructor(max){
//     this.max = max
//     this.queue = []
//     this.running = 0
//   }
//   add(task){
//     return new Promise(resolve=>{
//       // 关键，加了一层 Promise 的封装，将其 resolve 的函数交出去
//       task.resolve = resolve
//       if(this.running<this.max){
//         this.run(task)
//       }else{
//         this.queue.push(task)
//       }
//     })
//   }
//   async run(task){
//     if(task && typeof task === 'function'){
//       this.running++
//       await task()
//       task.resolve()
//       this.running--
//       const fn = this.queue.shift()
//       this.run(fn)
//     }
//   }

//   stop(){
//     this.running = 0
//     this.queue = []
//   }
// }



// start的时候才开始执行任务，最多执行max个任务
// add返回一个promise，任务执行完毕后resolve

class Scheduler {
  constructor(max) {
    this.max = max
    this.queue = []
    this.running = 0
    this.isStart = false
  }
  add(task) {
    // return new Promise(resolve => {
    //   // 关键，加了一层 Promise 的封装，将其 resolve 的函数交出去
    //   task.resolve = resolve
    //   if (this.running < this.max) {
    //     this.run(task)
    //   } else {
    //     this.queue.push(task)
    //   }
    // })
    
    return new Promise((resolve) => { // Promise这里的是参数是一个函数，这个函数会在Promise的构造函数中立即执行， 是同步代码 
      task.resolve = resolve
      
      // 如果已经开始了，直接执行
      if (this.isStart) {
        if (this.running < this.max) {
          this.run(task)
        } else {
          this.queue.push(task)
        }
      } else {
        // 如果还没开始，先放到队列中
        this.queue.push(task)
      }
      
    })

  }

  start() {
    console.log('start')
    if (this.isStart) return
    this.isStart = true
    // max 个通道开启
    for (let i = 0; i < this.max; i++) {
      const fn = this.queue.shift()
      this.run(fn)
    }
  }

  async run(task) {
    console.log('run')
    if (task && typeof task === 'function') {
      this.running++
      await task()
      task.resolve()
      this.running--
      const fn = this.queue.shift()
      this.run(fn)
    }
  }

  stop() {
    this.running = 0
    this.queue = []
    this.isStart = false
  }
}


// test cases
const scheduler = new Scheduler(2)
const timeout = (time) => new Promise(resolve => setTimeout(resolve, time))
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

async function test() {
  addTask(1000, '1')
  addTask(500, '2')
  addTask(300, '3')
  scheduler.start()

  const promise = scheduler.add(() => timeout(1000))
  await promise;
  addTask(400, '4')
  
}

test() // 2 3 1 4