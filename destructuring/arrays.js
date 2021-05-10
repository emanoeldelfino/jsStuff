const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// const a = letters[0];
// const b = letters[1];

const [a,, c, ...rest] = letters;
// Add a comma to skip elements.

// const combined = letters.concat(numbers);
// ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']
const newArray = [...letters, 'G', ...numbers, '7'];

console.log(a);
console.log(c);
console.log(rest);
console.log(newArray);

function sumAndMultiply(a, b) {
  return [a+b, a*b]
  // return [a+b, a*b, a/b];
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);

console.log(sum);
console.log(multiply);
console.log(division);
