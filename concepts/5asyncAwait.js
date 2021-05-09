// Async Await

async function getData() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve('done'), 3000);
    })

    let result = await promise;

    console.log(result);
}

getData();

// Promises with .then() that handles success response
// and .catch() that handles errors coming from a Promise
// solve Callback hell.

// Async Await syntax to match things available like in C#.
