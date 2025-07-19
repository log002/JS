// Arrays
const myArr = []
// %DebugPrint(myArr)       // => will not, we'll ned v8-debug to run this through terminal


// continuous , Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]      // PACKED_SMI_ELEMENTS => only number can be added

arrTwo.push(6.0)        // PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')        // PACKED_ELEMENTS

arrTwo[10] = 11         // HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9])

// whenever we have holes in array we have to go through following checks whenever we have to access array elements, this checks makes it costly
// 1. bound check
// 2. hasOwnProperty(arrTwo, 9)
// 3. hasOwnProperty(arrTwo.prototype, 10)
// 4. hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js


const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// optimization ranking is as followed
// SMI > DOUBLE > PACKED
// HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED

const arrFour = new Array(3)    // just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'    // HOLEY_ELEMENTS
arrFour[1] = '2'    // HOLEY_ELEMENTS
arrFour[2] = '3'    // HOLEY_ELEMENTS


// we can optimize above approach
const arrFive = []
arrFive.push('1')   // PACKED_ELEMENTS
arrFive.push('2')   // PACKED_ELEMENTS
arrFive.push('3')   // PACKED_ELEMENTS


const arrSix = [1, 2, 3, 4, 5]      
arrSix.push(NaN)    // PACKED_DOUBLE
arrSix.push(Infinity)    // PACKED_DOUBLE
// that's why always check values while inserting in an array so that we can avoid these things which may be indirectly slowing down our code

// for, for-of, forEach => use these methods wherever possible instead of user defined