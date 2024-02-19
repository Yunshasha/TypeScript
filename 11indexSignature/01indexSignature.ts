// when you can't decide how many props of an object
interface AnyObject {
  [key: string]: number | string;
}
const obj: AnyObject = {
  age: 12,
  a: 2,
  b: 3,
  name: "heihei",
};

//Array generic type interface
interface MyArray<Type> {
  [index: number]: Type;
}
const arr1: MyArray<number> = [1, 2, 3];
const arr2: MyArray<string | boolean> = ["1", "hehe", false];
