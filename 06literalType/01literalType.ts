//// 字面量类型

//str1 : string
let str1 = "hello js";

//str2 : 'hello js' // string literal type
const str2 = "hello js";

//to describe a exact option list
//e.g. in a game,direction not only 'string', it should be exact 'up' or 'down' or 'left' or 'right'

function changeDirection(direction: "up" | "down" | "left" | "right"): void {
  console.log(direction);
}

changeDirection("up");

// changeDirection('haha')
