function getName(...actions) {
  console.log(this.name + `: ${[...actions].join(",")}`);
}

const name = "xixi";

const obj = {
  name: "haha",
};

getName.apply(obj, ["eat", "sleep"]);

function MyApply(context, args) {
  const fn = this;
  console.log(this, "fn");
  if (typeof fn !== "function") throw Error("caller is not a function");
  context.fn = fn;
  context.fn(...args);
  delete context.fn;
}

Function.prototype.MyApply = MyApply;

getName.MyApply(obj, ["swim", "dance"]);
