enum Direction {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
function changeDirection(direction: Direction) {
  console.log(direction);
}

changeDirection(Direction.up);
