// 手写await，写一个fetchAwait函数，
// 接受一个promise参数，使其余代码等待promise执行完成后再执行

// 原理是generator结合promise
function fetchAwait(fn, data) {
  function * generator() {
    const res = yield fn(data)
    console.log(res)
  }
  function step(generator,) {
    const { value, done } = generator.next()
    if (done) {
      return value.then(res)
    }
  }
}

const test = (...args) => new Promise((resolve) => {
  setTimeout(() => {
    resolve('success')
    console.log(...args)
  }, 2000)
})

function main() {
  console.log('start')
  fetchAwait(test)
  console.log('end')
}

main()
console.log("end2")