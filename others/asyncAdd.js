// 

function asyncAdd(a,b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
}

async function sum(...args) {
  let res = 0;

  await new Promise((resolve) => {
    function next() {
      if (args.length === 0) {
        resolve();
      } else {
        asyncAdd(res, args.shift(), (val) => {
          res = val;
          next();
        });
      }
    }
    next();
  }
  );

  return res;
}

// test
sum(1, 2, 3, 4).then(res => {
  console.log(res); // 10
});