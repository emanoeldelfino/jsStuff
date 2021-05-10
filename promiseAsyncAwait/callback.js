// // Synchronous callback
// function processUserName(callback) {
//     let name = prompt('Please enter your name: ')
//     callback(name);
// }

// processUserName((name) => {
//     alert(`Welcome ${name}!`)
// })

// function myMap(callback, number) {
//     callback()
// }

function mapFunct(callback, number) {
    for(let i=0; i < number; i++) {
        callback()
    }
}

mapFunct(() => console.log('bla'), 5)

function myMap(array, callback) {
    let newArray = [];
    for(let elem of array) {
        newArray.push(callback(elem));
    }
    return newArray
}

const arr = [2, 4, 6]
const newArr = myMap(arr, (elem) => {
    return elem * 3;
})

console.log(arr)
console.log(newArr)

function myEvery(array, callback) {
    for(let elem of array) {
        if (!callback(elem)) {
            return false
        }
    }
    return true
}

function mySome(array, callback) {
    for(let elem of array) {
        if (callback(elem)) {
            return true
        }
    }
    return false
}

console.log(myEvery(arr, (elem) => {
    return elem > 1
}))

console.log(mySome(arr, (elem) => {
    return elem % 3 === 0
}))
