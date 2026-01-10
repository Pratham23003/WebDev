const numbers = [2,5,8,10,3];

//return 2* val
let newNumbers = numbers.map(function (val){
    return 2*val;
});
console.log(numbers);
console.log(newNumbers);

// convert to string
let convertToString = numbers.map(function (val){
    return val.toString();
});
console.log(convertToString);

//square each num
let sqrNum = numbers.map((val) => {
    return val*val;
});
console.log(sqrNum);

//add 1 to every num
let addOneToEveryNum = numbers.map((val) => {
    return ++val;
});
console.log(addOneToEveryNum);

//return values > 5
let valuesGreaterThanFive = numbers.map((val) => {
    if(val < 5) return val;
});
console.log(valuesGreaterThanFive);
//since map does NOT remove .. map only transforms. this is not a map problem its just a filter problem.
