const arr = [1,2,3,4,5,6];

let newArr = arr.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);
console.log(newArr);

const numbers = [2, 5, 8, 10, 3];

//find product 
let newNums = numbers.reduce((accumulator, val) => {
    return accumulator*val;
},1);
console.log(newNums);

//find largest num
let largestNum = numbers.reduce((accumulator, val) => {
    if(accumulator < val) return val;
    else return accumulator;
},0)
console.log(largestNum);

//find smallest num
let smallestNum = numbers.reduce((accumulator, val) => {
    if(accumulator > val) return val;
    else return accumulator;
},2)
console.log(smallestNum);

//find smallestnume

//count how many nums greater than 5
let numsGreaterThan5 = numbers.reduce((acc, val) => {
    if(val >= 5){
        acc++;
    }
    return acc;
},0);
console.log(numsGreaterThan5);


//build an array of squares using reduce
let arraySquared = numbers.reduce((acc,val) => {
    acc.push(val*val);
    return acc;
}, []);
console.log(arraySquared);