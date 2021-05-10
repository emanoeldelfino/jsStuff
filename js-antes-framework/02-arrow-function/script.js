// function upperName(name) {
//   return name.toUpperCase();
// }

const upperName = name => name.toUpperCase();
const countLetters = word => word.length;

console.log(countLetters("Joe"));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    this.menuElement.addEventListener("click", event => {
      console.log(this);
      event.target.classList.add(this.activeClass);
    })
    // function keyword creates a new this, but arrow functions
    // don't.
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();

// console.log(menu);
