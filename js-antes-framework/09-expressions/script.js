const groupA = 100;
const groupB = 300;

// Block, not an Expression.
if (groupA > groupB) {
  console.log("Test");
}

// To check if it's an expression we can try put the
// code inside a variable.

const winner = groupA > groupB ? "Group A won." : "Group B won.";

console.log(winner);

const squareArea = (side) => l * l;

// array methods also expressions.

const groupAwon = (groupA > 150 && "Group A won.") || "Group A lost.";

// Ternary operators and logical and relational operators are
// used in React and Vue expressions.
console.log(groupAwon);
