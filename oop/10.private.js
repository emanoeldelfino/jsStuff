function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function() {
    // ...
  }

  this.draw = function () {
    computeOptimumLocation(0.1);
    // defaultLocation

    // this.radius

    console.log('draw');
  };
}

const circle = new Circle(10);

// Closure determines what variables will be accessible to 
// an inner function.

// defaultLocation and computeOptimumLocation are within scope 
// of Circle and within the closure of this.draw function
// Scope is temporary, but closure stays there.
// Even after this.draw function ends the variables will keep
// in memory because they are part of its closure.

// Now the public interface of circle is simpler, easier to work
// with and prevent issues later down the road.
