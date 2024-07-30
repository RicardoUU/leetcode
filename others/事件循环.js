setTimeout(() => {
  console.log("1-1");
  Promise.resolve().then(() => {
    console.log("1-2");
  });
  Promise.reject().catch(() => {
    console.log("7-1");
  });
});
console.log("2-1");
Promise.resolve().then(() => {
  console.log("3-1");
  setTimeout(() => {
    console.log("3-2");
  });
});
Promise.reject().catch(() => {
  console.log("6-1");
});
new Promise(function (reslove) {
  console.log("4-1");
  reslove();
  console.log("5-1");
}).then(function () {
  console.log("4-2");
});
