interface Point2D {
    x: number
    y: number
}
// inherit from Point2D
interface Point3D extends Point2D{
    z: number
}

const coordinate: Point3D = {
    x: 1,
    y: 2,
    z: 3
} 

console.log(coordinate.x)