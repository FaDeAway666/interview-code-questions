function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const person = new Person("Tom");

/**
 * for...in遍历对象的可枚举属性
 * 如果不想遍历原型链上的属性，可用hasOwnProperty()方法
 */
for (const key in person) {
  console.log(key);
}

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

const map = new Map([
  [1, "z"],
  [2, "c"],
]);
console.log(map);
for (let key in map) {
  console.log(key);
}

for (let entry of map) {
  console.log(entry);
}
