function all(fns) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    for (let i = 0; i < fns.length; i++) {
      console.log(fns[i], "fn");
      fns[i]
        .then((res) => {
          result[i] = res;
          index++;
          if (index === fns.length) {
            resolve(result);
          }
        })
        .catch((res) => {
          reject(res);
        });
    }
  });
}

const fn = (delay, index) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(index);
    }, delay);
  });
};

const tasks = [fn(1000, 1), fn(3000, 3), fn(2000, 2)];

console.log(tasks, "tasks");
all(tasks).then((res) => {
  console.log(res, "res");
});
