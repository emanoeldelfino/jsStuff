function loginUser(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Now we have the data')
            resolve({ userEmail: email })
        }, 3000);
    })
}

function getUserVideos(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We have the videos')
            resolve(['video1', 'video2', 'video3'])
        }, 2000);
    })
}

function videoDetails(video) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(video)
        }, 2000);
    })
}

// const user = loginUser('bla@goomail.com', 123456, user => {
//     console.log(user);
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos)
//         videoDetails(videos[0], (title) => {
//             console.log(title)
//         })
//     })
// })

loginUser('bla@goomail.com', 123456)
    .then(user => {
        console.log(user);
        getUserVideos(user.userEmail)
    })
    .then(videos => {
        console.log(videos)
        console.log('`-`')
        videoDetails(videos[0])
    })
    .then(title => console.log(title))
    .catch(err => {
        console.log(err)
    })
