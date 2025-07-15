function SetUserName(username){
    // complex DB calls
    this.username = username
    console.log("setusername called");
    
}

function createUser(username, email, password){
    // SetUserName(username)   // => here the function is just called
    // SetUserName.call(username)  // => now this is being called => both above will just call the function but when it is completed in call stack it's all function and references also vanishes so we need to pass this as a parameter so that it will be saved for parent method
    SetUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", 'chai@google.com', 123)
console.log(chai);
