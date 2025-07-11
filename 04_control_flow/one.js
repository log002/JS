// if

// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }
// console.log("executed");


// <, >, <=, >=, ==, !=, ===, !==
// === also check the type of the both operands. can be used for strict checking

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);    // this will return error as it is out of it's scope

// const balance = 300

// if(balance > 500) console.log("test"),  // , is used to state that our scope is not ended and still we have some code to go under the if condition
// console.log("test1");   // if ; or , is not given then scope ends at the extra white space given
// // not recommended to write such code.

// console.log("failed")

const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
    
// }else if(balance < 750){
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 900");
    
// }else{
//     console.log("greater than 900");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2 === 3){
    console.log("Allowed to buy courses");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}