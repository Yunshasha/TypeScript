//if one set of types reused multiple times
//interface

interface IPerson{
    name: string
    age: number
    sayhi():void

}

const person : IPerson = {
    name:'haha',
    age:19,
    sayhi(){}
}