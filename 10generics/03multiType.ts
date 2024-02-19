function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const person = { name: "haha", age: 18 };
getProp(person, "age");
getProp({ position: "123", number: 1 }, "position");
getProp("ss111", "toUpperCase");
getProp([1, 2, 3], 2); // key:number is index
