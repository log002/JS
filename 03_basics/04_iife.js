// Immediately Invoked Function Expressions IIFE


// function one(){
//     console.log(`DB CONNECTED`);   
// }
// one()

// above code can also written as shown below known as iife where ()() syntax is used first () for function definition and second() for call

(function one(){
    // named iife
    console.log(`DB CONNECTED`);
})();   // always give ; after iife to avoid error of stopping the context

// (function two(){
//     console.log(`DB CONNECTED TWO`);
// })();  


(() => {
    console.log(`DB CONNECTED TWO`);
})();

((name) =>{
    console.log(`${name}, welcome to DB`)
})("sadek")
