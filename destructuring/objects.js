const personOne = {
  name: "Kyle",
  age: 24,
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  // name: 'Sally',
  age: 32,
  favoriteFood: "Guava",
  address: {
    city: "Somewhere else",
    state: "Another one of them",
    street: {
      name: "Some street",
      number: 203,
    },
  },
};

// const { name: firstName = 'Joe', age, favoriteFood = 'Rice' } = personTwo;

// console.log(firstName);
// console.log(age);
// console.log(favoriteFood);

// const { name: firstName, ...rest } = personTwo;
// console.log(firstName);
// console.log(rest);

const {
  name: firstName,
  address: {
    city,
    street: { number },
  },
} = personTwo;

console.log(firstName);
console.log(city);
console.log(number);

const personThree = { ...personOne, ...personTwo };
console.log(personThree);

function printUser({ name = "Joe", age, favoriteFood = "Watermelon" }) {
  console.log(`Name is: ${name}.`);
  console.log(`Age is ${age}.`);
  console.log(`Favorite food is ${favoriteFood}.`);
}

console.log("----");
printUser(personOne);
printUser(personTwo);
