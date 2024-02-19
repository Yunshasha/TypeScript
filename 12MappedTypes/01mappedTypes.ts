// create new type based on old type
//only used in type alias, No interface
type PropsKeys = "x" | "y" | "z";
//________________repeaat write twice
type Type1 = { x: number; y: number; z: number };
//____________________---
//use mapped type to simplify
type Type2 = { [Key in PropsKeys]: number };

//
//
//
//based on object type
type Props = {
  a: number;
  b: string;
  c: boolean;
};
type Type3 = { [key in keyof Props]: number };
// type Type3 = {
//     a: number;
//     b: number;
//     c: number;
// }
