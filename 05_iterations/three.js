// for of => return key

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for(const num of arr){
//     console.log(num);
    
// }

// const greetings = "Hello world"
// for(const ch of greetings){
//     console.log(`Each char is ${ch}`);
    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('JP', "Japan")
map.set('IN', "India")

// console.log(map);

// for(const [key, value] of map){
//     console.log(key, ':-', value);
// }

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// this will not work bcz objects are not iterable
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }
