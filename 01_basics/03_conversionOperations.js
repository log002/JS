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
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "sadek" => true


let someNumber = 33
let StringNumber = String(someNumber)
// console.log(StringNumber)
// console.log(typeof StringNumber)


// ************ Operations *************
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 3)
// console.log(2 / 3)
// console.log(2  % 3)

let str1 = "hello"
let str2 = " sadek"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log("1" + (2 + 2))
// console.log(2 + 2 + "1")
// console.log((2 + 2) + "1")
// console.log((3 + 4) * 5 % 3)


// console.log(true)
// console.log(+true)   // following two are not preferred in production
// console.log(+"")

let num1, num2, num3
// num1 = num2 = num3 = 2 + 2 // can be done but not preferred

let gameCounter = 100
// gameCounter++
// ++gameCounter
// console.log(gameCounter);
let x = gameCounter++
let y = ++gameCounter
console.log(x);
console.log(y);


