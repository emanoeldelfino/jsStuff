const fetch = require('node-fetch');
const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Delay in seconds: ', (seconds) => {
//     const ms = parseInt(seconds * 1000);
//     setTimeout(() => {
//         console.log(`Waited ${seconds} seconds.`)
        
//         // closes input
//         rl.close();
//     }, ms)
// });

// // Closes the call for input
// rl.on('close', () => {
//     console.log('\nBye Bye!')
//     process.exit(0);
// });

// nested setTimeouts
// setTimeout(() => {
//     console.log('3');
//     setTimeout(() => {
//         console.log('2')
//         setTimeout(() => {
//             console.log('1')
//         }, 1000)
//     }, 1000)
// }, 1000)

// function wait(seconds, step) {
//     const ms = seconds * 1000
//     for(let i=0; i < seconds; i += step) {
//         setTimeout(() => {
//             console.log(i)
//         }, ms)
//     }
// }

// wait(10, 2)

// button event handler in browser JavaScript
// const btn;
// btn.addEventListener('click', () => {
//     // code
// })

// error first callback

// Promises
// fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//         console.error('ERROR');
//         console.error(err);
//     } else {
//         console.log('GOT DATA');
//         console.log(data);
//     }
// });

// Create a promise
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0) {
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => console.log('Success'))
