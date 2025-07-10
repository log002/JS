const user = {
    username: "sadek",
    fees: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Sadek"
//     console.log(this.username)

// }

// chai()


// const chai = function(){
//     let username = "sadek"
//     console.log(this.username)
// }

// chai()

// const chai = () =>{
//     let username = "sadek"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "sadek"})

console.log(addTwo(2, 3));

