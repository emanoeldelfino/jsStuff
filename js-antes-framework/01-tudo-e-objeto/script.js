// const menu = {
//   class: ".principal",
//   active() {
//     const menuElement = document.querySelector(this.class);
//     console.log(menuElement);
//   },
// };

// menu.active();

// const name = "andré";
// console.log(name.length);
// console.log(name.toUpperCase());
// const arr = [10, 15, 20];
// arr.push(25);
// console.log(arr);

const menu = {
  class: ".principal",
  active() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  },
};

// this is a reference to the object that contains the method.

menu.active();

// Everything is an object in JavaScript.
// document, console, strings, arrays, even booleans.
