// reduce

const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function(acc, curr){
//     console.log(`acc : ${acc} and curr : ${curr}`);
    
//     return acc + curr
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "python course",
        price: 499
    },
    {
        itemName: "java course",
        price: 599
    },
    {
        itemName: "data science course",
        price: 999
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);
