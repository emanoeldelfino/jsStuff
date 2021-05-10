function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// Enumerate object properties
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
  // property and values of obj
  // console.log(key, circle[key]);
}

// Get all keys of object
const keys = Object.keys(circle);
console.log(keys);

// Check if object has property
if ("radius" in circle) 
  console.log("Circle has a radius.");
