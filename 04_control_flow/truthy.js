const userEmail = "sadek@google.com"

// if(userEmail){
//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email");
    
// }

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// other than false all are truthy
// "0", 'false', " ", [], {}, function(){}, etc..

// const arr = []
// if(arr.length === 0){
//     console.log("Array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }

// false == 0 => true
// false === 0 => false
// false == '' => true
// false === '' => false


// console.log(false == '')

// Nullish Coalescing operator(??) : null, undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);


// Ternary operator
// condition ? true : false 

const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");