const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    // console.log('the # is ' + number);
    // console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // console.assert(number % 2 === 0, {number, errorMsg});
    console.assert(number % 2 === 0, 'The number %s is not even.', number)
}

// console.log('The word %s is amazing!', word)
