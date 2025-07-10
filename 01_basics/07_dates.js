// Dates

let myDate = new Date()
// console.log(typeof(myDate))
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2025, 0, 10)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025, 0, 10, 4, 5)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2025-07-10")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: "long",
})






