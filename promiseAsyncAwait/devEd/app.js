// // Sync code example

// // Goes through call stack

// function otherFunct() {
//     console.log("We are in another funct");
//     console.log("do some stuff");
// }

// console.log("start");

// otherFunct();

// console.log("End");

// Async code example

console.log("Start");

// console.time('Timer')

// Don't stop the code
// It goes to the Web Apis "stack" where the browser handles it
setTimeout(() => {
    console.log("We are in the timeout.");
    // console.timeLog('Timer')
}, 5000);

// event listener for click is also passed to Web Apis "stack"
// Once the action is triggered the triggerer is moved to
// the Callstack (invoked).

// buttonTest.addEventListener('click', clickTrigger)

// Callbacks aren't necessarily asynchronous
const items = [1, 2, 3, 4, 5];

items.forEach(item => {
    console.log(item)
})

console.log("End");
