//map filter reduce chaining
// Do this in ONE chain (no intermediate variables):
// Find the sum of squares of numbers greater than 5

const numbers = [2, 5, 8, 10, 3, 15, 7];

let newArray = numbers.filter((val) => {
    if(val > 5) return true;
}).map((val) => {
    return val*val;
}).reduce((acc,val) => {
   return acc+val; 
},0);
console.log(newArray);