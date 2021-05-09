const printFirstTwoLetters = (str) => {
    if(typeof str === 'string') {
        const firstTwo = str.substring(0, 2);
        console.log(firstTwo);
    } else {
        console.log('You must pass a string as parameter.');
    }

}

printFirstTwoLetters(5);

// One feature of recent node versions is it shutdowns
// the application if it doesn't handle errors.

try {
    const url = new URL("sd");
} catch(err) {
    console.log(err.message);
}

// Prepare code for defense, protection, handle errors.
