

// 实现精确的setInterval

function mySetInterval(fn, time) {
  let timer = null;
  let startTime = Date.now();
  let nextTime = time;
  const loop = () => {
    timer = window.requestAnimationFrame(loop);
    const currentTime = Date.now();
    if (currentTime - startTime >= nextTime) {
      fn();
      startTime = currentTime;
    }
  }
  timer = window.requestAnimationFrame(loop);
  return () => {
    window.cancelAnimationFrame(timer);
  }
}