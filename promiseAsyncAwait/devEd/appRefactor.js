console.log('Start')

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data')
            resolve({ email: email })
        }, 3000);
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3'])
        }, 2000);
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('title of the video')
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

// loginUser('bla@goomail.com', 123456)
//     .then(user => {
//         console.log(user)
//         return getUserVideos(user.email)
//     })
//     .then(videos => videoDetails(videos[0]))
//     // .then(videos => {
//     //     console.log(videos[0])
//     //     return videoDetails(videos[0])
//     // })
//     .then(title => console.log(title))
//     .catch(err => console.log(err))

// // SYNC

// // const user = loginUser('bla@goomail.com', 123456)
// // const videos = videoDetails(user.email)

async function displayUser() {
    try {
        const loggedUser = loggedUserUser('bla@goomail.com', 13485)
        const videos = await getUserVideos(loggedUser.userEmail)
        const detail = await videoDetails(videos[0])
        console.log(detail);
    } catch(err) {
        console.log(err)
    }
}

displayUser();

console.log('Finish')

// Run two Promises at the same time with Promise.all(arr)
// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('getting stuff from YouTube')
//         resolve({ videos: [1, 2, 3, 4, 5] });
//     }, 2000);
// });

// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('stuff from fb')
//         resolve({ user: 'Name' })
//     }, 5000);
// });

// Promise.all([yt, fb])
//     .then(result => console.log(result));
