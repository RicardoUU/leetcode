
// 快照沙箱
class SnapshotSandBox {
  constructor() {
    this.proxy = window;
    this.snapshot = {};
  }
  active() {
    Object.keys(window).forEach(key => {
      this.snapshot[key] = window[key];
    });
  }
  inactive() {
    Object.keys(window).forEach(key => {
      if (window[key] !== this.snapshot[key]) {
        window[key] = undefined;
      }
    });
  }
}

// test case
const sandbox = new SnapshotSandBox();
sandbox.active();
window.a = 1;
console.log(window.a); // 1
sandbox.inactive();
console.log(window.a); // undefined




// proxy沙箱
class ProxySandBox {
  proxy = new Proxy(window, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, value) {
      return true;
    }
  });
  active() {
    window = this.proxy;
  }
  inactive() {
    window = window;
  }
}

// test case
const sandbox = new ProxySandBox();
sandbox.active();
window.a = 1;
console.log(window.a); // 1
sandbox.inactive();
console.log(window.a); // undefined
