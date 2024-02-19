//type protection and use different multi types
//________________________
//declare function
function id<Type>(value: Type): Type {
  return value;
}
//invoke function, define the type, check the function type
const num = id<number>(10);
const str = id<string>(`i'm string`);
