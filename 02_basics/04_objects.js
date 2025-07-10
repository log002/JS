// const tinderUser = new Object()  // singleton object
const tinderUser = {}               // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@google.com",
    fullname: {
        userfullname: {
            firstname: "sadek",
            lastname: "shaikh"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)  // Object.assign(target, source1, source2....)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);


const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"  
    }
]

// console.log(users[1].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js course",
    price: "899",
    courseInstructor: "sadek"
}

// course.courseInstructor

// const {courseInstructor } = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course   // destructuring
// console.log(instructor);

// {
//     "name": "sadek",
//     "courseName": "js course",
//     "price": "free" 
// }