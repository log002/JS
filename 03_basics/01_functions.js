// function sayMyName(){
//     console.log("s");
//     console.log("a");
//     console.log("d");
//     console.log("e");
//     console.log("k");
    
// }

// sayMyName    //reference for function
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sadek"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){   // ... => rest operator written same as spread operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600));

const user = {
    username: "sadek",
    fees: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and fees is ${anyobject.fees}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     fees: 299
// })

const myNewArr = [200, 400, 300, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr))

