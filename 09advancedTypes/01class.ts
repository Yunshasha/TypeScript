//1 initialize class
class Person {
  age: number; // no default value
  gender = "female"; // default type: string
  //gender : string = 'female'; // not recommand. concise
}
const p = new Person();
p.age;
p.gender;

//2 constructor function class

class People {
  age: number;
  gender: string;

  constructor(_age: number, _gender: string) {
    this.age = _age;
    this.gender = _gender;
  }
  // cant give constructor function a type..
}

const a = new People(18, "male");
a.age;

//3  class entities method

class Point {
  x = 1;
  y = 2;

  scale(n: number) {
    this.x *= n;
    this.y *= n;
  }
}
const b = new Point();
b.scale(2);
b.x;

// 4 class inheritence
// 1) extents

class Animal {
  move() {
    console.log(" I can move ");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof!");
  }
}
const d = new Dog();
d.move();

// 2) implements___ts__interface

interface Singable {
  sing(): void;
  name: string;
}

class Bird implements Singable {
  name = "white";
  sing() {
    console.log("shang chun shan");
  }
}

const l = new Bird();
l.name;
l.sing();

// 5 class accessible ____public  protected  privite
// public
class Animal1 {
  public move() {
    console.log(" I can move ");
  }
}
class Dog1 extends Animal1 {
  bark() {
    console.log("woof!");
  }
}
const d1 = new Dog1();
d1.move();

//protected   only father and son class, not entities
class Animal2 {
  protected move() {
    console.log(" I can move ");
  }
}

class Dog2 extends Animal2 {
  bark() {
    console.log("woof!");
    this.move();
  }
}
const d2 = new Dog2();
// d2.move

// private  only this class, no inhertence
class Animal3 {
  private _run_() {
    console.log("run");
  }
  public move() {
    console.log(" I can move ");
  }
}

class Dog3 extends Animal3 {
  bark() {
    console.log("woof!");
  }
}
const d3 = new Dog3();
d1.move();
// d3._run_
