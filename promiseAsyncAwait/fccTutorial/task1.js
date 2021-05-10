// Task 1: Translate the story into code.
const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error('I don\'t have cakes :(.'))
            }
        }, 2000);
    })
}

console.time('Timer')

for (bool of [false, true]) {
    onMyBirthday(bool)
        .then((result) => {
            console.timeLog('Timer')

            console.log(`I have ${result} cakes.`) // I have 2 cakes
        })
        .catch((error) => {
            console.log(error) // Does not run
        })
        .finally(() => {
            console.log('Party') // Shows no matter what
        });
}
