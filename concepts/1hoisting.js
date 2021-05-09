// Hoisting

// console.log(person); // undefined
// var person = 'Ed';

// JavaScript moves var person definition to the top of the code,
// but keeps the value definition in the same place.
// So the previous code turns into this behind the scenes:

// var person;
// console.log(person);
// person = 'Ed';

/* */

// sayName();

// function sayName(){
//     console.log('Hello there');
// }

// Function are also moved all the way top the same way
// variables. That's why the call to sayName() before
// its definition works:

// function sayName(){
//     console.log('Hello there');
// }

// sayName();

/* */

// sayAge();

// var sayAge = function() {
//     console.log('My age is 25 oh no');
// };

// This throws 'typeError: sayAge is not a function' 
// because it is taken as a variable definition, though
// a function was linked to the identifier:

// var sayAge;

// sayAge();

// sayAge = function() {
//     console.log('My age is 25 oh no');
// };

/* */

// const name; 
// SyntaxError: Missing initializer in const declaration

console.log(name);

const name = 'Ed';
// let name = 'Ed';
// ReferenceError: Cannot access 'name' before initialization
