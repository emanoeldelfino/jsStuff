import { squareArea, squarePerimeter } from "./square.js";
import randomNumber from "./randomNumber.js";
import Circle from "./circle.js";

// Vanilla JavaScript you need to specific the extension in the
// import. With webpack you don't need to specify it.

// You can use any identifier for the default module.

const side = randomNumber(10);
const area = squareArea(side);
const perimeter = squarePerimeter(side);

console.log(`Side is ${side}.`);
console.log(`Area of side is ${area}.`);
console.log(`Perimeter of side is ${perimeter}.`);

const radius = Circle.random();
const circleArea = Circle.area(radius);
const circumference = Circle.circumference(radius);

console.log(`Radius is ${radius}.`);
console.log(`Area of circle is ${circleArea}.`);
console.log(`Circumference of circle is ${circumference}.`);

// You only need directly import the main script that
// imports others.

// In the network tab of chromeDevTools is possible verify that
// the modules are loaded only once, even if they are imported
// in multiple files.
