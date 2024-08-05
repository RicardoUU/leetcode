
// u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')

class U {
  constructor() {
    this.promise = Promise.resolve();
  }

  console(value) {
    this.promise = this.promise.then(() => {
      console.log(value);
    });
    return this;
  }

  setTimeout(time) {
    this.promise = this.promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    });
    return this;
  }
}

const u = new U();

u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')
