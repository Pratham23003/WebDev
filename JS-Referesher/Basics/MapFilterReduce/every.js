//use .every to check if all nums are even or not
let arr = [2,4,6,8,10];

let ans = arr.every((val) => {
    return val%2 === 0;
});
console.log(ans);