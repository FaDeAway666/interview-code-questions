// 要求实现如下方法
const retry = (fn, limit) => {
  let index = 0;

  const res = (...args) => {
    return new Promise((resolve, reject) => {
      const f = () => {
        fn(...args)
          .then((res) => resolve(res))
          .catch((err) => {
            if (index < limit) {
              index++;
              console.log(index, "retry");
              f();
            } else {
              reject(err);
            }
          });
      };
      f();
    });
  };

  return res;
};
// 假定这个是请求
const request = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("errer");
    }, 1000);
  });
};
// 通过调用retry得到真正的执行方法，这里的3是retry次数
const fn = retry(request, 3);
// 传入请求参数，假设失败了会自动尝试3次
fn("sss")
  .then((res) => {
    console.log(res, "success");
  })
  .catch((err) => {
    console.log(err, "final");
  });
