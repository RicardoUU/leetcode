class Event {
  events = {};

  emit(type, ...args) {
    const listeners = this.events[type];
    for (const listener of listeners) {
      listener(...args);
    }
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  once(type, listener) {
    const callback = (...args) => {
      this.off(type, callback);
      listener(...args);
    };
    this.on(type, callback);
  }

  off(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type] = this.events[type].filter(
      (callback) => callback !== listener
    );
  }
}

// test cases
const eventInstance = new Event();
eventInstance.on("click", (a, b) => {
  console.log(a, b);
});
eventInstance.emit("click", 1, 2); // 1 2
eventInstance.once("dbClick", (a, b) => {
  console.log(a, b);
});
eventInstance.emit("dbClick", 3, 4); // 3 4
eventInstance.emit("dbClick", 5, 6);
eventInstance.off("click");
eventInstance.emit("click", 7, 8);
eventInstance.emit("dbClick", 9, 10);
eventInstance.off("dbClick");
