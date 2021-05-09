// IIFE = Immediately Invonked Function Expression

(function() {
    var name = 'Ed';
    console.log(name);
    console.log('heyyy');
})();

() => {
    var name = 'Ed';
    console.log(name);
}

console.log(name); // ReferenceError: name is not defined

console.log('Final.');

// In short it is a way to write a function and immediately
// invoke it. The name is self explanatory.

// The reason you write it is to have data privacy.
// A lot of libraries use this like JQuery.

// You add whatever you want and the function runs and
// that data is gone from the global scope.
