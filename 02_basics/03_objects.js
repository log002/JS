// singleton => can be only created by constructor and not by literals
// Object.create   // => through constructor method and called singleton

// object literals

const mySym = Symbol("key1")
// console.log(mySym);


const jsUser = {
    name: "sadek",
    "full name": "sadek shaikh",
    // mySym: "mykey1",     // here the type will be string
    [mySym]: "mykey1",     // here also the type will be string but the correct way to use symbol but it is considered as symbol when printing or doing any operations
    // [mySym]: Symbol("mykey1"),      // here the type will be symbol 
    age: 21,
    location: "Pune",
    email: "sadek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); // this can be accessed only with this method

// console.log(jsUser.mySym);    // symbol can't be accessed like this
// console.log(jsUser[mySym]);

jsUser.email = "sadek@axl.com"
// Object.freeze(jsUser)
jsUser.email = "sadek@yml.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user"); 
}
jsUser.greetingTwo= function(){
    console.log(`Hello js user, ${this.name}`); 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




