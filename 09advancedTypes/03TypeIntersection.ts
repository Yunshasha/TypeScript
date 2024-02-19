//type inherit
interface Point {
  x: number;
}
interface Point2D extends Point {
  y: number;
}

const p: Point2D = { x: 1, y: 2 };

//type intersection
//combine multi differnt types into one type
interface Point3D {
  z: number;
}

type PointDetail = Point2D & Point3D;

const pd: PointDetail = {
  x: 1,
  y: 2,
  z: 3,
};

//__________________________________________
//difference btw extends and intersection
//extends, if 2 interface have the same varible names, type error
interface A {
  fn: (value: string) => void;
}
// interface B extends A {
//   fn: (value: number) => void;
// }

//intersection
interface B {
  fn: (value: number) => void;
}
type C = A & B;
// as union type---C { fn : (value :string | number) => void}
