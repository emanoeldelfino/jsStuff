
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

// In VSCode:
// Blue rectangles are properties.
// Purple boxes are methods.

// const Circle1 = new Function('radius', `
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// `);

// const circle = new Circle(1);

// The first argument of call is referenced as this inside
// the function. When we call with new it passes an empty
// object, without it passes the global object.
// For browser it is Window, in Node it is global.
// The other arguments are passed to the function explicitly.
// new Circle(1); // is Circle.call({}, 1); internally.
// Circle(1);     // is Circle.call(window, 1); internally.

// We have another method. Called apply.
// It is exactly like call method. Instead of passing all the
// arguments explicity we pass it as an array.

// Instead of
// Circle.apply({}, 1, 2, 3);
// We do
// Circle.apply({}, [1, 2, 3]);

// This is useful if you already have an array and you want to
// pass it as a second argument.

// In JavaScript functions are objects.

const another = new Circle(1);
