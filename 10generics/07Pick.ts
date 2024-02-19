// select wanted type from interface

interface People {
  name: string;
  age: number;
  sayhi(): void;
}

type YourName = Pick<People, "name">;

const n: YourName = {
  name: "lala",
};

type Person = Pick<People, "name" | "age">;

const p: Person = {
  name: "lulu",
  age: 1,
};
