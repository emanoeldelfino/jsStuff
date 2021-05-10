// const person = {
//   name: "Mosh",
//   walk() {
//     console.log("walk");
//   }
// };

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("Mosh");
console.log(person);
person.walk();

// blueprint of objects are classes.

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("John", "MSc");
console.log(teacher);
console.log(teacher.name);
console.log(teacher.degree);
teacher.walk();
teacher.teach();

// Whenever we create a componenet we should have that
// component to extend the base component that is define in
// React. Base component has a bunch of methods we need in our
// components.
