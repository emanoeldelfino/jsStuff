// // Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(1);

// // Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);

// // Every Object has a Constructor property.

let x = {};

// let x = new Object();

// JavaScript engine translates object literal syntax to 
// constructor.

// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// string | number | boolean literals

// Every object has a constructor property and that references
// the function that was used to create that object.
