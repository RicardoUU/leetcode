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
    
    return new Promise((resolve) => {
      task.resolve = resolve
      if (this.running < this.max) {
        this.run(task)
      } else {
        this.queue.push(task)
      }
    })

  }

  start() {
    // max 个通道开启
    for (let i = 0; i < this.max; i++) {
      const fn = this.queue.shift()
      this.run(fn)
    }
  }

  async run(task) {
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

test()