enum Direction {
  up,
  down,
  left,
  right,
}

function changeDirection(direction: Direction) {
  console.log(direction);
}

changeDirection(Direction.up);
