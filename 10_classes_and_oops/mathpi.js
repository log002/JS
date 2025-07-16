// console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);



const chai = {
    name: 'masala chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`code fat gaya`);
        
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
chai.name = "cold coffee"
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
// chai.name = "tea"
// console.log(chai.name);

// for(let [key, value] of chai){   //=> this will throw an error as chai is not iterables
//     console.log(`${key} : ${value}`);
    
// }
for(let [key, value] of Object.entries(chai)){
    // console.log(`${key} : ${value}`);       // => this will print the function defined as it is written, we don't want it like that so we'll have to add a condition check

    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
        
    }
}

// if we want to stop or disabel iteration then we can set enumerable to false
// let's have a look
Object.defineProperty(chai, 'name', {   // => we have set enumerable for name as false so we can't iterate the value name
    enumerable: false
})

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }
}