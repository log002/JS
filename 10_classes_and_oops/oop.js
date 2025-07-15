const user = {
    username : "sadek",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
        
        
        
    }
}
// "this" is used when we are refering to current context
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);   // => here "this" refers to global context


// Constructor function

// const promiseOne = new Promise()     // here "new" is contructor function => allows to create multiple instances from the same object

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this  // => this line makes no difference as it is implicitly defined
}

// const user1 = User('sadek', 12, true)
// const user2 = User('Learn js', 2, false)    // => this will overwrite the user1 values, that's why we use "new" keyword to avoid this issue
// contructor function everytime provides you with a new copy so that original/other instances will not be affected
const user1 = new User('sadek', 12, true)
const user2 = new User('Learn js', 2, false)    // provides a new copy as we used "new" in this line
// console.log(user1);
// console.log(user2);
console.log(user2.constructor);     // constructor property is a self reference

