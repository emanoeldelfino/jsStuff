// Callbacks, stack, web apis and callback queue.

// // Synchronous (run line by line)
// const sayName = (name, cb) => {
//     for(i=0; i < 4; i++) {
//         console.log('Running some code.');
//     }
//     console.log(`My name is ${name}.`);
//     cb();
// }

// function callback() {
//     console.log('This ran at the end.')
// }

// sayName('Bla', callback);

console.log('First');

setTimeout(() => {
    console.log('From callback.')
}, 2000);

console.log('Last.');

// Web Apis = setTimeout, eventListeners
// It kind of keeps track of what's going on behind the
// scenes, so the code can actually run.

// setTimeout gets added to the stack and then it moves on
// to the webApis that handles the 2000ms.
// So the stack gets empty and then moves to other lines.
// After the setTimeout is handled by webApis it is passed to
// Callback Queue.

// It basically makes a Queue of Asynchronous stuff that
// are added to it.

// Once the Call Stack is finished. 
// The event loop takes the first item from the Callback
// Queue and it pushes it to Call Stack if it is empty.

