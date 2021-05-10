// const person = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   }
// };

// person.walk();

// const walk = person.walk;
// walk();

// This inside a method returns a reference to the object.
// This in a regular function or standalone object returns the
// global object.
// React project strict mode enabled by default.
// Strict mode executes JavaScript in a more protective way, in
// order to prevent potential problems.
// So instead of getting reference to global object we get
// undefined.

// this reference
// method -> obj
// function (regular function) -> global (window, global)

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// video.stop = function() {
//   console.log(this);
// }

// function playVideo() {
//   console.log(this);
// }

// playVideo();
// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video("b"); // {}

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this);
  }
}

// forEach has thisArg parameter is the object reference.

video.showTags();
