const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 68,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 203,
    mass: 89,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
// //1. Get array of all names
// const allNames = characters.map((character) => character.name);
// console.log(allNames);
// //2. Get array of all heights
// const allHeights = characters.map((character) => character.height);
// console.log(allHeights);
// //3. Get array of objects with just name and height properties
// const minifiedRecords = characters.map((character) => ({
//   name: character.name,
//   height: character.height,
// }));
// console.log(minifiedRecords);
// //4. Get array of all first names
// const firstNames = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstNames);
// //5. Get object with name and BMI of characters
// const BMICharacters = characters.map((character) => ({
//   name: character.name,
//   BMI: (character.mass / (character.height / 100) ** 2).toFixed(2),
// }));
// console.log(BMICharacters);

//***REDUCE***
// //1. Get total mass of all characters
// const totalMass = characters.reduce(
//   (acc, character) => acc + character.mass,
//   0
// );
// console.log(totalMass);
// //2. Get total height of all characters
// const totalHeight = characters.reduce(
//   (acc, character) => acc + character.height,
//   0
// );
// console.log(totalHeight);
// //3. Get total number of characters by eye color
// const charactersByEyeColor = characters.reduce((acc, character) => {
//   const color = character.eye_color;
//   if (acc[color]) {
//     acc[color]++;
//   } else {
//     acc[color] = 1;
//   }
//   return acc;
// }, {});
// console.log(charactersByEyeColor);
// //4. Get total number of characters in all the character names
// // const totalCharsNames = characters.reduce((acc, character) => {
// //   acc[character.name] = character.name.length;
// //   return acc;
// // }, {});
// // console.log(totalCharsNames);
// const totalNameCharacters = characters.reduce(
//   (acc, character) => acc + character.name.length,
//   0
// );
// console.log(totalNameCharacters);
// // 5. Get total number of surnames
// const totalSurnames = characters.reduce((acc, character) => {
//   const surname = character.name.split(" ")[1];
//   if (acc[surname]) {
//     acc[surname]++;
//   } else {
//     acc[surname] = 1;
//   }
//   return acc;
// }, {});
// console.log(totalSurnames);
// // 6. Get total number of genders
// const totalGenders = characters.reduce((acc, character) => {
//   const gender = character.gender;
//   if (acc[gender]) {
//     acc[gender]++;
//   } else {
//     acc[gender] = 1;
//   }
//   return acc;
// }, {});
// console.log(totalGenders);

//***FILTER***
// //1. Get characters with mass greater than 100
// const greater100Mass = characters.filter((character) => character.mass > 100);
// // console.log(greater100Mass);
// //2. Get characters with height less than 200
// const less200Height = characters.filter((character) => character.height < 200);
// console.log(less200Height);
// //3. Get all male characters
// const maleCharacters = characters.filter(
//   (character) => character.gender === "male"
// );
// console.log(maleCharacters);
// //4. Get all female characters
// const femaleCharacters = characters.filter(
//   (character) => character.gender === "female"
// );
// console.log(femaleCharacters);
// //5. Get brown and blue eye color characters
// const blueBrownEye = characters.filter((character) =>
//   ["blue", "brown"].includes(character.eye_color)
// );
// console.log(blueBrownEye);
// //6. Get characters whose surname is Skywalker
// const skywalkerSurname = characters.filter((character) =>
//     character.name.split(' ')[1] === 'Skywalker'
// );
// console.log(skywalkerSurname);

//***SORT***
// //1. Sort by mass
// const byMass = characters.sort((a, b) => b.mass - a.mass);
// console.log(byMass);
// //2. Sort by height
// const byHeight = characters.sort((a, b) => a.height - b.height);
// console.log(byHeight);
// //3. Sort by name
// const byName = characters.sort((a, b) =>
//   a.name === b.name ? 0 : a.name > b.name ? -1 : 1
// );
// console.log(byName);
// //4. Sort by gender
// // const byGender = characters.sort((a, b) =>
// //   a.gender === b.gender ? 0 : a.gender > b.gender ? 1 : -1
// // );
// const byGender = characters.sort((character) =>
//   character.gender === "male" ? -1 : 1
// );
// console.log(byGender);
// //5. Sort by surname
// const bySurname = characters.sort((a, b) => {
//   [surnameA, surnameB] = [a, b].map((elem) => elem.name.split(" ")[1]);
//   return surnameA === surnameB ? 0 : surnameA > surnameB ? 1 : -1;
// });
// console.log(bySurname);

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (character) => character.eye_color === "blue"
);
console.log(allBlueEyes);
//2. Does every character have mass more than 40?
const allMassMoreThan40 = characters.every((character) => character.mass > 40);
console.log(allMassMoreThan40);
//3. Is every character shorter than 200?
const allShorterThan200 = characters.every((character) => character.height < 200);
console.log(allShorterThan200);
//4. Is every character male?
const allMale = characters.every((character) => character.gender === "male");
console.log(allMale);
//5. Is every character name 10 or more letters long?
const allNamesLonger20 = characters.every(
  (character) => character.name.replace(/\s/g, "").length >= 10
);
console.log(allNamesLonger20);

//***SOME***
// //1. Is there at least one male character?
// const oneMaleCharacter = characters.some(
//   (character) => character.gender === "male"
// );
// console.log(oneMaleCharacter);
// //2. Is there at least one character with blue eyes?
// const oneBlueEyes = characters.some(
//   (character) => character.eye_color === 'blue'
// );
// console.log(oneBlueEyes);
// //3. Is there at least one character taller than 210?
// const oneTallerThan210 = characters.some(
//   (character) => character.height > 210
// );
// console.log(oneTallerThan210);
// //4. Is there at least one character that has mass less than 50?
// const oneMassLessThan50 = characters.some(
//   (character) => character.mass < 50
// );
// console.log(oneMassLessThan50);
// //5. Is there at least one character that has more than 100 mass?
// const oneMassMoreThan100 = characters.some(
//   (character) => character.mass > 100
// );
// console.log(oneMassMoreThan100);
