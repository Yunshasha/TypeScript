//Array types

//1, recommand 
let numbers: number[] = [1,2,3]
//2, not recommand
let numbers1: Array<number> = [2,1]

let b: boolean[] = [false, true]

//Composing types
//union types
let arr:(number | string | boolean)[] = [1,'haha',3,5,true]

type MyArray = number | (string| boolean)[] 
let  myarr : MyArray = ['222', false]
