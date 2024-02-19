//assume type is string, i want the length you'll find an error on length(type doesn't have length)
// function id<Type>(value:Type): Type{
//     return value.length
// }
//________________________need constarins to shrink the type
function id<Type>(value: Type[]): Type[] {
  const num = value.length;
  return value;
}

//give a constrain to type
//if you want prop 'length'
interface Length {
  length: number;
}
function group<Type extends Length>(value: Type): Type {
  const len = value.length;
  return value;
}
group([1, 2, 3]);
group("string");
