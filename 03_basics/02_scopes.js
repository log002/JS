// var c = 300  // not to be used bcz created the issue of scope
let a = 300     // global scope
if(true){
    let a = 10      // block scope or local scope
    const b = 20
    // var c = 30
    // console.log("Inner : ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sadek"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website)

    two()

}

// one()

if(true){
    const username = "sadek"
    if(username === "sadek"){
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website)
}

// console.log(username)


// ********* interesting ***********

console.log(addOne(5))  // will work fine
function addOne(num){
    return num + 1
}



// console.log(addTwo(5))      // will give error
const addTwo = function(num){
    return num + 2
}
