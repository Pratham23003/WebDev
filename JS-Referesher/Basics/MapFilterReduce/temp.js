const fruits = ["apple", "banana", "grapes"];
fruits.push("Mango");
fruits.unshift("Pineapple");
console.log(fruits);

let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();

// use map to sqr each number
let arr = [1,2,3,4,5];
let newArr = arr.map((val) => {
    return val*val;
})
console.log(newArr);

// use filter to keep number greater than 10
let arr2 = [23,1,4,6,8,122,3,19,38,8];
let newArr2 = arr2.filter((val) => {
    if(val > 10) return true;
})
console.log(newArr2);

// use reduce to find the sum of this array
let arr3 = [10,20,30];
let newArr3 = arr3.reduce((acc, val) => {
    return acc+val;
}, 0);
console.log(newArr3);

// merge two operators using spread operator
let a = [1,2]
let b = [3,4];
let c = [...a,...b];
console.log(c);