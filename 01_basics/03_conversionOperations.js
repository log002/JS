// let score = 33       // valueInNumber = 33 after conversion
// let score = "33"     // valueInNumber = 33 after conversion
// let score = "33abc"  // valueInNumber = NaN after conversion
// let score = null     // valueInNumber = 0 after conversion
// let score = undefined    // valueInNumber = Nan after conversion
let score = true     // valueInNumber = 1 after conversion

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN => Not a Number => typeof(NaN) = number
// true => 1; false => 0
// null => 0
// undefined => NaN



// let isLoggedIn = 1
// let isLoggedIn = ""
// let isLoggedIn = "sadek"
let isLoggedIn = 33  // 33 => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "sadek" => true


let someNumber = 33
let StringNumber = String(someNumber)
// console.log(StringNumber)
// console.log(typeof StringNumber)
