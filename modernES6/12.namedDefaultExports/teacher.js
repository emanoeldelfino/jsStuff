import { Person } from "./person.js";

export function promote() {}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

// A class is an object.
// They are syntactic sugar over constructor functions
// And functions are object.
// So a class is technically an object in JavaScript.
