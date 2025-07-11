const coding = ["js", "rb", "java", "python", "cpp"]

// coding.forEach( function (el) {
//     console.log(el);
// } )


// coding.forEach( (el) =>{
//     console.log(el);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)     // only need to give reference and all elemetns of coding will be printed

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )