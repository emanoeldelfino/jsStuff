// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // console.log(combined);

// // const combine = [...first, 'a', ...second, 'b'];
// // console.log(combine);

// const clone = [...first];
// console.log(first);
// console.log(clone);

const first = { name: 'Mosh' };
const second = { job: 'Instructor' };

const combined = { ...first, ...second, location: 'Australia' };

const clone = {...first};
