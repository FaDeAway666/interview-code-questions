function getName(...actions) {
  console.log(this.name + `: ${[...actions]}`);
}

const name = "xixi";

const obj = {
  name: "haha",
};

const fn = getName.bind(obj, "eat");
fn();

function MyBind(context, ...args) {
  const fn = this;
  if (typeof fn !== "function") throw Error("caller is not a function");
  const result = function (...rest) {
    fn.apply(context, [...args, ...rest]);
  };

  if (fn.prototype) {
    result.prototype = fn.prototype;
  }
  return result;
}

Function.prototype.MyBind = MyBind;
const fn2 = getName.MyBind(obj, "swim");
fn2();
fn2("dance");
