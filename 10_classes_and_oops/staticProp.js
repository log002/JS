class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sadek = new User('sadek')
// console.log(sadek.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }


}

const teacher = new Teacher('teacher', 'teacher@Teacher.com')

teacher.logMe()
console.log(teacher.createId());
