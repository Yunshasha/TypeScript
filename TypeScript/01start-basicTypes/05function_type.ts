// 1 parameters type
// 2 return value type


function add ( a:number, b: number): number{
    return a + b
}

const addFunc =(a:number, b:number): number=>{return a+b} 

console.log(addFunc(10,20))



// const add2 = (a, b) =>{
//     return a + b
// }
// give the function (parameter and return value) type at the same time

const add3: (a:number, b:number)=> number =(a,b) =>{return a + b}


// if function don't have return value, function type is void

const greet:(name:string)=> void =(name) =>{
    console.log('hello',name)
}
greet('jack')


// function optional parameters

const multi :(a:number, b: number, c?:number) => number =(a,b,c)=>{
    if (typeof c !== 'undefined'){
        return a*b*c
    }
    return a*b
}
console.log(multi(2,4))