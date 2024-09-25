/**
 * 实现一个 promisify 函数，把 nodejs 原生的 writeFile Promise 化
 */

const fs = require("fs");

const writeFile = fs.writeFile;

const promisfy = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

promisfy(writeFile, "test.txt", "Hello World")
  .then(() => {
    console.log("File written successfully");
  })
  .catch((err) => {
    console.log(err);
  });
