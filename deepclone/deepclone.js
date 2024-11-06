function deepClone(object) {
  const newObj = {};

  for (let key in object) {
    const value = object[key];

    if (Array.isArray(value)) {
      const newArr = [];
      value.forEach((v, i) => {
        if (typeof v === "object") {
          newArr[i] = deepClone(v);
        } else {
          newArr[i] = v;
        }
      });
      newObj[key] = newArr;
    } else if (typeof value === "function") {
      newObj[key] = value.bind(newObj);
    } else if (typeof value === "object") {
      newObj[key] = deepClone(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}
