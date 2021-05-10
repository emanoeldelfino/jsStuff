new Promise((resolve) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
    
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    throw new Error('Test')
    
    console.log('Do this, no matter what happened before');
})
.catch(() => {
    console.log('`-`')
    
    throw new Error('`-`')

    console.log('This won\'t be printed');
})
.catch(() => {
    console.log('hoi')
});

