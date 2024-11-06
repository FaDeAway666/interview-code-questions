let flag = true;

while (flag) {
  setTimeout(() => {
    flag = false;
  }, 1000);
}

/**
 * 这一行代码不会执行，而是陷入死循环
 * 原因是while始终会占据主线程，setTimeout无法在主线程结束之后进行执行
 */
console.log("end");
