/**
 * 列表中有10个URL，给定一个固定的并发数，实现一个函数让这10个URL以最快的方式完成请求，
 * 并以在列表中固定的顺序输出结果，无论是否成功请求
 */

const times = [3, 4, 2, 4, 1, 5, 8, 4, 9, 7, 5];
const max = 3;

const promisfy = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });

const fetchs = new Array(times.length)
  .fill(0)
  .map((item, index) => promisfy(times[index]));

const result = [];

const fetch = async (i) => {
  return fetchs[i]
    .then((res) => {
      result[i] = { success: true, result: res };
      console.log(result, "fetch result");
    })
    .catch((err) => {
      result[i] = { success: false, err };
    });
};

async function request() {
  const run = async () => {
    let index = 0;
    const stack = [];
    while (index < fetchs.length) {
      if (stack.length < max) {
        console.log(index);
        let obj = {
          id: index,
        };
        const request = fetch(index++).finally(() => {
          let si = stack.findIndex((item) => item.id === obj.id);
          console.log(si, "si");
          stack.splice(si, 1);
        });
        obj.request = request;
        stack.push(obj);
      }
      // else {
      //   await Promise.race(stack.map((item) => item.request));
      // }
    }

    await Promise.all(stack.map((item) => item.request));
  };

  await run();
}

request().then(() => {
  console.log(result, "result");
});

// fetch(1);
