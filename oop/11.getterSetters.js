function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (Object.keys(value).length !== 2) {
        throw new Error("You should pass x and y properties only.");
      } else if (!value.x || !value.y) {
        throw new Error("You should pass x and y properties.");
      }
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = { x: 5, z:10 };
circle.draw();
