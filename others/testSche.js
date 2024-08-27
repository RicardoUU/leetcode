
class Scheduler {
  constructor(limit) {
    this.limit = limit
    this.queue = []
    this.runCount = 0
  }

  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      this.queue.push(() => promiseCreator().then(resolve, reject))
    })
  }

  start() {
    for (let i = 0; i < this.limit; i++) {
      this.request()
    }
  }

  request() {
    if (!this.queue || !this.queue.length || this.runCount >= this.limit) {
      return
    }

    this.runCount++
    this.queue.shift()().then(() => {
      this.runCount--
      this.request()
    })
  }

  stop() {
    this.queue = []
    this.runCount = 0
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