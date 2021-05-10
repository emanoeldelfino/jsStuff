// What if we want duplicate our object.
// If an object has methods/functions it has behaviour.
// If the object has behaviour it's an issue when we want duplicate that.
// For that we use a factory or constructor function.

// Factory Function
function createCircle(radius) {
  return {
    // radius: radius,
    radius, // if key and value is the same we can use a shorthand
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
console.log(circle.radius);
circle.draw();

// Constructor Function
function Circle(radius) {
  // console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
// new defines the Object identifier, while without new it
// references the window object.
// this points to global object (window in browser, global in node)

// new operator when calling a function the operator creates an
// empty object and set this to point to that object and return
// that object from the function, so it returns the function
// body automatically.

// In JavaScript there are no classes, so the preference for
// Factory or Constructor functions is up to the developer.

// If the new operator is forgot it defines the properties on 
// the global object which in the context of the browser is
// Window.

// It's important to understand both, though it's up to you
// to choose a prefered one.
