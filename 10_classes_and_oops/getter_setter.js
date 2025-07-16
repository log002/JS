class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    
    get password(){
        return `${this._password}abc`
    }

    set password(str){
        this._password = str
    }
}

const sadek = new User('sadek@gmail.com', 'abc')
console.log(sadek.password);
console.log(sadek.email);
