// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// the reason is that an equality check == and comparisons >, <, >==, <== work differently
// Comparison convert null to a number, treating it as 0. Thats why (3) null >= 0 is true ans (1) null > 0 is false


// console.log(undefined == 0)  // false
// console.log(undefined >= 0)  // false
// console.log(undefined <= 0)  // false
// console.log(undefined != 0)  // true
// console.log(undefined > 0)   // false
// console.log(undefined < 0)   // false


// ===
console.log("2" == 2)       // allows conversion and then compares
console.log("2" === 2)      // conversion is not allowed to returns false as both have different data types
