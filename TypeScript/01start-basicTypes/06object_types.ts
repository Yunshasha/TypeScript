

let person= {
    name: 'lala',
    age: 18,
    sayHello(){console.log('hello')}
}
// object types
let person1:{name:string; age: number; sayHello():void ; greet(name : string): void} = {
    name: 'lala',
    age: 18,
    sayHello(){console.log('Hello')},
    greet(name){console.log(name,'hi')}
}

let person2:{
    name:string
    age: number
    sayHello:()=>void 
    greet(name : string): void
} = {
    name: 'lala',
    age: 18,
    sayHello(){console.log('Hello')},
    greet(name){console.log(name,'hi')}
}

//object optional parameter
//axios({...})
//{config}

function myAxios(config : {url: string; method?: string}){}
myAxios({url:''})
