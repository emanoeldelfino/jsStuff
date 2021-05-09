// 1. main() gets added to stack

function sayHello() {
    // 4. console.log() gets added to stack
    console.log('Hello, my name is Bla.');
    // 5. console.log() gets removed of stack
}

function sayAge() {
    // 8. console.log() gets added to stack
    console.log('My age is 30.');
    // 9. console.log() gets removed of stack
}

function sayAll() {
    // 3. sayHello() gets added to stack
    sayHello();
    // 6. sayHello() gets removed of stack

    // 7. sayHello() gets added to stack
    sayAge();
    // 10. sayHello() gets removed of stack
}

// 2. sayAll() gets added to stack
sayAll();
// 11. sayAll() gets removed of stack

// 12. console.log() gets added to stack
console.log('Final.');
// 13. console.log() gets removed of stack

// 14. main() gets removed of stack
