// Arrays

// in js arrays aren't primitives but are instead Array objects.
// js arrays are resizable and can contain a mix of different data types.
// js array-copy-operations create shallow copies
// shallow copy => a shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.
// deep copy => a deep copy of an object is a copy whose properties do not share the same reference point as those of the source object from which the copy was made.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "nagraj"]

const myArr2 =  new Array(1, 2, 3, 4)
// console.log(myArr[0])

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)  // adds element to the index 0
// myArr.shift()       // remove the element at index 0

// console.log(myArr.includes(9));  //return boolean value
// console.log(myArr.indexOf(9));   // return index value or -1 if doesn't have element => will return -1
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // joins myArr as a string

// console.log(myArr);
// console.log(typeof newArr);


// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)

