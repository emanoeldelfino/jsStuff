// function showList(company, ...clients) {
//   console.log(company, ...clients);
//   console.log(clients);
// }

// showList("Origamid", "Joe", "Mary");

const numbers = [1, 2, 4, 29, 32, 2, 45, 3];

console.log(Math.max(...numbers));

// Returns a NodeList that looks like an array, but in fact
// it is not. There are some shared methods like forEach, but
// map for example returns an error.

// We can use Array.from() to transform it in an array.
// But an easier way is to use an spread operator with them
// inside brackets.
// // const items = Array.from(document.querySelectorAll("li"));
// const items = document.querySelectorAll("li");

// [...items].map(item => {
//   console.log(item);
// })

// console.log(items);

// const car = {color: "Blue", "doors": 4, year: 2020};

// const cloneCar2 = car;
// // Both reference the same object, so any operation in one
// // will also happen in the other.

// // Shallow clone (Prototype is different)
// const cloneCar = { ...car, turbo: true };

class Transport {
  constructor() {
    this.land = true;
  }
}

class Car extends Transport {
  constructor(color, doors) {
    super();
    this.color = color;
    this.doors = doors;
  }

  move() {
    console.log("Moved.");
  }
}

// Prototype is Transport
const car = new Car("red", 4);

// Prototype is Object.
// It doesn't keep methods of Prototype, so it's not
// a perfect copy, though it's widely used yet, but mainly for
// getting the properties directly from the object.
const cloneCar = { ...car };

console.log(car);
console.log(cloneCar);
