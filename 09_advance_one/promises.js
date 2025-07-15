// create promise
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, ceryptography, network calls
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()   // => connects it to .then written just after setTimeout 
//     }, 1000)
// })

// // consume promise
// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// // above both tasks written in same block of code
// new Promise(function(resolve, reject){
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })


// // data consumption through resolve
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "sadek", email: "sadek@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({
//                 username: "sadek",
//                 password: "123"
//             })
//         }else{
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// })

// const username = promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
// })  // => this syntax is wrong the correct one is written below 

// promiseFour.then((user) =>{
//     console.log(user);
//     return user.username    
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
    
// }).finally(() => console.log("The promise is either resolved or rejected" )
// )



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({
//                 username: "Javascript",
//                 password: "123"
//             })
//         }else{
//             reject("Error: JS went wrong")
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
    
// }

// consumePromiseFive()

// async await can't handle error directly so we need to include it into try catch if needed


// with try catch
// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const data = response.json()    // this takes time so it'll be not printed in some cases so we will add await with it
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ", error);
        
//     }
// }
// getAllUsers()

// last task with .then nad .catch
fetch('https://api.github.com/users/log002').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error)
)