class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const teacher = new Teacher('sadek', 'sadek@teacher.com', '123')

teacher.addCourse()

const user = new User('shaikh')

user.logMe()
teacher.logMe()

console.log(teacher === Teacher);
console.log(teacher instanceof Teacher);
