let myName = "Sadek      "
let myChannel = "Ssquare      "

// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman', 'ironman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.sadek = function(){    // => provides prototype to all the objects
    console.log(`sadek is present in all objects`);
}

Array.prototype.heySadek = function(){  // => provides prototype to Arrays only
    console.log(`Sadek says hello`);
    
}

// myHeros.sadek()
// myHeros.heySadek()
// heroPower.heySadek()


// Inheritance
const User = {
    name: "user",
    email: 'user@google.com'

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax for above code
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "JS With Me      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"sadek".trueLength()
"coldCoffee".trueLength()