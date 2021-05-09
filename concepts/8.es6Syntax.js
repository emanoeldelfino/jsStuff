// Destructuring

const person = {
  firstName: "James",
  lastName: "Bond",
};

// Grab a property off an object
const firstName = person.firstName;
console.log(firstName);

const { lastName } = person;
console.log(lastName);

// Spread operator

const names = ["James", "Jess"];
const otherNames = ["Lily", "Sevi"];

const allNames = [
  ...names,
  ...otherNames,
  ...Object.keys(person),
  ...Object.values(person),
  ...Object.entries(person),
];
console.log(allNames);

console.log(`${person.firstName} ${person.lastName}.`);