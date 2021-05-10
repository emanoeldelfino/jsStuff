function handleMouseMove({clientX, clientY}) {
  clientX = "abc";
  // const {clientX, clientY, target} = event;

  // const clientX = event.clientX;
  // const clientY = event.clientY;

  console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove);

const fruits = ["Banana", "Grape"];

// const fruit1 = fruits[0];
const [fruit1, fruit2] = fruits;

console.log(fruit1);
console.log(fruit2);

console.log(fruits);

const useState = ["blue", function(color) {
  useState[0] = color;
}]

const [color, setColor] = useState;

setColor("red");
