// Primitive

// 7 types : String, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId, id, anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 12345678998765431231331n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "sadek",
    age: 22,
}

const myFunction = function (){
    console.log("Hello world")
}

// console.log(typeof myFunction);



// **********************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ssquare"
let anotherName = myYoutubename
anotherName = "sadekshaikh"

// console.log(anotherName);
// console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@axis"
}

let userTwo = userOne
userTwo.email = "user@ms.com"

console.log(userOne)
console.log(userTwo)
