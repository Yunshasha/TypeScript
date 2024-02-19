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
