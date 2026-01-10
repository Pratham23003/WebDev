let arr = [1,2,3,4,5,6,7,8];

let newArr = arr.filter((val) => {
    if(val > 5) return true;
})
console.log(newArr);

//number > 5
const numbers = [2,5,8,10,3,15,7];
let numsGreaterThan5 = numbers.filter((val) => {
    if(val > 5) return true;
})
console.log(numsGreaterThan5);

// even nums only
let evenNums = numbers.filter((val) => {
    if(val % 2 === 0) return true;
})
console.log(evenNums);

//odd nums only 
let oddNums = numbers.filter((val) => {
    if(val % 2 !== 0) return true;
})
console.log(oddNums);

let numsBetween5nd10 = numbers.filter((val) => {
    if(val == 5 || val == 8 || val == 10 || val == 7) return true;
});
console.log(numsBetween5nd10);

let removeNumsLessThan5 = numbers.filter((val) => {
    if(val >= 5) return true;
});
console.log(removeNumsLessThan5);