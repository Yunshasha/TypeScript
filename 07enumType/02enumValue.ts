// enum Direction {
//     up, //default value 0
//     down,//default value 1
//     left,//default value 2
//     right,//default value 3
//   }

// number enum
enum Direction {
  up = 10,
  down,
  left,
  right,
}
function changeDirection(direction: Direction) {
  console.log(direction);
}

changeDirection(Direction.up);
