// Type coercion is when one type of data is automatically changed into another type.

// ts is using Structural Type System(duck typing)
// if two objects have same shape, these are labeled as same.
class Point {
  x: number;
  y: number;
}

class Point2D {
  x: number;
  y: number;
}

const p: Point = new Point2D(); //type coercion

//
class Point3D {
  x: number;
  y: number;
  z: number;
}

const x: Point = new Point3D();
const y = new Point3D();

//_________________________________
//interface coercion
interface Type {
  x: number;
  y: number;
}
interface Type2D {
  x: number;
  y: number;
}
interface Type3D {
  x: number;
  y: number;
  z: number;
}

let t1: Type;
let t2: Type2D;
let t3: Type3D;
//correct
// t1 = t2
// t2 = t1
// t1 = t3
