// construct a object type, propkey 'Keys', proptpe 'Type'

type RecordObj = Record<"name" | "age" | "children", string | number>;

const pa: RecordObj = {
  name: "haha",
  age: 37,
  children: "heihei",
};
