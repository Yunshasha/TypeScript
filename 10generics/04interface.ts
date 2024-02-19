// use generic type with interface
interface IdFunc<Type> {
  id: (value: Type) => Type;
  ids: () => Type[];
}

const obj: IdFunc<number> = {
  id(value) {
    return value;
  },
  ids() {
    return [1, 2, 3];
  },
};
