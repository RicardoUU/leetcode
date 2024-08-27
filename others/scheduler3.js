class Scheduler{
  constructor(max){
    this.max = max
    this.queue = []
  }

  addTask(duration, data){
    const p = () => new Promise((resolve)=>{
      setTimeout(()=>{
        console.log(data, dayjs().format('HH:MM:ss'))
        resolve()
      }, duration*1000)
    })

    this.queue.push(p)
  }

  async run(task){
    if(task && typeof task==='function'){
      await task()
      const fn = this.queue.shift()
      this.run(fn)
    }
  }
  
  start(){
    // max 个通道开启
    for(let i=0;i<this.max;i++){
      const fn = this.queue.shift()
      this.run(fn)
    }
  }
}
