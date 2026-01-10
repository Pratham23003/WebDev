//use some() to find if a student has scored more than 35 or not.
const scores = [45, 60, 28, 90];
const scoreMoreThan35 = scores.some((val) => {
    return val<35;
});
console.log(scoreMoreThan35);