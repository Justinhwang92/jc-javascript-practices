var lib = {
  getASync(thing, callback) {
    setTimeout(callback, 1000);
  },

  getSync(thing) {
    const end = Date.now() + 1000;
    while (Date.now() < end) {
      const doSomethingHeavyInJavaScript = 1 + 2 + 3;
    }
    return end;
  },
  async getPromise(thing) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  },

  groupAsync(stuff, bucket, callback) {
    setTimeout(callback, 1000);
  },

  groupSync(stuff, bucket) {
    const end = Date.now() + 1000;
    while (Date.now() < end) {
      const doSomethingHeavyInJavaScript = 1 + 2 + 3;
    }
    return end;
  },

  async groupPromise(stuff, bucket) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  },
};
module.exports = lib;
