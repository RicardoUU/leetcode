// Promise.allSettled()

function myPromiseAllSettled(promises) {
  return new Promise((resolve) => {
    let results = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = { status: "fulfilled", value: result };
        })
        .catch((error) => {
          results[index] = { status: "rejected", reason: error };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// promise.any()

function myPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let completed = 0;
    promises.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          errors.push(error);
          completed++;
          if (completed === promises.length) {
            reject(errors);
          }
        });
    });
  });
}