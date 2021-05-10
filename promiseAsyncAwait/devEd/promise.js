// A promise is an object that gives us the result or failure of an asynchronous
// operation

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('got the user')
        // resolve({user:'ed'});
        reject(new Error('User not logged in'))
    }, 2000);
});

promise
    .then(user => {
        console.log(user)
    })
    .catch(err => {
        console.log(err.message)
    })
