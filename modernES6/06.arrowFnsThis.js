const person = {
  talk() {
    // define a variable self and call it in the 
    // callback function.
    var self = this;

    // Standalone function returns window object.
    setTimeout(function() {
      console.log('self', self);
    }, 1000);

    // Arrow functions don't rebind this keyword.
    setTimeout(() => console.log(this));
  }
}

person.talk();

// strict mode returns undefined instead of window obj in this
// cases.
// strict mode doesn't override this behaviour in callback
// functions, so this returns a reference to window object.
