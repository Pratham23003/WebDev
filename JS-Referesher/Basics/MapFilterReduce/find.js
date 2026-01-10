//use find to get first number less than 10 
const nums = [12, 15, 3, 8, 20];
let newNums = nums.find((val) => {
    return val<10;
});
console.log(newNums);

