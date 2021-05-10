// {} = Object Literal Syntax
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function() {
    console.log('draw');
  }
};

// draw is a method while radius and location are properties.
// properties hold values while functions/methods hold logic.

circle.draw();
