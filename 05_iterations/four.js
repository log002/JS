// for in => return value
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObject) {
//     console.log(`${key} is shortcut for ${myObject[key]}`);
    
// }

const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(programming[key]);
    
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('JP', "Japan")
map.set('IN', "India")

// nothing will be printed bcz maps can't be iterated like this
// for(const key in map){
//     console.log(key);
    
// }