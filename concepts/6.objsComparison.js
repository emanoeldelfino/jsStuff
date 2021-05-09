let obj1 = {1: 1, 2: 2};
let obj2 = {1: 1, 2: 2};

// Though obj1 and obj2 share the same value they point
// to different spaces of memory and JavaScript compares
// objects by memory spaces and not by its values.
// So obj1 == obj2 or obj1 === obj2 will return false.

console.log(obj1 == obj2);
console.log(obj1 === obj2);

// It is also important to note these memory spaces when
// creating new arrays and collections in general from
// another one.
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
arr1.push(5);

// Instead of having arr1 = [1, 2, 3, 4] and
// arr2 = [1, 2, 3, 5] we will have arr1 and arr2 with
// [1, 2, 3, 4, 5] because we made them equal by memory 
// space not by value.

console.log(arr1);
console.log(arr2);

// You can create a copy of an array with spread syntax
// (Three dots ... spreads an iterable into single elements)
let arr3 = [3, 2, 1];
let arr4 = [...arr3];
arr3.push(0);
arr4.push(-1);

console.log(arr3);
console.log(arr4);

// This also happens with arrays
let arr5 = [1, 2];
let arr6 = [1, 2];

console.log(arr5 === arr6);
