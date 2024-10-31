class Scheduler {
  constructor() {
    this.queue = [];
    this.maxCount = 2;
    this.runCounts = 0;
    // this.isRun = false;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
    // console.log(promiseCreator)
    if(this.maxCount > this.runCounts) { // 并发数
      this.request();
    }
  }
  // taskStart() {
  //   // 并发数
  //   for (let i = 0; i < this.maxCount; i++) {
  //     // console.log(111)
  //      this.request();
  //     // this.runCounts++;
  //   }
  // }
  request() {
    // console.log(this.queue)
    if (!this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;
    // 递归
    this.queue.shift()().then(() => {
      this.runCounts--;
      // console.log(222)
      this.request();
    });
    console.log('ccc:'+this.runCounts)

  }
}

   
const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})
  
const scheduler = new Scheduler();
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}
  
  
addTask(1000, '1');
addTask(500, '2');
addTask(600, '3');
addTask(400, '4');

// 2，1，3，4