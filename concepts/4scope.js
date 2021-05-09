// // Scope

// // Global scope
// const name = 'Ed';
// const age = 25;

// // console.log(name);

// // Looks one level above for the variable name.
// function sayName() {
//     // const age = 10;
//     console.log(`Hello, my name is ${name}.`);
//     sayAge();

//     // Looks in SayName for age, then looks in the global
//     // scope.
//     function sayAge() {
//         // const age = 10; // Checks if age is defined in its local scope
//         console.log(`My age is ${age}.`)
//     }
// }
// // sayName();

// Function Scope
function sayFullName() {
    const name = 'Jesse';
    const age = 30;

    console.log(name, age);
}

sayFullName();

// console.log(name); // ReferenceError: name is not defined
