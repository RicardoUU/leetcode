console.log(1)

new Promise((resolve, reject) => {
  resolve()
  console.log(2)
  console.log(2.5)

}).then(() => {
  console.log(3)

  new Promise((resolve, reject) => {
    resolve()
    console.log(4)

  }).then(() => {
    console.log(5)

  }).then(() => {
    console.log(6)

  })

})

setTimeout(() => { 
  console.log(7)
}, 0)