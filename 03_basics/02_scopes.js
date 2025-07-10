// var c = 300  // not to be used bcz created the issue of scope
let a = 300     // global scope
if(true){
    let a = 10      // block scope or local scope
    const b = 20
    // var c = 30
    console.log("Inner : ", a)
}

console.log(a);
// console.log(b);
// console.log(c);
