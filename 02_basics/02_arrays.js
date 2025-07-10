const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)     // proves that arrays can accept any value => boolean,int, array, string etc.

// console.log(marvel);
// console.log(marvel[3][1])

// const all = marvel.concat(dc)
// console.log(all);

const allNew = [...marvel, ...dc]
// console.log(allNew);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const usableArr = anotherArray.flat(Infinity)
// console.log(usableArr);


// console.log(Array.isArray("Sadek"))
// console.log(Array.from("sadek"))
// console.log(Array.from({name: "sadek"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


