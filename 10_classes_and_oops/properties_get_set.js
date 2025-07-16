// example of function based syntax for getters and setters
function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const user = new User('teacher@user.com', 'teeacher')
console.log(user.email);


