function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// Objects in JavaScript are dynamic
// After creating it you can add properties or remove them.

// We get a user object, so we can add a token in the fly to it.
// user.token = 'asdsada';

// In C# and Java you need to change the classes.

circle.location = { x: 1 };

const propertyName = 'center location';
circle[propertyName] = { x: 1 };
// circle.center-location or any other special character in the 
// dot notation is invalid so we can use the bracket notation 
// instead: circle[center-location];

// If we don't want to pass a specific property like a password
// from a object of the database we receveid we can use delete:
delete circle['location'];
