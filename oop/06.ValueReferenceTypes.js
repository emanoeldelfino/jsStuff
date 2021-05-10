// Value Types
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types
// Object
// Function
// Array

// let x = 10;
// let y = x;

// x = 20;

// x is 20 and y is 10.

// let x = {value: 10 };
// let y = x;

// x.value = 20;

// x is {value: 20} and y is {value: 20}.

// An object is not stored in the variable.
// It is stored somewhere else in the memory.
// And the address of the memory location is stored in the
// variable.
// So y = x is copying the memory address and not the value.
// So both y and x end up pointing to the same object.
// Changing the value of one of them changes the other too.

// Primitives are copied by value.
// Objects are copied by their reference.

// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number); // 10

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj); // 11
// Objects are passed by reference. It is not a copy but the
// object itself, so it changes it.

// Primitives (Value Types) are copied by their value.
// Objects (Reference Types) are copied by their reference.
