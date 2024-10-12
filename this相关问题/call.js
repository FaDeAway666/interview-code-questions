function getName(action) {
  console.log(this.name + `: ${action}`);
}

const name = "xixi";

const obj = {
  name: "haha",
};

getName.call(obj, "eat");

function MyCall(context, ...args) {
  const fn = this;
  console.log(this, "fn");
  if (typeof fn !== "function") throw Error("caller is not a function");
  context.fn = fn;
  context.fn(...args);
  delete context.fn;
}

Function.prototype.MyCall = MyCall;

getName.MyCall(obj, "sleep");
